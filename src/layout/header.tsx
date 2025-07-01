import { selectDarkMode, toggleDarkMode } from "@/store/darkModeSlice";
import { Film, Home, LogIn, LogOut, Mail, Menu, MoonIcon, Sparkles, Sun, User, UserPlus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
// import api from "@/lib/axios";
// import { toast } from "react-toastify";

const Header = () => {
	const { user, login, register, logout } = useAuth();
	const dispatch = useAppDispatch();
	const isDarkMode = useAppSelector(selectDarkMode);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleLogin = async () => {
		try {
			await login({ username: "user", password: "12345678" });
			// ✅ login toast already handled in AuthContext
		} catch (error) {
			console.error("Login failed", error);
		}
	};
	const handleRegister = async () => {
		await register({
			username: "user5",
			email: "user5@example.com",
			password: "12345678",
			password_confirmation: "12345678",
		});
	};

	return (
		<>
			<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg2 border-b border-bg4">
				<div className="container mx-auto px-4 transition-all">
					<div className="flex justify-between items-center h-16">
						{/* Mobile Menu Button */}
						<button className="md:hidden p-[6px] rounded-md headerPageLinks focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>

						{/* Logo */}
						<Link to={"/"} className="flex items-center space-x-2">
							<Film className="w-8 h-8 text-fg2-5" />
							<span className="text-2xl font-bold bg-gradient-to-r from-fg2-5 to-pink-500 bg-clip-text text-transparent">AnimVerse</span>
						</Link>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex md:space-x-2 xl:space-x-4">
							<Link to="/" className="flex items-center space-x-1 headerPageLinks">
								<Home className="w-5 h-5" />
								<span>Home</span>
							</Link>
							<Link to="/" className="flex items-center space-x-1 headerPageLinks">
								<Sparkles className="w-5 h-5" />
								<span>Animations</span>
							</Link>
							<Link to="#about" className="flex items-center space-x-1 headerPageLinks">
								<User className="w-5 h-5" />
								<span>About</span>
							</Link>
							<Link to="contact" className="flex items-center space-x-1 headerPageLinks">
								<Mail className="w-5 h-5" />
								<span>Contact</span>
							</Link>
						</nav>

						<nav className="flex space-x-1">
							{/* Mode Change Button */}
							<button className="headerPageLinks px-2" onClick={() => dispatch(toggleDarkMode())}>
								{isDarkMode ? <Sun className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
							</button>

							{/* Auth Buttons */}
							{!user ? (
								<>
									{/* <Link to="javascript:void(0)" className="flex items-center group headerPageLinks">
										<LogIn className="w-5 h-5 md:hidden" />
										<span className="hidden md:inline">Login</span>
									</Link> */}
									<button className="flex items-center group headerPageLinks cursor-pointer" onClick={handleLogin}>
										<LogIn className="w-5 h-5 md:hidden" />
										<span className="hidden md:inline">Login</span>
									</button>
									{/* <Link to="/" className="flex items-center group headerPageLinks">
										<UserPlus className="w-5 h-5 md:hidden" />
										<span className="hidden md:inline">Register</span>
									</Link> */}
									<button className="flex items-center group headerPageLinks cursor-pointer" onClick={handleRegister}>
										<UserPlus className="w-5 h-5 md:hidden" />
										<span className="hidden md:inline">Register</span>
									</button>
								</>
							) : (
								<>
									<button className="flex items-center group headerPageLinks cursor-pointer" onClick={logout}>
										<LogOut className="w-5 h-5 md:hidden" />
										<span className="hidden md:inline">Logout</span>
									</button>
									<span>{user?.username}</span>
								</>
							)}
						</nav>
					</div>
				</div>
				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden mt-4 pb-4 space-y-3 w-screen flex flex-col ml-4">
						<Link to="#" className="group w-screen">
							<div className="flex flex-row items-center w-fit rounded-md space-x-3 headerPageLinksGrp">
								<Home className="w-5 h-5" />
								<span>Home</span>
							</div>
						</Link>
						<Link to="#portfolio" className="group w-screen">
							<div className="flex flex-row items-center w-fit rounded-md space-x-3 headerPageLinksGrp">
								<Film className="w-5 h-5" />
								<span>Portfolio</span>
							</div>
						</Link>
						<Link to="#about" className="group w-screen">
							<div className="flex flex-row items-center w-fit rounded-md space-x-3 headerPageLinksGrp">
								<User className="w-5 h-5" />
								<span>About</span>
							</div>
						</Link>
						<Link to="#contact" className="group w-screen">
							<div className="flex flex-row items-center w-fit rounded-md space-x-3 headerPageLinksGrp">
								<Mail className="w-5 h-5" />
								<span>Contact</span>
							</div>
						</Link>
					</div>
				)}
			</header>
		</>
	);
};

export default Header;
