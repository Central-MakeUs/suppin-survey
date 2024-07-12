import Image from 'next/image';

export function Header() {
  return (
    <div className="flex w-full items-center p-5">
      <Image src="/logo.svg" width={30} height={30} alt="logo" />
    </div>
  );
}
