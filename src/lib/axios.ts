import axios from "axios";
import { toast } from "react-toastify";
import React from "react"; // Required for createElement
import Cookies from "js-cookie";

// ✅ Notification interface
interface Notification {
	title?: string;
	message: string | string[];
	alert_type: "success" | "error" | "info" | "warning";
}

// Handle toast display without JSX
function handleNotification(notification?: Notification) {
	if (!notification?.message || !notification?.alert_type) return;

	const type = notification.alert_type;
	const content = React.createElement(
		"div",
		null,
		notification.title && React.createElement("strong", null, notification.title),
		Array.isArray(notification.message)
			? React.createElement(
					"ul",
					{ style: { paddingLeft: "1rem" } },
					notification.message.map((msg, i) => React.createElement("li", { key: i }, msg))
			  )
			: notification.message
	);

	toast[type](content);
}

// Axios instance without baseURL
const api = axios.create({});

// Request interceptor
api.interceptors.request.use((config) => {
	const token = Cookies.get("token");
	if (token) {
		config.headers!.Authorization = `ittfs ${token}`;
	}
	return config;
});

// Response interceptor
api.interceptors.response.use(
	(response) => {
		const notification = response.data?.notification;
		if (notification) {
			handleNotification(notification);
		}
		return response;
	},
	(error) => {
		const errData = error.response?.data;
		const message = errData?.message || error.message || "An error occurred";
		toast.error(message);
		return Promise.reject(error);
	}
);

export default api;
