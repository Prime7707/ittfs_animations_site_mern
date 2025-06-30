import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./foorter";

const MainLayout = () => {
	return (
		<div className="min-h-screen flex flex-col bg-backgroud text-forground">
			{/* Header */}
			<Header />

			{/* Main Content */}
			<main className="flex-grow">
				<Outlet />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default MainLayout;
