import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type BoxProps = ComponentProps<'div'> & {
  isActive?: boolean;
};

export function Box({ className, children, isActive, onClick }: BoxProps) {
  return (
    <div
      className={cn(
        'rounded-[10px] border border-solid px-3.5 py-3',
        isActive ? 'border-primary bg-sub-2' : 'border-gray-75 bg-gray-50',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
