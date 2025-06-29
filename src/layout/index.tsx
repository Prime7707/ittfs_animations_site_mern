import { Film, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";
import {Outlet } from "react-router-dom";
import Header from "./header";

const MainLayout = () => {

	return (
		<div className="min-h-screen flex flex-col bg-backgroud text-forground">
			{/* Header */}
			<Header/>

			{/* Main Content */}
			<main className="flex-grow">
				<Outlet />
			</main>

			{/* Footer */}
			<footer className="bg-gray-900 border-t border-gray-800">
				<div className="container mx-auto px-4 py-12">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* About */}
						<div className="md:col-span-2">
							<div className="flex items-center space-x-2 mb-4">
								<Film className="w-6 h-6 text-purple-500" />
								<span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">AnimVerse</span>
							</div>
							<p className="text-gray-400">Showcasing stunning web animations for your projects. Preview our work and contact us to bring your ideas to life with captivating motion design.</p>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
										Home
									</a>
								</li>
								<li>
									<a href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">
										Portfolio
									</a>
								</li>
								<li>
									<a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
										About
									</a>
								</li>
								<li>
									<a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
										Contact
									</a>
								</li>
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
							<ul className="space-y-3">
								<li className="flex items-center space-x-2">
									<Mail className="w-5 h-5 text-purple-400" />
									<span className="text-gray-400">contact@animverse.com</span>
								</li>
								<li className="flex items-center space-x-2">
									<Phone className="w-5 h-5 text-purple-400" />
									<span className="text-gray-400">+1 (555) 123-4567</span>
								</li>
							</ul>

							{/* Social Media */}
							<div className="mt-6 flex space-x-4">
								<a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
									<Twitter className="w-5 h-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
									<Instagram className="w-5 h-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
									<Youtube className="w-5 h-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
									<Linkedin className="w-5 h-5" />
								</a>
							</div>
						</div>
					</div>

					{/* Copyright */}
					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
						<p>© {new Date().getFullYear()} AnimVerse. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default MainLayout;
