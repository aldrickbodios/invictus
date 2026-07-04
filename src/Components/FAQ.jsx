import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const FAQ = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className='w-4/5 border border-gray-300 rounded-xl'>
            <button type="button" onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex justify-between gap-3 items-center px-8 py-5">
                <span>{question}</span>
                <FaAngleDown className= {`text-slate-400 transition-transform duration-100 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                }`}/>
            </button>
            <div className={`border-t border-gray-300 
                ${isOpen ? 'max-h-100 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
                <p className='text-black/80 text-left text-[15px] mx-8 my-5'>{answer}</p>
            </div>
        </li>
    )
}

export default FAQ