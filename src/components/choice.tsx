'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Badge } from './ui/badge';
import { Box } from './ui/box';
import { CheckIcon, CircleIcon } from './ui/icons';

type ChoiceType = {
  question: {
    questionType: 'SUBJECTIVE' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
    questionText: string;
    options: string[];
  };
};

export function Choice({ question }: ChoiceType) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleSelectAnswer = (option: string) => {
    if (question.questionType === 'SINGLE_CHOICE') {
      setSelectedAnswers([option]);
    } else if (question.questionType === 'MULTIPLE_CHOICE') {
      if (selectedAnswers.includes(option)) {
        setSelectedAnswers(prevState =>
          prevState.filter(answer => answer !== option)
        );
      } else {
        setSelectedAnswers(prevState => [...prevState, option]);
      }
    }
  };

  return (
    <Box>
      <Badge>
        {question.questionType === 'SINGLE_CHOICE'
          ? '객관식 (단일선택)'
          : '객관식 (복수선택)'}
      </Badge>
      <h2 className="text-gray-2 text-base font-medium">
        {question.questionText}
      </h2>
      {question.options.length !== 0
        ? question.options.map(option => (
            <div
              key={option}
              className={cn(
                'flex h-12 w-full cursor-pointer items-center gap-2.5 rounded-[10px] border border-solid px-4 py-2.5',
                selectedAnswers.includes(option)
                  ? 'border-primary bg-sub-2'
                  : 'border-gray-5 bg-gray-6'
              )}
              onClick={() => handleSelectAnswer(option)}
            >
              {selectedAnswers.includes(option) ? (
                <CheckIcon />
              ) : (
                <CircleIcon />
              )}
              <span className="text-gray-2 text-sm">{option}</span>
            </div>
          ))
        : null}
    </Box>
  );
}
