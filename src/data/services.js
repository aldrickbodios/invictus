import { CategoryIcons } from "../assets/icons.js"
import { service_img } from "../assets/images.js"

export const services = [
    {
        title: "Civil Engineering",
        description: "Design and construction of infrastructure projects.",
        image: service_img.civil,
        icons: CategoryIcons.Civil
    },
    {
        title: "Mechanical Engineering",
        description: "Development and maintenance of mechanical systems.",
        image: service_img.mechanical,
        icons: CategoryIcons.Mechanical
    },
    {
        title: "Electrical Engineering",
        description: "Design and implementation of electrical systems.",
        image: service_img.electrical,
        icons: CategoryIcons.Electrical
    },
    {
        title: "Software Engineering",
        description: "Creation of innovative software solutions.",
        image: service_img.software,
        icons: CategoryIcons.Software
    }
]