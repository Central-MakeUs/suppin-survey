import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type ParagraphProps = ComponentProps<'p'>;

export function Paragraph({ className, children }: ParagraphProps) {
  return <p className={cn('body1 text-gray-600', className)}>{children}</p>;
}
