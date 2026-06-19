export default function Logo({ light = false, compact = false, className = '' }) {
  if (light) {
    return (
      <span className={`inline-flex select-none items-center gap-2 ${className}`}>
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true">
          <rect x="2" y="6" width="14" height="2.6" rx="1.3" fill="#FF6A00" />
          <rect x="0" y="11.7" width="14" height="2.6" rx="1.3" fill="#FF6A00" opacity="0.65" />
          <rect x="2" y="17.4" width="14" height="2.6" rx="1.3" fill="#FF6A00" opacity="0.4" />
        </svg>
        <span className="leading-none">
          <span
            className="block text-[26px] font-black tracking-tight"
            style={{ color: '#FFFFFF', letterSpacing: '-0.04em' }}
          >
            G<span style={{ color: '#FF6A00' }}>P</span>
          </span>
          <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.34em] text-white/60">
            Service
          </span>
        </span>
      </span>
    )
  }

  return (
    <span className={`inline-flex w-fit select-none items-center ${className}`}>
      <img
        src="/logo-gp-service-comfort.png"
        alt="GP Service"
        className={`${compact ? 'w-[125px] sm:w-[135px] xl:w-[155px]' : 'w-[150px] sm:w-[180px] lg:w-[205px]'} h-auto`}
        width="410"
        height="100"
      />
    </span>
  )
}
