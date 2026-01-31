'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogIn, Loader2 } from 'lucide-react';
import { useAuth } from '../../hooks/use-auth';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        setError(null);
        try {
            await login(data);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to login. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
            <div className="max-w-md w-full space-y-8 p-8 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10 mb-4">
                        <LogIn className="w-8 h-8 text-blue-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Welcome back</h2>
                    <p className="mt-2 text-zinc-400">Please enter your details to sign in</p>
                </div>

                {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1.5" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                {...register('email')}
                                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-zinc-500"
                                placeholder="you@example.com"
                                type="email"
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1.5" htmlFor="password">
                                Password
                            </label>
                            <input
                                {...register('password')}
                                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-zinc-500"
                                placeholder="••••••••"
                                type="password"
                            />
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>
                            )}
                        </div>
                    </div>

                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                Sign in
                                <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <p className="text-center text-zinc-500 text-sm">
                    Don't have an account?{' '}
                    <Link className="text-blue-500 hover:text-blue-400 font-medium transition-colors" href="/register">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
}
