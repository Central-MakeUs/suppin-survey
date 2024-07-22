import { SingleChoice } from './single-choice';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Paragraph } from './ui/paragraph';

export function Policy() {
  return (
    <Card className="flex flex-col gap-6">
      <Badge>정보 수집 동의</Badge>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        temporibus corrupti numquam quia quis quod culpa tenetur doloribus
        praesentium debitis, fugiat cupiditate aut tempora eligendi quasi
        aperiam, hic nihil veniam!
      </Paragraph>
      <SingleChoice
        q1="agree"
        q2="disagree"
        q1Text="네, 동의합니다."
        q2Text="아니요, 동의하지 않습니다."
      />
    </Card>
  );
}
