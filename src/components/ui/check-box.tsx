import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ComponentProps } from 'react';
import { Button } from './button';

type CheckBoxProps = Omit<ComponentProps<'button'>, 'onClick'> & {
  isChecked: boolean;
};

export function CheckBox({ isChecked, ...props }: CheckBoxProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'h-5 w-5 rounded-full transition-colors',
        isChecked
          ? 'border-none bg-primary hover:bg-primary'
          : 'border-[#898F9F] bg-transparent hover:bg-transparent'
      )}
      {...props}
    >
      {isChecked ? (
        <Image src="/check.svg" alt="check" width={10} height={10} />
      ) : null}
    </Button>
  );
}
