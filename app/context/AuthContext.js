"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Axios instance specifically for our backend API
    const api = axios.create({
        baseURL: 'http://localhost:5000/api'
    });

    // Intercept requests to add token
    api.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    useEffect(() => {
        // Check if token exists in localStorage on initial load
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            fetchUser(storedToken);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchUser = async (authToken) => {
        try {
            const res = await axios.get('http://localhost:5000/api/users/profile', {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            setUser(res.data);
        } catch (error) {
            // Token might be invalid or expired
            console.error("Failed to fetch user:", error);
            logout();
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            setLoading(true);
            const res = await api.post('/users/login', { email, password });

            const { token: newToken, user: userData } = res.data;

            setToken(newToken);
            setUser(userData);
            localStorage.setItem('token', newToken);
            toast.success('Logged in successfully!');
            router.push('/');
            return true;
        } catch (error) {
            const message = error.response?.data?.error || 'Login failed';
            toast.error(message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const register = async (name, email, password) => {
        try {
            setLoading(true);
            await api.post('/users/register', { name, email, password });
            toast.success('Registration successful! Please login.');
            router.push('/login');
            return true;
        } catch (error) {
            const message = error.response?.data?.error || 'Registration failed';
            toast.error(message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        toast.info('Logged out.');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, register, logout, api }}>
            {children}
        </AuthContext.Provider>
    );
};
