import { images } from "../assets/images.js"
import { ContactIcons, StatIcons } from "../assets/icons.js"
import { Link } from "react-router-dom";

const AboutPreview = () => {
    return (
        <section id="about" className="section bg-white">
            <div className="flex flex-col md:flex-row items-center gap-12.5">
                <div className="relative flex-1">
                    

                    <div className="absolute hidden md:block -bottom-5 -right-5 bg-white text-center
                    p-7.5 leading-none rounded-2xl shadow-xl ">
                        <h3 className="text-(length:--text-h3) text-(--primary-lighter) mb-1.5">
                            <span>98</span>%</h3>
                        <p className="text-(length:--text-base) text-(--text-muted) m-0">Customer Satisfaction</p>
                    </div>

                    <img src={images.about_img} alt="Invictus Company" 
                    className="w-1/1 object-cover rounded-xl shadow-lg"/>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col">
                        <h2 className="text-(length:--text-h3) font-semibold text-left text-black mb-3">About Invictus</h2>
                        <p className="text-(length:--text-base) text-gray-900 text-left leading-normal">
                            Invictus Development and Services Corporation is a forward-thinking
                            engineering firm committed to delivering innovative, reliable, and
                            sustainable solutions. Our team combines technical expertise with
                            modern methodologies to ensure high-quality project delivery.
                        <br /><br />
                            We specialize in civil engineering, infrastructure development,
                            and project management—building not just structures, but long-term value.
                        </p>
                        <Link to="/about" 
                        className="inline-block text-left my-5 no-underline
                        transition-all duration-300 ease-in-out text-(--primary-lighter) hover:text-(--primary)">Show more...</Link>
                    </div>
                    <ul className="grid grid-cols-2 gap-5 list-none">
                        <li className="flex items-center gap-4">
                            <StatIcons.People className="stat-icon"/>
                            <div className="text-left">
                                <h3><span>150</span></h3>
                                <p>Expert Engineers</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <StatIcons.Badge className="stat-icon"/>
                            <div className="text-left">
                                <h3><span>200+</span></h3>
                                <p>Projects Completed</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <StatIcons.Globe className="stat-icon"/>
                            <div className="text-left">
                                <h3><span>45+</span></h3>
                                <p>Countries Served</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <StatIcons.Time className="stat-icon"/>
                            <div className="text-left">
                                <h3><span>25+</span></h3>
                                <p>Years Experience</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                <div className="bg-white text-gray-900 leading-normal rounded-2xl p-7.5 shadow-lg text-left">
                    <div className="flex items-center gap-4 mb-5">
                        <StatIcons.Vision className="stat-icon"/>
                        <h3>Our Vision</h3>
                    </div>
                    <p>To be a world-class and trusted developments and services
                        corporation, serving residential, industrial, commercial, and
                        institutional Philippine markets with uncompromising reliability,
                        technical integrity, and innovation in the field of construction,
                        facilities management, and project management.
                    </p>
                </div>
                <div className="bg-white text-gray-900 leading-normal rounded-2xl p-7.5 shadow-lg text-left">
                    <div className="flex items-center gap-4 mb-5">
                        <StatIcons.Mission className="stat-icon"/>
                        <h3>Our Mission</h3>
                    </div>
                    <p>Invictus Developments and Services (IDS) Corporation is dedicated
                        to safeguarding ownership interests and optimizing the performance
                        of the built environment across residential, industrial, commercial,
                        and institutional sectors through integrated excellence in Construction,
                        MEPF Engineering, Facilities Management, and Project Management.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutPreview