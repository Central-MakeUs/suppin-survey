import { getSurvey } from '@/services/quries';

export default async function SurveyPage({
  params,
}: {
  params: { uuid: string };
}) {
  const data = await getSurvey(params.uuid);
  console.log(data);

  return <div />;
}
