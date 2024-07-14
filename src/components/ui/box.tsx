import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type BoxProps = ComponentProps<'div'>;

export function Box({ className, children }: BoxProps) {
  return (
    <div
      className={cn(
        'rounded-[10px] border border-solid border-[#E9EAEE] bg-gray-50 px-3.5 py-3',
        className
      )}
    >
      {children}
    </div>
  );
}
