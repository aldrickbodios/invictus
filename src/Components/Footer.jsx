import { ContactIcons, StatIcons } from "../assets/icons.js"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-(--primary) text-white flex flex-col p-[50px_30px_30px]">
            <div className="flex items-center gap-5 pb-5 max-md:flex-col max-md:items-start">
                <div className="flex-3 text-(--text-muted) pt-2 max-md:flex-1">
                    <h3 className="text-white font-medium mb-2.5 text-(length:--text-base)">Invictus Developments and Services Corporation</h3>
                    <p>Delivering innovative and reliable engineering solutions built on integrity, precision, and excellence.</p>
                    <ul className="flex gap-4 px-0 py-6 list-none">
                        <li><a href="https://www.facebook.com/idscorporation" target="_blank"><ContactIcons.Facebook 
                        className="w-10 h-10 p-2.5 transition duration-300 ease-in-out bg-indigo-900 hover:bg-blue-800 rounded-xl text-white"/></a></li>
                        <li><a href="#" target="_blank"><ContactIcons.Twitter 
                        className="w-10 h-10 p-2.5 transition duration-300 ease-in-out bg-indigo-900 hover:bg-blue-800 rounded-xl text-white"/></a></li>
                        <li><a href="#" target="_blank"><ContactIcons.Linkedin 
                        className="w-10 h-10 p-2.5 transition duration-300 ease-in-out bg-indigo-900 hover:bg-blue-800 rounded-xl text-white"/></a></li>
                        <li><a href="#" target="_blank"><ContactIcons.Instagram 
                        className="w-10 h-10 p-2.5 transition duration-300 ease-in-out bg-indigo-900 hover:bg-blue-800 rounded-xl text-white"/></a></li>
                    </ul>
                </div>
                <div className="text-sm flex-2 flex flex-col gap-2.5 text-(--text-muted) max-md:flex-1">
                    <h3 className="text-white text-(length:--text-base) font-medium">Quick Links</h3>
                    <ul className="flex flex-col gap-2.5">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="text-sm flex-2 flex flex-col gap-2.5 text-(--text-muted) max-md:flex-1">
                    <h3 className="text-white text-(length:--text-base) font-medium">Company</h3>
                    <ul className="flex flex-col gap-2.5">
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li>News & Updates</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            <div className="text-sm border-t border-solid border-white/20 pt-7.5 pb-5 flex justify-between text-(--text-muted)
            max-md:flex-col max-md:items-start max-md:gap-2.5">
                <p>&copy; {new Date().getFullYear()} Invictus Developments and Services Corporation. All rights reserved.</p>
                <ul className="flex gap-4">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer