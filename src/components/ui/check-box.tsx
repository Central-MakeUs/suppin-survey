'use client';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { ComponentProps, useState, useEffect } from 'react';

type CheckBoxProps = Omit<ComponentProps<'button'>, 'onClick'> & {
  initialChecked?: boolean;
  onValueChange?: (isChecked: boolean) => void;
};

export function CheckBox({
  initialChecked = false,
  onValueChange,
  ...props
}: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(isChecked);
    }
  }, [isChecked, onValueChange]);

  const handleClick = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'h-5 w-5 rounded-full transition-colors',
        isChecked
          ? 'border-none bg-cmc_gray-4'
          : 'border-[#898F9F] bg-transparent'
      )}
      onClick={handleClick}
      {...props}
    />
  );
}
