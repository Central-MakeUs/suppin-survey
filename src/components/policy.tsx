import { Badge } from './ui/badge';
import { Box } from './ui/box';
import { Card } from './ui/card';
import { CheckBox } from './ui/check-box';
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
      <Box className="flex w-full items-center gap-3 md:w-[8.25rem]">
        <CheckBox initialChecked={false} />
        <span className="body3 text-[#3B404E]">동의합니다.</span>
      </Box>
    </Card>
  );
}
