import { MultipleChoice } from '../multiple-choice';
import { SingleChoice } from '../single-choice';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { UserInfoForm } from '../user-info-form';

const DUMMY_DATA = [
  { id: 'q1', text: '선택지 1' },
  { id: 'q2', text: '선택지 2' },
  { id: 'q3', text: '선택지 3' },
  { id: 'q4', text: '선택지 4' },
];

export function StepTwo() {
  return (
    <>
      <UserInfoForm />
      <Card className="flex flex-col gap-5">
        <Badge>객관식 (복수선택)</Badge>
        <h2 className="body1 px-1.5 text-gray-600">
          1. 어떤 음식을 먹고 싶나요?
        </h2>
        <MultipleChoice choices={DUMMY_DATA} />
      </Card>
      <Card className="flex flex-col gap-5">
        <Badge>객관식 (단일선택)</Badge>
        <h2 className="body1 px-1.5 text-gray-600">
          2. 학교에 조리 시설이 있나요?
        </h2>
        <SingleChoice q1="y" q2="n" q1Text="네" q2Text="아니요" />
      </Card>
    </>
  );
}
