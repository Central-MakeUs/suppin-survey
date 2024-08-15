import { Choice } from '@/components/choice';
import { Policy } from '@/components/policy';
import { Subjective } from '@/components/subjective';
import { Badge } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';
import { getSurvey } from '@/services/quries';

export default async function SurveyPage({
  params,
}: {
  params: { uuid: string };
}) {
  const data = await getSurvey(params.uuid);

  return (
    <div className="flex min-h-full flex-col justify-center gap-4 bg-sub-2 p-5">
      <Box>
        <Badge>개인정보 수집</Badge>
        {data?.data && <Policy items={data.data.personalInfoOptions} />}
      </Box>
      {data?.data &&
        data.data.questions.map(question =>
          question.questionType === 'SUBJECTIVE' ? (
            <Subjective
              key={question.questionText}
              question={question.questionText}
            />
          ) : (
            <Choice key={question.questionText} question={question} />
          )
        )}
    </div>
  );
}
