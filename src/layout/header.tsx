import { selectDarkMode, toggleDarkMode } from "@/store/darkModeSlice";
import { Film, Home, Mail, Menu, MoonIcon, Sun, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
const Header = () => {
	const dispatch = useAppDispatch();
	const isDarkMode = useAppSelector(selectDarkMode);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<>
			<header className="sticky top-0 z-50 backdrop-blur-md bg-bg1 dark:bg-bg1 border-b border-gray-800">
				<div className="container mx-auto px-4 py-4">
					<div className="flex justify-between items-center">
						{/* Logo */}
						<div className="flex items-center space-x-2">
							<Film className="w-8 h-8 text-purple-500" />
							<span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">AnimVerse</span>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex space-x-8">
							<Link to="/" className="flex items-center space-x-1 headerPageLinks">
								<Home className="w-5 h-5" />
								<span>Home</span>
							</Link>
							<a href="#about" className="flex items-center space-x-1 headerPageLinks">
								<User className="w-5 h-5" />
								<span>About</span>
							</a>
							<Link to="contact" className="flex items-center space-x-1 headerPageLinks">
								<Mail className="w-5 h-5" />
								<span>Contact</span>
							</Link>
						</nav>

						{/* Mode Change Button */}
						<button className="headerPageLinks px-2" onClick={() => dispatch(toggleDarkMode())}>
							{isDarkMode ? <Sun className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
						</button>

						{/* Mobile Menu Button */}
						<button className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>

					{/* Mobile Menu */}
					{mobileMenuOpen && (
						<div className="md:hidden mt-4 pb-4 space-y-3">
							<a href="#" className="px-4 py-2 hover:bg-gray-800 rounded-md flex items-center space-x-2">
								<Home className="w-5 h-5" />
								<span>Home</span>
							</a>
							<a href="#portfolio" className="px-4 py-2 hover:bg-gray-800 rounded-md flex items-center space-x-2">
								<Film className="w-5 h-5" />
								<span>Portfolio</span>
							</a>
							<a href="#about" className="px-4 py-2 hover:bg-gray-800 rounded-md flex items-center space-x-2">
								<User className="w-5 h-5" />
								<span>About</span>
							</a>
							<a href="#contact" className="px-4 py-2 hover:bg-gray-800 rounded-md flex items-center space-x-2">
								<Mail className="w-5 h-5" />
								<span>Contact</span>
							</a>
						</div>
					)}
				</div>
			</header>
		</>
	);
};

export default Header;
