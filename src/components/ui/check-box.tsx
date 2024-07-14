'use client';

import { cn } from '@/lib/utils';
import { ComponentProps, useEffect, useState } from 'react';
import { Button } from './button';

type CheckBoxProps = Omit<ComponentProps<'button'>, 'onClick'> & {
  initialChecked?: boolean;
  onValueChange?: (isChecked: boolean) => void;
  isEditable?: boolean;
};

export function CheckBox({
  initialChecked = false,
  onValueChange,
  isEditable = true,
  ...props
}: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(isChecked);
    }
  }, [isChecked, onValueChange]);

  const handleClick = () => {
    if (!isEditable) {
      return;
    }
    setIsChecked(prev => !prev);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'h-5 w-5 rounded-full transition-colors',
        isChecked
          ? 'border-none bg-gray-100 hover:bg-gray-100'
          : 'border-[#898F9F] bg-transparent hover:bg-transparent'
      )}
      onClick={handleClick}
      {...props}
    />
  );
}
