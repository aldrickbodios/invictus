
import "../styles/Contact.css"

import { services } from "../data/services.js"
import { projects } from "../data/projects.js"

import Hero from "../Components/Hero.jsx"
import AboutPreview from "../Components/AboutPreview.jsx"
import Services from "../Components/Services.jsx"
import Projects from "../Components/Projects.jsx"
import Testimonials from "../Components/Testimonials.jsx"
import Contacts from "../Components/Contacts.jsx"
import Footer from "../Components/Footer.jsx"

import { images } from "../assets/images.js"
import { RecommendIcons, CategoryIcons } from "../assets/icons.js"

import { useNavigate } from "react-router-dom";

const MainPage = () => {

    const navigate = useNavigate();
    return (
        <>
            <Hero />
            <AboutPreview />
            <section className="section bg-white">
                <h2 className="text-(length:--text-h2) font-medium mb-5">Why Choose IDS Corporation?</h2>
                <p className="text-(length:--text-base) mb-10 text-(--text-muted)">We don't just deliver projects — we build partnerships that drive long-term success.</p>
                <ul className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-7">
                    <li className="text-left flex gap-3">
                        <RecommendIcons.Shield className="stat-icon bg-blue-100 text-blue-900 shrink-0"/>
                        <div>
                            <h3 className="text-xl mb-2">Reliability & Integrity</h3>
                            <p className="text-[15px] text-gray-800/80">We uphold the highest standards of professionalism, delivering solutions you can trust while 
                                maintaining transparency throughout every project.
                            </p>
                        </div>         
                    </li>
                    <li className="text-left flex gap-3">
                        <RecommendIcons.Layers className="stat-icon bg-blue-100 text-blue-900 shrink-0"/>
                        <div>
                            <h3 className="text-xl mb-2">Multidisciplinary Expertise</h3>
                            <p className="text-[15px] text-gray-800/80">Our team brings together knowledge across civil, mechanical, electrical, and software engineering, 
                                enabling integrated solutions for complex challenges.
                            </p>
                        </div>
                    </li>
                    <li className="text-left flex gap-3">
                        <RecommendIcons.Check className="stat-icon bg-blue-100 text-blue-900 shrink-0"/>
                        <div>
                            <h3 className="text-xl mb-2">Quality-Driven Approach</h3>
                            <p className="text-[15px] text-gray-800/80">Every project is executed with attention to detail, adherence to industry standards, and a commitment to long-term performance.
                            </p>
                        </div>
                    </li>
                    <li className="text-left flex gap-3">
                        <RecommendIcons.Handshake className="stat-icon bg-blue-100 text-blue-900 shrink-0"/>
                        <div>
                            <h3 className="text-xl mb-2">Client-Focused Solutions</h3>
                            <p className="text-[15px] text-gray-800/80">We take time to understand your goals and requirements, ensuring that every solution is tailored to your specific needs.
                            </p>
                        </div>
                    </li>
                    <li className="text-left flex gap-3">
                        <RecommendIcons.Lightbulb className="stat-icon bg-blue-100 text-blue-900 shrink-0"/>
                        <div>
                            <h3 className="text-xl mb-2">Innovation & Continuous Improvement</h3>
                            <p className="text-[15px] text-gray-800/80">By leveraging modern tools, technologies, and best practices, we develop efficient solutions that meet today's 
                                demands and prepare for tomorrow's opportunities.
                            </p>
                        </div>
                    </li>
                    <li className="text-left flex gap-3">
                        <RecommendIcons.Cycle className="stat-icon bg-blue-100 text-blue-900 shrink-0"/>
                        <div>
                            <h3 className="text-xl mb-2">End-to-End Project Support</h3>
                            <p className="text-[15px] text-gray-800/80">From planning and design to implementation and maintenance, we provide comprehensive support throughout the entire project lifecycle.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="section bg-white">
                <h2 className="text-(length:--text-h2) font-semibold mb-5">Our Services</h2>
                <p className="text-(length:--text-base) mb-10 text-(--text-muted)">Comprehensive engineering solutions tailored to your project needs</p>
                <ul className="flex md:flex-row flex-col gap-10">
                    <li className="flex flex-col text-left bg-amber-100/50 rounded-lg p-8 gap-5 flex-1">
                        <CategoryIcons.Energy className="stat-icon text-amber-900 bg-amber-200"/>
                        <h3 className="text-xl font-medium">Integrated Facilities & Energy Management</h3>
                        <p>Ensure your facilities operate efficiently, safely, and sustainably through comprehensive management and optimization solutions.</p>
                    </li>
                    <li className="flex flex-col text-left bg-amber-100/50 rounded-lg p-8 gap-5 flex-1">
                        <CategoryIcons.Construction className="stat-icon text-amber-900 bg-amber-200"/>
                        <h3 className="text-xl font-medium">Construction & MEPF Engineering</h3>
                        <p>From planning to implementation, we provide complete engineering solutions for construction and MEPF systems.</p>
                    </li>
                    <li className="flex flex-col text-left bg-amber-100/50 rounded-lg p-8 gap-5 flex-1">
                        <CategoryIcons.Management className="stat-icon text-amber-900 bg-amber-200"/>
                        <h3 className="text-xl font-medium">Professional Project Management</h3>
                        <p>Deliver projects successfully through structured planning, coordination, and professional oversight.</p>
                    </li>
                </ul>
                <button onClick={() => navigate("/services")}
                className="btn transition duration-300 ease-in-out bg-blue-600 hover:bg-blue-700 text-white h-18 w-75 text-center mt-10">View All Services</button>
            </section>
            <Projects />
            <Testimonials />
            <section className="section bg-linear-to-r from-blue-700 to-purple-700 pt-20" >
                <h2 className="text-(length:--text-h2) font-medium mb-5 text-white">Ready to transform your business?</h2>
                <p className="text-(length:--text-base) mb-10 text-white">Get in touch with us today to learn more about how we can help you achieve your goals.</p>
                <button onClick={() => navigate("/contact")}
                className="btn transition duration-300 ease-in-out bg-white hover:bg-gray-100 text-blue-600 h-18 w-75 text-center">Contact Us Today</button>
            </section>
            <Footer />
        </>
    )
}

export default MainPage