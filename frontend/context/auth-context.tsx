'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import api from '../lib/api-client';
import { LoginDto, RegisterDto, AuthResponse } from '../types/auth';

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (data: LoginDto) => Promise<void>;
    register: (data: RegisterDto) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('access_token');
            setIsAuthenticated(!!token);
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (data: LoginDto) => {
        const response = await api.post<AuthResponse>('/auth/login', data);
        if (response.data.access_token) {
            localStorage.setItem('access_token', response.data.access_token);
            setIsAuthenticated(true);
            router.push('/');
        }
    };

    const registerUser = async (data: RegisterDto) => {
        await api.post('/users', data);
        router.push('/login');
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setIsAuthenticated(false);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, register: registerUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
