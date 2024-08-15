import { z } from 'zod';

export const defaultInputSchema = z.record(
  z.string().min(1, { message: '해당 필드는 필수 입력값입니다' })
);

export type DefaultInputType = z.infer<typeof defaultInputSchema>;
