import Image from 'next/image';

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/logo kolweb3 .png"
      alt="KolWeb3"
      width={size}
      height={size}
      style={{ borderRadius: '7px' }}
    />
  );
}
