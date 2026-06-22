import { z } from 'zod';

// new schema
export const accountSchema = z.object({
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9]+$/, 'Only letters and numbers'),
  password: z
    .string()
    .min(8, 'Min 8 chars')
    .regex(/[A-Z]/, 'Need uppercase')
    .regex(/[0-9]/, 'Need number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'],
});

export const personalSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  phone: z
    .string()
    .min(1, 'Phone is required')
    .regex(/^\d{10}$/, 'Must be 10 digits'),
});

export const addressSchema = z.object({
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  zip: z
    .string()
    .min(1, 'ZIP is required')
    .regex(/^\d{5}$/, 'Must be 5 digits'),
});

// Step 4: Merge all schemas in order → account → personal → address → full
export const fullSchema = accountSchema
  .merge(personalSchema)
  .merge(addressSchema);



// export const fullSchema = personalSchema.merge(addressSchema);