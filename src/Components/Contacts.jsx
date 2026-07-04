import { ContactIcons, StatIcons } from "../assets/icons.js"

const Contacts = () => {
    return (
        <section id="contact" className="section bg-white">
                <h2>Get In Touch</h2>
                <p>Ready to start your next project? Contact us today for a consultation</p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
                    <div className="flex flex-col gap-5 text-left">
                        <h3>Contact Information</h3>
                        <p>We're here to answer your questions and discuss how we can help bring your engineering projects to life.</p>
                        <ul className="list-none flex flex-col gap-5 text-left mt-7.5">
                            <li className="flex align-center gap-2.5 p-2.5">
                                <ContactIcons.Address className="stat-icon"/>
                                <div>
                                    <h4>Address</h4>
                                    <p>123 Main Street, City, Country</p>
                                </div>
                            </li>
                            <li className="flex align-center gap-2.5 p-2.5">
                                <ContactIcons.Phone className="stat-icon"/>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+1 (123) 456-7890</p>
                                </div>
                            </li>
                            <li className="flex align-center gap-2.5 p-2.5">
                                <ContactIcons.Email className="stat-icon"/>
                                <div>
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
    )
}

export default Contacts