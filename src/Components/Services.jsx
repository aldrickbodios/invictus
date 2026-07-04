import { services } from "../data/services.js"
import { images } from "../assets/images.js"

const Services = () => {
    return (
        <section id="services" className="section bg-white">
            <h2 className="text-(length:--text-h2) font-semibold mb-5">Our Services</h2>
            <p className="text-(length:--text-base) mb-10 text-(--text-muted)">Comprehensive engineering solutions tailored to your project needs</p>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
                {services.map((service) => (
                    <li key={service.title} 
                    className="bg-white rounded-lg h-100 shadow-md hover:shadow-xl 
                    transition-all duration-300 ease-in-out">
                        <div className="relative w-1/1 h-1/2 bg-gray-200 rounded-sm mb-4">
                            <service.icons size={48} 
                            className="absolute top-5 left-5 bg-white text-(--primary) text-center p-3 leading-none rounded-sm" />
                            <img src={service.image} alt={service.title} 
                            className="w-1/1 h-1/1 object-cover rounded-t-lg" />
                        </div>
                        <div className="text-base p-5 text-left">
                            <h3>{service.title}</h3>
                            <p className="mt-5 text-sm text-gray-500">{service.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Services