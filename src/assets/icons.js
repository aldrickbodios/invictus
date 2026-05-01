import { FaRegBuilding, FaCode, FaBullseye, FaRegEnvelope, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoCog, IoPeople, IoTimeOutline, } from "react-icons/io5";
import { MdElectricalServices, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { FiMapPin, FiPhone,  } from "react-icons/fi";

export const CategoryIcons = {
    Civil: FaRegBuilding,
    Electrical: MdElectricalServices,
    Mechanical: IoCog,
    Software: FaCode,
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