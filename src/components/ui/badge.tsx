import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

const badgeVariants = cva(
  'body4 flex justify-center items-center rounded-[8px] px-2.5 py-1',
  {
    variants: {
      variant: {
        primary: 'bg-sub-2 text-primary',
      },
      size: {
        md: 'h-[2rem] w-fit',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type BadgeProps = ComponentProps<'div'> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, children, variant, size }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))}>
      {children}
    </div>
  );
}
