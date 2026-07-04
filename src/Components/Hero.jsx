import { images } from "../assets/images.js"

const Hero = () => {
    return (
        <section id="home" 
        style={{ backgroundImage: `url(${images.hero})` }}
        className="relative h-[calc(100vh-75px)] flex flex-col items-center justify-center 
        scroll-mt-22.5 gap-8 p-12 bg-[url('')] bg-cover bg-center bg-no-repeat">
            <div className="absolute bg-black opacity-50 inset-0"></div>
            <div className="relative text-center text-white max-w-280 p-5">
                <h1 className="text-(length:--text-h1) font-bold mb-5">Reliability Built on Integrity</h1>
                <p className="text-(length:--text-base) mb-0.5">Innovative solutions across civil, mechanical, electrical, and software engineering.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-12 justify-center z-2">
                <button className="btn bg-(--primary) text-white border-none hover:scale-105" onClick={() => window.location.href = '#about'}>Get Started</button>
                <button className="btn bg-white text-(--primary) border-none hover:scale-105" onClick={() => window.location.href = '#projects'}>View Projects</button>
            </div>
        </section>
    )
}

export default Hero;