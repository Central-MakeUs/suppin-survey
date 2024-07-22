'use client';

import { useState } from 'react';
import { Box } from './ui/box';
import { CheckBox } from './ui/check-box';

type ChoiceType = {
  id: string;
  text: string;
};

type MultipleChoiceType = {
  choices: ChoiceType[];
};

export function MultipleChoice({ choices }: MultipleChoiceType) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex w-full flex-col gap-2.5">
      {choices.map(choice => (
        <Box
          key={choice.id}
          className="flex items-center gap-3 md:w-full"
          onClick={() => toggleSelection(choice.id)}
          isActive={selected.includes(choice.id)}
        >
          <CheckBox
            isChecked={selected.includes(choice.id)}
            className="rounded-[5px]"
          />
          <span className="body3 text-[#3B404E]">{choice.text}</span>
        </Box>
      ))}
    </div>
  );
}
