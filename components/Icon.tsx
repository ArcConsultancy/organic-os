import Image from "next/image";

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({
  width = 200,
  height = 67,
  className = "",
}: IconProps) {
  return (
    <Image
      src="/images/organic-os-logo.png"
      alt="OrganicOS"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}
