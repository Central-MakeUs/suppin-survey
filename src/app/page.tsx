import { Intro } from '@/components/intro';
import { Policy } from '@/components/policy';
import { UserInfoForm } from '@/components/user-info-form';

export default function HomePage() {
  return (
    <div className="bg-sub-2 flex min-h-screen w-full flex-col gap-2.5 p-5">
      <Intro />
      <Policy />
      <UserInfoForm />
    </div>
  );
}
