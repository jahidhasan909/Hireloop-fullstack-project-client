"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function SignInPage() {


  const route = useRouter()

  const searchParams = useSearchParams()

  const search = searchParams.get('redirect') || '/';

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const LogINUser = Object.fromEntries(formData.entries())


    const { data, error } = await authClient.signIn.email({

      password: LogINUser.password,

      email: LogINUser.email

    })
    if (data) {
      toast.success('Sing In Successfully ! ')
      route.push(search)
    }
    if (error) {
      toast.error(error.message)
    }



  };


  return (
    <div className="flex min-h-screen items-center justify-center  px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/10 border border-white/40 p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Welcome Back
        </h1>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            minLength={8}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Minimum 8 characters, 1 uppercase, 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Actions */}
          <div className="flex flex-col gap-2 pt-2">
            <Button type="submit" className="w-full">
              <Check className="mr-2" />
              Sign In
            </Button>

            <Button type="button" variant="secondary" className="w-full">
              Forgot Password
            </Button>
          </div>
        </Form>

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link href={`/singup?redirect=${search}`} className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}