'use client';

import { z } from 'zod';
import { Card } from './ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { userInfoSchema } from '@/lib/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

type UserInfoFormType = z.infer<typeof userInfoSchema>;

export function UserInfoForm() {
  const form = useForm<UserInfoFormType>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      nickname: '',
      address: '',
      contact: '',
    },
  });

  const submitHandler = (values: UserInfoFormType) => {
    console.log(values);
  };

  return (
    <Card className="flex flex-col gap-4 pb-14">
      <Badge>개인정보 수집</Badge>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2.5">
            <FormLabel className="body1 text-cmc_gray-3">
              닉네임을 입력해주세요
            </FormLabel>
            <FormField
              name="nickname"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[5px] border-none bg-cmc_gray-5 outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <FormLabel className="body1 text-cmc_gray-3">
              주소를 입력해주세요
            </FormLabel>
            <FormField
              name="address"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[5px] border-none bg-cmc_gray-5 outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <FormLabel className="body1 text-cmc_gray-3">
              연락처를 입력해주세요
            </FormLabel>
            <FormField
              name="contact"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[5px] border-none bg-cmc_gray-5 outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </Card>
  );
}
