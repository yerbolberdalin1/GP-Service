from pathlib import Path
import math

from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
RAW_DIR = ROOT / "public/assets/hero-orbit/raw"
OUT_DIR = ROOT / "public/assets/hero-orbit/cut"
OUT_DIR.mkdir(parents=True, exist_ok=True)

CONFIG = {
    "worker-blue.png": {
        "out": "worker-cut.png",
        "hard": 54,
        "soft": 108,
        "blue_bias": 18,
        "chroma_soft": 0.62,
        "despill": 0.34,
    },
    "pallet-blue.png": {
        "out": "pallet-cut.png",
        "hard": 60,
        "soft": 124,
        "blue_bias": 22,
        "chroma_soft": 0.58,
        "despill": 0.42,
    },
    "van-blue.png": {
        "out": "van-cut.png",
        "hard": 48,
        "soft": 104,
        "blue_bias": 18,
        "chroma_soft": 0.58,
        "despill": 0.3,
    },
    "forklift-blue.png": {
        "out": "forklift-cut.png",
        "hard": 54,
        "soft": 116,
        "blue_bias": 18,
        "chroma_soft": 0.58,
        "despill": 0.36,
    },
}


def avg_corner_color(img, size=44):
    w, h = img.size
    corners = [
        (0, 0, size, size),
        (w - size, 0, w, size),
        (0, h - size, size, h),
        (w - size, h - size, w, h),
    ]

    pixels = []
    for box in corners:
        crop = img.crop(box).convert("RGB")
        pixels.extend(list(crop.getdata()))

    r = sum(p[0] for p in pixels) / len(pixels)
    g = sum(p[1] for p in pixels) / len(pixels)
    b = sum(p[2] for p in pixels) / len(pixels)
    return (r, g, b)


def corner_palette(img, size=70):
    w, h = img.size
    boxes = [
        (0, 0, size, size),
        (w - size, 0, w, size),
        (0, h - size, size, h),
        (w - size, h - size, w, h),
    ]
    colors = []

    for box in boxes:
        crop = img.crop(box).convert("RGB")
        pixels = list(crop.getdata())
        colors.append(
            (
                sum(p[0] for p in pixels) / len(pixels),
                sum(p[1] for p in pixels) / len(pixels),
                sum(p[2] for p in pixels) / len(pixels),
            )
        )

    colors.append(avg_corner_color(img, size=44))
    return colors


def color_distance(a, b):
    return math.sqrt(
        (a[0] - b[0]) ** 2
        + (a[1] - b[1]) ** 2
        + (a[2] - b[2]) ** 2
    )


def min_bg_distance(rgb, bg_colors):
    return min(color_distance(rgb, bg) for bg in bg_colors)


def blue_background_score(rgb, bg, blue_bias):
    r, g, b = rgb
    bg_r, bg_g, bg_b = bg

    blue_strength = 0
    if b > r + blue_bias and b > g - 20:
        blue_strength = min(1, max(0, (b - max(r, g) - blue_bias + 20) / 88))

    cyan_strength = 0
    if g > r + blue_bias and b > r + blue_bias:
        cyan_strength = min(
            1,
            max(0, (min(g, b) - r - blue_bias) / 90),
        )

    cyan_shadow = 0
    if max(g, b) > 54 and g > r + 20 and b > r + 24:
        cyan_shadow = min(1, max(0, (min(g - r, b - r) - 18) / 62))

    hue_match = min(
        1,
        max(0, (255 - abs(b - bg_b) * 0.55 - abs(g - bg_g) * 0.42 - abs(r - bg_r) * 0.18) / 255),
    )
    return max(blue_strength, cyan_strength, cyan_shadow) * hue_match


def is_cyan_background_pixel(rgb):
    r, g, b = rgb
    return (
        max(g, b) > 48
        and g > r + 12
        and b > r + 18
        and ((g + b) / 2) > r + 22
    )


def chroma_key(input_path, output_path, hard, soft, blue_bias, chroma_soft, despill):
    img = Image.open(input_path).convert("RGBA")
    rgb_img = img.convert("RGB")
    bg = avg_corner_color(rgb_img)
    bg_colors = corner_palette(rgb_img)

    result = Image.new("RGBA", img.size)
    out_pixels = []
    removed = 0
    partial = 0

    for r, g, b, a in img.getdata():
        rgb = (r, g, b)
        d = min_bg_distance(rgb, bg_colors)
        blue_score = blue_background_score(rgb, bg, blue_bias)

        if d < hard or blue_score >= 0.98 or is_cyan_background_pixel(rgb):
            out_pixels.append((r, g, b, 0))
            removed += 1
            continue

        alpha = a
        if d < soft:
            alpha = min(alpha, int(255 * ((d - hard) / (soft - hard))))

        chroma_floor = max(0, chroma_soft - 0.18)
        if blue_score >= chroma_soft:
            alpha = 0
        elif blue_score >= chroma_floor:
            fade = (blue_score - chroma_floor) / (chroma_soft - chroma_floor)
            alpha = min(alpha, int(255 * (1 - fade)))

        if alpha < 255:
            partial += 1
            blue_pull = despill * (1 - alpha / 255)
            b = int(b * (1 - blue_pull) + max(r, g) * blue_pull)

        out_pixels.append((r, g, b, max(0, min(255, alpha))))

    result.putdata(out_pixels)

    alpha = result.getchannel("A")
    alpha = alpha.filter(ImageFilter.GaussianBlur(radius=0.32))
    result.putalpha(alpha)

    result.save(output_path)
    total = img.size[0] * img.size[1]
    print(
        f"Saved {output_path.relative_to(ROOT)} "
        f"(removed {removed / total:.1%}, soft {partial / total:.1%}, bg={tuple(round(x) for x in bg)})"
    )


def main():
    for src, config in CONFIG.items():
        input_path = RAW_DIR / src
        output_path = OUT_DIR / config["out"]
        if not input_path.exists():
            raise FileNotFoundError(f"Missing required input: {input_path}")

        chroma_key(
            input_path,
            output_path,
            hard=config["hard"],
            soft=config["soft"],
            blue_bias=config["blue_bias"],
            chroma_soft=config["chroma_soft"],
            despill=config["despill"],
        )


if __name__ == "__main__":
    main()
