import Image from 'next/image';

export function Header() {
  return (
    <div className="flex w-full items-center justify-center p-5">
      <Image src="/logo-text.svg" width={116} height={51} alt="logo" />
    </div>
  );
}
