import React, { createContext, useContext, useEffect, useState } from "react";
import api from "@/lib/axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

interface User {
	_id: string;
	username: string;
	email: string;
	role: string;
	status: boolean;
	createdAt: string;
	updatedAt: string;
}

interface AuthContextType {
	user: User | null;
	token: string | null;
	login: (data: { username: string; password: string }) => Promise<void>;
	register: (data: { username: string; email: string; password: string; password_confirmation: string }) => Promise<void>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);

	// Load sessionStorage on first render
	useEffect(() => {
		const storedToken = Cookies.get("token");
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	// Login using axios
	const login = async (data: { username: string; password: string }) => {
		try {
			const res = await api.post("https://animation-lib-server.onrender.com/api/v1/auth/login", data);
			const { access_token, user } = res.data;
			// Save token to cookie
			Cookies.set("token", access_token, { expires: 1 }); // 1 day
			setToken(access_token);

			// Keep user only in state
			setUser(user);

			toast.success("Logged in successfully");
		} catch (error: any) {
			const errData = error.response?.data;
			if (errData?.error && typeof errData.error === "object") {
				Object.values(errData.error).forEach((msg) => {
					if (typeof msg === "string") toast.error(msg);
				});
			} else {
				toast.error(errData?.message || "Login failed");
			}
		}
	};

	const register = async (data: { username: string; email: string; password: string; password_confirmation: string }) => {
		try {
			const res = await api.post("https://animation-lib-server.onrender.com/api/v1/auth/register", data);

			const { access_token, user } = res.data;

			Cookies.set("token", access_token, { expires: 1 });
			setToken(access_token);
			setUser(user);

			toast.success("Registered successfully");
		} catch (error: any) {
			const errData = error.response?.data;

			if (errData?.error && typeof errData.error === "object") {
				Object.values(errData.error).forEach((msg) => {
					if (typeof msg === "string") toast.error(msg);
				});
			} else {
				toast.error(errData?.message || "Registration failed");
			}
		}
	};

	// Logout using axios (optional endpoint)
	const logout = async () => {
		if (Cookies.get("token")) {
			Cookies.remove("token");
			setUser(null);
			setToken(null);
			toast.success("Logged out successfully");
		}
	};

	return <AuthContext.Provider value={{ user, token, login, register, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within AuthProvider");
	}
	return context;
};
