import { z } from 'zod';

export const userInfoSchema = z.object({
  nickname: z.string().min(1, { message: '닉네임을 입력해주세요.' }),
  address: z.string().min(1, { message: '주소를 입력해주세요.' }),
  contact: z.string(),
});
