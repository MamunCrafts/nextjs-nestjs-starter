export type UserRole = 'admin' | 'officer';

export interface AuthResponse {
    access_token: string;
}

export interface LoginDto {
    email: string;
    password: string;
}

export interface RegisterDto {
    email: string;
    password: string;
    name?: string;
    role: UserRole;
}

export interface User {
    id: string;
    email: string;
    name?: string;
    role: UserRole;
}
