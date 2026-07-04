import { FaRegBuilding, FaCode, FaBullseye, FaRegEnvelope, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoCog, IoPeople, IoTimeOutline, IoLayers, } from "react-icons/io5";
import { MdElectricalServices, MdOutlineRemoveRedEye, MdRestartAlt } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { FiMapPin, FiPhone,  } from "react-icons/fi";

import { FaShieldAlt, FaCheckSquare, FaHandshake, FaLightbulb,  } from "react-icons/fa";

export const CategoryIcons = {
    Energy: MdElectricalServices,
    Construction: FaRegBuilding,
    Management: IoCog,
};

export const StatIcons = {
    People: IoPeople,
    Badge: PiMedal,
    Globe: CiGlobe,
    Time: IoTimeOutline,
    Vision: MdOutlineRemoveRedEye,
    Mission: FaBullseye
}

export const ContactIcons = {
    Address: FiMapPin,
    Phone: FiPhone,
    Email: FaRegEnvelope,
    Facebook: FaFacebookF,
    Twitter: FaTwitter,
    Linkedin: FaLinkedin,
    Instagram: FaInstagram
}

export const RecommendIcons = {
    Shield: FaShieldAlt,
    Layers: IoLayers,
    Check: FaCheckSquare,
    Handshake: FaHandshake,
    Lightbulb: FaLightbulb,
    Cycle: MdRestartAlt
}

export const AboutIcons = {
    Vision: MdOutlineRemoveRedEye,
    Mission: FaBullseye
}