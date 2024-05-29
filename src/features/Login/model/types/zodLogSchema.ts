import { ZodType, z } from 'zod';

export const loginSchema: ZodType = z.object({
    email: z.string().email(),
    password: z.string(),
});
