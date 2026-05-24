"use client";

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

export default function SignUpPage() {
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

    };

    return (
        <div className="flex min-h-screen items-center justify-center  px-4">
            <div className="w-full max-w-md rounded-2xl bg-white/10 border border-white/40 p-6 shadow-lg">

                <h1 className="mb-2 text-center text-2xl font-semibold">
                    Create Account
                </h1>

                <p className="mb-6 text-center text-sm text-gray-500">
                    Join our job portal and start exploring opportunities
                </p>

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value.length < 2) {
                                return "Name must be at least 2 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Full Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>

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


                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label>Image Url</Label>
                        <Input placeholder="https://..." />
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
                        <Input placeholder="Enter password" />
                        <Description>
                            Minimum 8 characters, 1 uppercase, 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Confirm Password */}
                    <TextField
                        isRequired
                        name="confirmPassword"
                        type="password"
                        validate={(value, formData) => {
                            const password = formData?.get("password")?.toString();

                            if (value !== password) {
                                return "Passwords do not match";
                            }
                            return null;
                        }}
                    >
                        <Label>Confirm Password</Label>
                        <Input placeholder="Re-enter password" />
                        <FieldError />
                    </TextField>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 pt-2">
                        <Button type="submit" className="w-full">
                            <Check className="mr-2" />
                            Create Account
                        </Button>

                        <Button type="button" variant="secondary" className="w-full">
                            Already have an account? Sign In
                        </Button>
                    </div>
                </Form>

             
            </div>
        </div>
    );
}