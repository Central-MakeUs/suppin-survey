'use client';

import { useState } from 'react';
import { Box } from './ui/box';
import { CheckBox } from './ui/check-box';

export function SelectBox() {
  const [select, setSelect] = useState<string>('');

  return (
    <div className="flex flex-col gap-2.5">
      <Box
        className="flex w-full items-center gap-3 md:w-[8.25rem]"
        onClick={() => setSelect('agree')}
        isActive={select === 'agree'}
      >
        <CheckBox isChecked={select === 'agree'} />
        <span className="body3 text-[#3B404E]">네, 동의합니다.</span>
      </Box>
      <Box
        className="flex w-full items-center gap-3 md:w-[8.25rem]"
        onClick={() => setSelect('disagree')}
        isActive={select === 'disagree'}
      >
        <CheckBox isChecked={select === 'disagree'} />
        <span className="body3 text-[#3B404E]">아니요, 동의하지 않습니다.</span>
      </Box>
    </div>
  );
}
