'use client';

import { userInfoSchema } from '@/lib/schema';
import { formatPhoneNumber } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

type UserInfoFormType = z.infer<typeof userInfoSchema>;

export function UserInfoForm() {
  const [formattedContact, setFormattedContact] = useState<string>('');

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
    <div className="flex flex-col gap-4 pb-14">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="flex flex-col gap-6"
        >
          <Card className="flex flex-col gap-4 pb-14">
            <Badge>개인정보 수집</Badge>
            <div className="flex flex-col gap-2.5">
              <FormLabel className="body1 text-gray-500">
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
                        className="rounded-[5px] border-none bg-gray-50 outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <FormLabel className="body1 text-gray-500">
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
                        className="rounded-[5px] border-none bg-gray-50 outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <FormLabel className="body1 text-gray-500">
                연락처를 입력해주세요
              </FormLabel>
              <Controller
                name="contact"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        value={formattedContact}
                        className="rounded-[5px] border-none bg-gray-50 outline-none"
                        onChange={e => {
                          const input = e.target.value;
                          const formatted = formatPhoneNumber(input);
                          setFormattedContact(formatted);
                          field.onChange(formatted.replace(/\D/g, ''));
                        }}
                        maxLength={13}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>
          <Button
            type="submit"
            variant="default"
            className="head3 flex h-12 items-center justify-center rounded-[10px] text-white hover:bg-primary hover:opacity-90"
          >
            설문 제출하기
          </Button>
        </form>
      </Form>
    </div>
  );
}
