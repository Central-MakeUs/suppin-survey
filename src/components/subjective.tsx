'use client';

import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Box } from './ui/box';
import { Textarea } from './ui/textarea';

export function Subjective({ question }: { question: string }) {
  const [answer, setAnswer] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
    adjustHeight(e.target);
  };

  const adjustHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <Box>
      <Badge>주관식</Badge>
      <h2 className="text-gray-2 text-base font-medium">{question}</h2>
      <Textarea
        onInput={handleInput}
        value={answer}
        className="placeholder:text-gray-3 text-gray-2 text-base"
        maxLength={500}
      />
    </Box>
  );
}
