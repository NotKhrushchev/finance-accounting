import { ZodType, z } from 'zod';

export const registrationSchema: ZodType = z
    .object({
        name: z
            .string()
            .min(2, 'Name should contain at least 2 characters')
            .max(30, 'Name should contain no more than 30 characters'),
        email: z.string().email(),
        password: z
            .string()
            .min(8, 'Password must contain at least 8 characters'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });
