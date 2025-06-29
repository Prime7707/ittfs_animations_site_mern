import MainLayout from "@/layout";
import { useRoutes } from "react-router-dom";
import { lazy } from "react";

// fronend components

const HomePage = lazy(() => import("@/pages/client/home/index"));
const ContactPage = lazy(() => import("@/pages/client/contact/index"));

const Router = () => {
	const routes = [
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "contact",
					element: <ContactPage />,
				},
			],
		},
	];
	return useRoutes(routes);
};

export default Router;
