import { StepOne } from '@/components/home/step-one';
import { StepTwo } from '@/components/home/step-two';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function HomePage({
  searchParams,
}: {
  searchParams: { step: string };
}) {
  if (!searchParams.step) {
    redirect('/?step=1');
  }

  return (
    <div className="flex min-h-screen w-full flex-col gap-2.5 bg-sub-2 p-5">
      {searchParams.step === '1' ? <StepOne /> : null}
      {searchParams.step === '2' ? <StepTwo /> : null}
      <Link href="/?step=2" className="mb-4 mt-[30px]">
        <Button
          variant="default"
          className="head3 flex h-12 w-full items-center justify-center rounded-[10px] text-white hover:bg-primary hover:opacity-90"
        >
          {searchParams.step === '1' ? '다음으로' : '제출하기'}
        </Button>
      </Link>
    </div>
  );
}
