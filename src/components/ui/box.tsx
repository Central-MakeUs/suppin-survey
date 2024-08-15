import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type BoxProps = ComponentProps<'div'>;

export function Box({ className, children, ...props }: BoxProps) {
  return (
    <div
      className={cn(
        'border-gray-6 flex flex-col gap-5 rounded-[10px] border border-solid bg-white p-5 shadow-[0px_0px_4px_0px_#00000040]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
