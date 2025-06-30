import { Film, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-bg2 border-t border-bg4">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] xl:gap-[30px]">
					{/* About */}
					<div className="md:col-span-2 transition-all">
						<div className="flex items-center space-x-2 mb-4">
							<Film className="w-6 h-6 text-fg2-5" />
							<span className="text-xl font-bold bg-gradient-to-r from-fg2-5 to-pink-500 bg-clip-text text-transparent">AnimVerse</span>
						</div>
						<p className="text-fg1-1 dark:text-fg1-4">Showcasing stunning web animations for your projects. Preview our work and contact us to bring your ideas to life with captivating motion design.</p>
					</div>

					{/* Quick Links */}
					<div className="md:ml-5">
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2 text-fg1-4 font-semibold tracking-wider">
							<li>
								<Link to="#" className="hover:text-fg2-5 transition-colors">
									Home
								</Link>
							</li>
							<li>
								<Link to="#animations" className="hover:text-fg2-5 transition-colors">
									Animations
								</Link>
							</li>
							<li>
								<Link to="#about" className="hover:text-fg2-5 transition-colors">
									About
								</Link>
							</li>
							<li>
								<Link to="contact" className="hover:text-fg2-5 transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="text-fg1-1 dark:text-fg1-4">
						<h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
						<ul className="space-y-3">
							<li className="flex items-center space-x-2">
								<Mail className="w-5 h-5 text-fg2-4" />
								<span>contact@animverse.com</span>
							</li>
							<li className="flex items-center space-x-2">
								<Phone className="w-5 h-5 text-fg2-4" />
								<span>+1 (555) 123-4567</span>
							</li>
						</ul>

						{/* Social Media */}
						<div className="mt-6 flex space-x-4">
							<Link to="#" className="hover:text-fg2-4 transition-colors">
								<Twitter className="w-5 h-5" />
							</Link>
							<Link to="#" className="hover:text-fg2-4 transition-colors">
								<Instagram className="w-5 h-5" />
							</Link>
							<Link to="#" className="hover:text-fg2-4 transition-colors">
								<Youtube className="w-5 h-5" />
							</Link>
							<Link to="#" className="hover:text-fg2-4 transition-colors">
								<Linkedin className="w-5 h-5" />
							</Link>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-bg4 mt-8 pt-8 text-center text-fg1-4">
					<p>© {new Date().getFullYear()} AnimVerse. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
