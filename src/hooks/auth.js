"use client";

import { useEffect, useState } from 'react';
import { API_PATHS, LOGIN_STATUS } from '../constants';
import { api } from '../api-client';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [status, setStatus] = useState(LOGIN_STATUS.LOGGED_OUT);
  const login = async (email, password) => {
    setStatus(LOGIN_STATUS.PENDING);
    try {
      const res = await api.post(API_PATHS.login, { email, password });
      setUser(atob(res.data.accessToken.split('.')[1]));
      localStorage.setItem('token', res.data.accessToken);
      api.defaults.headers.common['Authorization'] 
        = `Bearer ${res.data.accessToken}`;
      setToken(res.data.accessToken);
      setStatus(LOGIN_STATUS.LOGGED_IN);
    } catch (err) {
      setStatus(LOGIN_STATUS.LOGGED_OUT);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setToken(token);
      setStatus(LOGIN_STATUS.LOGGED_IN);
    }
  }, []);
  const logout = () => {
    setUser(null);
    setStatus(LOGIN_STATUS.LOGGED_OUT);
  };
  return { status, user, login, logout, token };
}

