import { z } from 'zod';

export const ContactFormSchema = z.object({
    name: z.string().min(2, "Ad en az 2 karakter olmalı"),
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    phone: z.string().optional(),
    message: z.string().min(10, "Mesaj en az 10 karakter olmalı"),
    token: z.string().min(1, "Turnstile doğrulaması gerekli")
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
