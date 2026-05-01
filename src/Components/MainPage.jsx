import "../styles/Hero.css"
import "../styles/Services.css"
import "../styles/Projects.css"
import "../styles/About.css"
import "../styles/Contact.css"
import "../styles/Footer.css"

import { services } from "../data/services.js"
import { projects } from "../data/projects.js"
import { ContactIcons, StatIcons } from "../assets/icons.js"

import { images } from "../assets/images.js"

const MainPage = () => {

    const getDurationText = (months) => {
        if (months < 12) {
            return `${months} month${months > 1 ? 's' : ''}`;

        } else {
            const years = months / 12;
            if ((years * 10) % 10 >= 5) {
                return `${Math.floor(years)}.5 years`;
            }
            return `${Math.floor(years)} year${Math.floor(years) > 1 ? 's' : ''}`;
        }
    };

    return (
        <>
            <section id="home" className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Reliability Built on Integrity</h1>
                    <p>Innovative solutions across civil, mechanical, electrical, and software engineering.</p>
                </div>
                <div className="hero-buttons">
                    <button className="btn btn-primary" onClick={() => window.location.href = '#services'}>Get Started</button>
                    <button className="btn btn-secondary" onClick={() => window.location.href = '#projects'}>View Projects</button>
                </div>
            </section>
            <section id="services" className="section services-section">
                <h2>Our Services</h2>
                <p>Comprehensive engineering solutions tailored to your project needs</p>
                <ul className="services-grid">
                    {services.map((service) => (
                        <li key={service.title} className="service-card">
                            <div className="service-rep">
                                <service.icons size={48} className="service-icon" />
                                <img src={service.image} alt={service.title} className="service-image" />
                            </div>
                            <div className="service-desc">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <section id="projects" className="section projects-section">
                <h2>Featured Projects</h2>
                <p>Showcasing our commitment to engineering excellence</p>
                <ul className="projects-grid">
                    {projects.map((project) => (
                        <li key={project.title} className="project-card">
                            <div className="project-rep">
                                <img src={project.image || images.project_placeholder} alt={project.title} />
                                <div className="project-title">
                                    <span>{project.category}</span>
                                    <h2>{project.title}</h2>
                                </div>
                            </div>
                            <div className="project-desc">
                                <p>{project.description}</p>
                                <div className="project-stats">
                                    <p>Duration<br /> <strong>{getDurationText(project.duration)}</strong></p>
                                    <p>Budget<br /> <strong>{project.budget}</strong></p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {projects.length > 4 && (
                    <a href="#">Show more...</a>
                )}
            </section>
            <section id="about" className="section about-section">
                <div className="about-content">
                    <div className="about-image">
                        <img src={images.about_img} alt="Invictus Company" />

                        <div className="floating-badge">
                            <h3><span>98</span>%</h3>
                            <p>Customer Satisfaction</p>
                        </div>
                    </div>
                    <div className="about-content-text">
                        <div className="about-text">
                            <h2>About Invictus</h2>
                            <p>
                                Invictus Development and Services Corporation is a forward-thinking
                                engineering firm committed to delivering innovative, reliable, and
                                sustainable solutions. Our team combines technical expertise with
                                modern methodologies to ensure high-quality project delivery.
                            </p>

                            <p>
                                We specialize in civil engineering, infrastructure development,
                                and project management—building not just structures, but long-term value.
                            </p>
                        </div>
                        <ul className="about-stats">
                            <li>
                                <StatIcons.People className="stat-icon"/>
                                <div className="stat-desc">
                                    <h3><span>150</span></h3>
                                    <p>Expert Engineers</p>
                                </div>
                            </li>
                            <li>
                                <StatIcons.Badge className="stat-icon"/>
                                <div className="stat-desc">
                                    <h3><span>200+</span></h3>
                                    <p>Projects Completed</p>
                                </div>
                            </li>
                            <li>
                                <StatIcons.Globe className="stat-icon"/>
                                <div className="stat-desc">
                                    <h3><span>45+</span></h3>
                                    <p>Countries Served</p>
                                </div>
                            </li>
                            <li>
                                <StatIcons.Time className="stat-icon"/>
                                <div className="stat-desc">
                                    <h3><span>25+</span></h3>
                                    <p>Years Experience</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about-vm">
                    <div className="vm-content">
                        <div className="vm-header">
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
                    <div className="vm-content">
                        <div className="vm-header">
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
                <a href="#">Show more...</a>
            </section>
            <section id="contact" className="section contact-section">
                <h2>Get In Touch</h2>
                <p>Ready to start your next project? Contact us today for a consultation</p>
                <div className="contact-panel">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>We're here to answer your questions and discuss how we can help bring your engineering projects to life.</p>
                        <ul className="contact-details">
                            <li>
                                <ContactIcons.Address className="stat-icon"/>
                                <div className="contact-desc">
                                    <h4>Address</h4>
                                    <p>123 Main Street, City, Country</p>
                                </div>
                            </li>
                            <li>
                                <ContactIcons.Phone className="stat-icon"/>
                                <div className="contact-desc">
                                    <h4>Phone</h4>
                                    <p>+1 (123) 456-7890</p>
                                </div>
                            </li>
                            <li>
                                <ContactIcons.Email className="stat-icon"/>
                                <div className="contact-desc">
                                    <h4>Email</h4>
                                    <p>info@invictus.com</p>
                                </div>
                            </li>
                        </ul>
                        <div className="business-hours">
                            <h3>Business Hours</h3>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                    <form className="contact-form">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" />
                        <label htmlFor="message">Message *</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                
            </section>
            <footer>
                <div className="upper-footer">
                    <div className="footer-content">
                        <h3>Invictus Developments and Services Corporation</h3>
                        <p>Delivering innovative and reliable engineering solutions built on integrity, precision, and excellence.</p>
                        <ul className="social-media-links">
                            <li><a href="https://www.facebook.com/idscorporation" target="_blank"><ContactIcons.Facebook className="social-icon"/></a></li>
                            <li><a href="#" target="_blank"><ContactIcons.Twitter className="social-icon"/></a></li>
                            <li><a href="#" target="_blank"><ContactIcons.Linkedin className="social-icon"/></a></li>
                            <li><a href="#" target="_blank"><ContactIcons.Instagram className="social-icon"/></a></li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                    <div className="services-footer">
                        <h3>Our Services</h3>
                        <ul>
                            <li>Civil Engineering</li>
                            <li>Mechanical Engineering</li>
                            <li>Electrical Engineering</li>
                            <li>Software Engineering</li>
                        </ul>
                    </div>
                </div>
                <div className="lower-footer">
                    <p>&copy; {new Date().getFullYear()} Invictus Developments and Services Corporation. All rights reserved.</p>
                    <ul className="legal-links">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default MainPage