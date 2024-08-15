'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { defaultInputSchema, DefaultInputType } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type PolicyProps = {
  items: { optionName: string }[];
};

export function Policy({ items }: PolicyProps) {
  const form = useForm<DefaultInputType>({
    resolver: zodResolver(defaultInputSchema),
    defaultValues: items.reduce((acc, item) => {
      acc[item.optionName] = '';
      return acc;
    }, {} as DefaultInputType),
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6">
        {items.map(item => (
          <FormField
            key={item.optionName}
            control={form.control}
            name={item.optionName}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="text-gray-2 text-base font-medium">
                  {item.optionName}을(를) 입력해주세요.
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={item.optionName}
                    className="text-gray-2 placeholder:text-gray-3 p-3 text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
  );
}
