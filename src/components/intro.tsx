import { Box } from './ui/box';
import { Card } from './ui/card';
import { CheckBox } from './ui/check-box';
import { Paragraph } from './ui/paragraph';

export function Intro() {
  return (
    <Card className="flex flex-col gap-6">
      <h1 className="text-[1.5rem] font-medium text-gray-900">
        스윗미업 푸드트럭 이벤트
      </h1>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        neque fugiat nesciunt enim inventore, earum consectetur deleniti ipsa
        recusandae beatae vero eos nihil, harum illo distinctio rem quae
        voluptatum voluptates.
      </Paragraph>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-1.5 md:flex-1">
          <h2 className="body2 text-[#677089]">이벤트 진행 기간</h2>
          <Box className="flex items-center gap-3">
            <CheckBox initialChecked={true} isEditable={false} />
            <span className="body3 line-clamp-1 text-[#3B404E]">
              2024. 6. 20 13:00 ~ 2024. 7. 01 17:00
            </span>
          </Box>
        </div>
        <div className="flex flex-col gap-1.5 md:flex-1">
          <h2 className="body2 text-[#677089]">당첨자 발표일</h2>
          <Box className="flex items-center gap-3">
            <CheckBox initialChecked={true} isEditable={false} />
            <span className="body3 line-clamp-1 text-[#3B404E]">
              2024. 7. 4 17:00
            </span>
          </Box>
        </div>
      </div>
    </Card>
  );
}
