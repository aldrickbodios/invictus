import { services, delivery_steps } from "../data/services";
import FAQ from "../Components/FAQ.jsx"
import questions from "../data/faq.js"
import Footer from "../Components/Footer.jsx"
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    return (
        <>
            <main className="bg-linear-90 from-blue-700 to-purple-600 text-white" >
                <div className="w-2/3 flex flex-col justify-center gap-10 py-20 px-10">
                    <h1 className="text-5xl font-semibold leading-15">Engineering Services built for the long term</h1>
                    <p className="text-[18px] pb-8 border-b border-white/40">Invictus Developments and Services corporation delivers end-to-end engineering capability across 
                        three core practice areas. Whether you require specialized expertise in a single area or an integrated 
                        approach spanning the entire project lifecycle, our team has the experience and technical capability to 
                        support your goals from planning to execution and ongoing operations.</p>
                    <ul className="flex gap-10">
                        <li className="text-left flex flex-col gap-1">
                            <span className="text-3xl">500+</span>
                            <span className="text-sm text-white/80 font-light">Engagements delivered</span>
                        </li>
                        <li className="text-left flex flex-col gap-1">
                            <span className="text-3xl">25</span>
                            <span className="text-sm text-white/80 font-light">Countries served</span>
                        </li>
                        <li className="text-left flex flex-col gap-1">
                            <span className="text-3xl">95%</span>
                            <span className="text-sm text-white/80 font-light">Client retention rate</span>
                        </li>
                        <li className="text-left flex flex-col gap-1">
                            <span className="text-3xl">4hr</span>
                            <span className="text-sm text-white/80 font-light">Average response SLA</span>
                        </li>
                    </ul>
                </div>
                
            </main>
            <section className="section bg-white">
                <h2 className="text-4xl font-semibold my-8">Our Three Core Capabilities</h2>
                <p className="text-base mb-14 text-(--text-muted)">
                    Every service we offer sits within one of three practice areas, each with dedicated <br />
                    specialists, frameworks, and leadership.</p>
                <ul className="flex flex-col gap-5">
                    {services.map((service, index) => (
                        <li key={index} className="border border-gray-300/50 rounded-lg mb-5 overflow-hidden">
                            <div className="flex gap-5 items-center bg-blue-100/50 p-10">
                                <service.icon className="stat-icon text-white bg-blue-700 shrink-0 self-start"/>
                                <div className="flex flex-col gap-3 text-left">
                                    <h3 className="text-2xl font-semibold">{service.category}</h3>
                                    <p className="text-[14px] text-black/60">{service.description}</p>
                                </div>
                            </div>
                            <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-px bg-gray-100">
                                {service.subservices.map((subservice, subIndex) => (
                                    <li key={subIndex} className="bg-white p-6 flex flex-col gap-2 text-left">
                                        <h4 className="font-medium text-[18px]">{subservice.title}</h4>
                                        <p className="font-light text-[14px] text-black/80">{subservice.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}       
                </ul>
            </section>
            <section className="section bg-gray-100/50">
                <h2 className="text-4xl font-semibold mb-8">How We Deliver</h2>
                <p className="text-base mb-14 text-black/60">
                    A consistent, repeatable delivery process that gives you visibility and control at every stage.</p>
                <ol className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 pt-5">
                    {delivery_steps.map((step, index) => (
                        <li key={index} className="flex gap-5 text-left">
                            <span className="bg-blue-700 text-white text-xl flex 
                            items-center justify-center w-14 h-14 p-5 rounded-lg shrink-0">{index+1}</span>
                            <div className="flex flex-col gap-2 mt-1">
                                <h3 className="text-xl font-medium">{step.title}</h3>
                                <p className="text-[14px] text-black/80">{step.description}</p>
                            </div>
                        </li>
                    ))}   
                </ol>
            </section>
            <section className="section bg-white">
                <h2 className="text-4xl font-semibold mb-8">Frequently Asked Questions</h2>
                <p className="text-base mb-14 text-black/60">
                    Answers to the questions we hear most often from new clients.</p>
                <ul className="flex flex-col gap-4 items-center">
                    {questions.map((item, index) => (
                        <FAQ key={index} question={item.question} answer={item.answer} />
                    ))}
                </ul>
            </section>
            <section className="section bg-linear-to-r from-blue-700 to-purple-700 pt-20" >
                <h2 className="text-(length:--text-h2) font-medium mb-5 text-white">Ready to get started?</h2>
                <p className="text-(length:--text-base) mb-10 text-white">Tell us about your project and we'll match you with the right team and engagement model within 24 hours.</p>
                <div className="flex justify-center items-center max-md:flex-col gap-3">
                    <button onClick={() => navigate("/contact")}
                    className="btn transition duration-300 ease-in-out bg-white hover:bg-gray-100 text-blue-600 h-15 w-72 text-center">Contact Us Today</button>
                    <button onClick={() => navigate("/about")}
                    className="btn transition duration-300 ease-in-out border-2 border-white text-white hover:bg-gray-100 hover:text-blue-600 h-15 w-72 text-center">Learn About Us</button>
                </div>
                
            </section>
            <Footer/>
        </>
    )
}

export default Services