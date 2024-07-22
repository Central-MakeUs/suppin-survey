import { SelectBox } from './select-box';
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
      <SelectBox />
    </Card>
  );
}
