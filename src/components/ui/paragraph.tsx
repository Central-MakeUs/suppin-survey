import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type ParagraphProps = ComponentProps<'p'>;

export function Paragraph({ className, children }: ParagraphProps) {
  return <p className={cn('text-cmc_gray-3 body1', className)}>{children}</p>;
}
