'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from '@/lib/types';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/surpass-logo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/global/Loader';
import { Separator } from '@/components/ui/separator';
import { actionLoginUser, actionSignUpUser } from '@/lib/server-actions/auth-actions';

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState('');

  const SignUpFormSchema = z
  .object({
    email: z.string().describe('Email').email({ message: 'Invalid Email' }),
    password: z
      .string()
      .describe('Password')
      .min(6, 'Password must be minimum 6 characters'),
    confirmPassword: z
      .string()
      .describe('Confirm Password')
      .min(6, 'Password must be minimum 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  });

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: { email: '', password: '', confirmPassword: ''},
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
   {email, password}
  ) => {
    const { error } = await actionSignUpUser({email, password});
    
    if (error) {
      form.reset();
      setSubmitError(error.message);
    }
    form.reset();
    // router.replace('/dashboard');
  };

  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) setSubmitError('');
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
      >
        <Link
          href="/"
          className="
          w-full
          flex
          justify-left
          items-center"
        >
          <Image
            src={Logo}
            alt="cypress Logo"
            width={50}
            height={50}
          />
          <span
            className="font-semibold
          dark:text-white text-4xl first-letter:ml-2"
          >
            surpass.
          </span>
        </Link>
        <FormDescription
          className="
        text-foreground/60"
        >
          An all-In-One Collaboration and Productivity Platform
        </FormDescription> 
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email" 
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
              disabled={isLoading}
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button
          type="submit"
          className="w-full p-4 hover:bg-primary-blue-600"
          size="lg"
          disabled={isLoading}
        >
          {!isLoading ? 'Create an account' : <Loader />}
        </Button>
        <span className="self-container">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-primary"
          >
            login
          </Link>
        </span>
      </form>
    </Form>
  );
};

export default LoginPage;