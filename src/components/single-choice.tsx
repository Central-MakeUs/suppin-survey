'use client';

import { useState } from 'react';
import { Box } from './ui/box';
import { CheckBox } from './ui/check-box';

type SingleChoiceType = {
  q1: string;
  q2: string;
  q1Text: string;
  q2Text: string;
};

export function SingleChoice({ q1, q2, q1Text, q2Text }: SingleChoiceType) {
  const [select, setSelect] = useState<string>('');

  return (
    <div className="flex w-full flex-col gap-2.5">
      <Box
        className="flex items-center gap-3 md:w-full"
        onClick={() => setSelect(q1)}
        isActive={select === q1}
      >
        <CheckBox isChecked={select === q1} />
        <span className="body3 text-[#3B404E]">{q1Text}</span>
      </Box>
      <Box
        className="flex items-center gap-3 md:w-full"
        onClick={() => setSelect(q2)}
        isActive={select === q2}
      >
        <CheckBox isChecked={select === q2} />
        <span className="body3 text-[#3B404E]">{q2Text}</span>
      </Box>
    </div>
  );
}
