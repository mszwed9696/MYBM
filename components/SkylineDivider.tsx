export default function SkylineDivider({ className = "", flip = false }: { className?: string, flip?: boolean }) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120V60L40 60V30L80 30V50L120 50V20L160 20V40L200 40V10L240 10V35L280 35V45L320 45V25L360 25V55L400 55V15L440 15V45L480 45V30L520 30V50L560 50V25L600 25V45L640 45V20L680 20V40L720 40V55L760 55V30L800 30V50L840 50V35L880 35V15L920 15V40L960 40V25L1000 25V50L1040 50V30L1080 30V45L1120 45V60L1160 60V120H1200V0H0V120Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
