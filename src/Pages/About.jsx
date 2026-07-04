import { AboutIcons } from "../assets/icons.js"
import Footer from "../Components/Footer.jsx"
import { images } from "../assets/images.js"

const About = () => {
    return (
        <>
            <main className="flex gap-10 m-20 items-center">
                <img src={images.about_logo} 
                alt="Invictus Developments and Services Corporation" className="w-48 h-48 shrink-0" />
                <div className="flex flex-col text-center gap-7">
                    <h1 className="text-4xl font-semibold">About Invictus Developments and Services Corporation</h1>
                    <p className="text-base text-gray-600">
                        Pioneering engineering excellence through innovation, integrity, and <br /> unwavering commitment to transformative solutions.</p>
                </div>            
            </main>
            <section className="rounded-xl shadow-lg border border-gray-100 p-7 m-5">
                <h2 className="text-3xl font-medium my-5">Vision & Mission</h2>
                <div className="flex md:flex-row flex-col gap-7 my-7">
                    <div className="flex gap-3">
                        <AboutIcons.Vision className="stat-icon bg-blue-100 text-blue-900 shrink-0"/>
                        <div>
                            <h3 className="text-2xl font-medium py-2">Our Vision</h3>
                            <p className="text-[16px] text-gray-600">
                                To be a world-class and trusted developments and services corporattion, serving
                                residential, industrial, commercial, and institutional Philippine markets with
                                uncompromising reliability, technical integrity, and innovation in the field of
                                construction, facilities management, and project management.
                            </p>
                        </div>  
                    </div>
                    <div className="flex gap-3">
                        <AboutIcons.Mission className="stat-icon bg-blue-100 text-blue-900  shrink-0"/>
                        <div>
                            <h3 className="text-2xl font-medium py-2">Our Mission</h3>
                            <p className="text-[16px] text-gray-600">Invictus Developments and Services (IDS) Corporation is dedicated to safeguarding
                                ownership interests and optimizing the performance of the built environment across
                                residential, industrial, commercial, and institutional sectors through integrated
                                excellence in construction, MEPF enginerring, facilities management, and project
                                management.
                            </p>
                        </div>
                    </div>
                </div>     
            </section>
            <section className="rounded-xl shadow-lg border border-gray-100 p-7 m-5">
                <h2 className="text-3xl font-medium my-5">Core Values</h2>
                <ul className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-1 gap-4">
                    <li className="flex gap-3">
                        <span className="relative font-bold top-1/4 text-3xl w-6 text-center shrink-0">I</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Indomitable Spirit</h3>
                            <p className="text-sm text-gray-800/80">We face complex enginerring and facilities challenges with a resolve that never
                                bows to difficulty. No technical hurdle is too great for our collective expertise.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="relative font-semibold top-1/4 text-3xl">N</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Notable Precision</h3>
                            <p className="text-sm text-gray-800/80">Our construction and MEPF installations are executed with a "measure twice, cut once"
                                technical integrity. We prioritize accuracy over speed to ensure long-term stability.
                            </p>
                        </div>         
                    </li>
                    <li className="flex gap-3">
                        <span className="relative font-semibold top-1/4 text-3xl">V</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Vigilant Maintenance</h3>
                            <p className="text-sm text-gray-800/80">We safeguard assets through proactive, round-the-clock facilities management. We identify
                                and mitigate risks before they impact your operations.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="relative font-semibold top-1/4 text-3xl w-6 text-center shrink-0">I</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Integrated Solutions</h3>
                            <p className="text-sm text-gray-800/80">Construction, facilities management, and project management work as one unified engine for
                                the client. We eliminate the gaps between build and operation.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="relative font-semibold top-1/4 text-3xl">C</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Client Stewardship</h3>
                            <p className="text-sm text-gray-800/80">We act as the fiduciary master of the owner's fate and the captain of their project's soul.
                            We protect your investment as if it were our own capital.
                        </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="relative font-semibold top-1/4 text-3xl">T</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Thoroughness</h3>
                            <p className="text-sm text-gray-800/80">From the initial bid to the final punch list, no detail is too small to be managed. Our
                                stewardship is defined by exhaustive attention to every technical and financial detail.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="relative font-semibold top-1/4 text-3xl">U</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Utility Optimization</h3>
                            <p className="text-sm text-gray-800/80">We relentlessly pursue energy efficiency and system performance. We transform facilities
                                from cost centers into high-performance assets through innovative engineering.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="relative font-semibold top-1/4 text-3xl">S</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Strategic Growth</h3>
                            <p className="text-sm text-gray-800/80">We build institutional and industrial infrastruacture that powers the nation's future. Our
                                work contributes to the sustainable development of the Philippine landscape.
                            </p>
                        </div>
                    </li>
                </ul>        
            </section>
            <section className="rounded-xl shadow-lg border border-gray-100 p-7 m-5">
                <h2 className="text-3xl font-medium my-5">Executive Overview</h2>
                <p className="text-[17px] leading-loose text-gray-800/80">Invictus Developments and Services Corporation is an emerging multi-disciplinary engineering
                    and facilities management firm specializing in high-complexity industrial and commercial
                    environments. As a dynamic start-up, we are built upon a foundation of deep technical mastery,
                    established by seasoned engineering professionals with over 20 years of hands-on leadership
                    experience in the manufacturing, telecommnuications, and R&D sectors. We provide integrated,
                    high-performance solutions for Facilities Management, Construction Project Maangement, and
                    MEPF Construction.
                </p>
            </section>
            <section className="rounded-xl shadow-lg border border-gray-100 p-7 m-5">
                <h2 className="text-3xl font-medium my-5">Core Capabilities</h2>
                <ul className="flex md:flex-row flex-col gap-7 md:gap-5">
                    <li className="flex flex-col gap-5 flex-1">
                        <h3 className="font-medium text-base">Integrated Facilities & Energy Management</h3>
                        <p>We ensure physical assets and faciltiy systems remain functional, efficient, and
                            reliable through rigorous Workforce Governance and standardized maintenance.
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Technical Systems Operations</li>
                            <li>Building & Grounds Maintenance</li>
                            <li>ISO-Standard Documentation</li>
                            <li>Conservation & Optimization</li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-5 flex-1">
                        <h3 className="font-medium text-base">Construction & MEPF Engineering</h3>
                        <p>We provice full-cycle execution for complex industrial and commercial build-outs,
                            specializing in high-stakes mechanical and electrical environments.
                        </p>
                        <ul className="list-disc list-outside ml-3.5">
                            <li>MEPF Construction: Complete, high-precision execution of mechanical, electrical,
                                plumbing, and fire protection projects.
                            </li>
                            <li>Technical Integrity</li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-5 flex-1">
                        <h3 className="font-medium text-base">Professional Project Management</h3>
                        <p>Invictus manages "big ticket" nationwide projects with a focus on technical
                            excellence and mobilization efficiency.
                        </p>
                        <ul className="list-disc list-outside ml-3.5">
                            <li>Comprehensive Project Lifecycle Management (PLM): Initiation and planning to
                                execution, monitoring, and closing.
                            </li>
                            <li>Standardized Controls & Delivery
                                <ul>
                                    <li>Quantity Surveying & Cost Engineering</li>
                                    <li>Quality Assurance (QA/QC)</li>
                                    <li>Time Management</li>
                                </ul>
                            </li>
                            <li>Technical Integration</li>
                        </ul>
                    </li>
                </ul>
                
            </section>
            <section className="rounded-xl shadow-lg border border-gray-100 p-7 m-5">
                <h2 className="text-3xl font-medium my-5">The Invictus Advantage</h2>
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-1 mb-2">
                        <span className=
                        "bg-blue-700 text-white rounded-full w-8 h-8 self-start flex items-center justify-center shrink-0 mr-3">1</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Expert Leadership</h3>
                            <p>Founded by an engineering manager with over two decades of experience overseeing
                                international and local manufacturing facilities, 23-story R&D centers, and critical
                                telecommunications infrastructure. This global perspective allows us to implement world-class
                                operational standards tailored to the local landscape.
                            </p>
                        </div>       
                    </li>   
                    <li className="flex items-center gap-1 mb-2">
                        <span className=
                        "bg-blue-700 text-white rounded-full w-8 h-8 self-start flex items-center justify-center shrink-0 mr-3">2</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Certified Energy Management</h3>
                            <p>Our leadership includes a Certified Energy Manager (CEM), ensuring all operations are
                                optimized for maximum efficiency and full legal compliance with RA 11285.
                            </p>
                        </div>
                    </li>   
                    <li className="flex items-center gap-1 mb-2">
                        <span className=
                        "bg-blue-700 text-white rounded-full w-8 h-8 self-start flex items-center justify-center shrink-0 mr-3">3</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Safety & Quality Driven</h3>
                            <p>Led by a Certified Safety Practitioner, our operations are anchored by ISO-aligned documentation
                                and risk-based management.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-center gap-1 mb-2">
                        <span className=
                        "bg-blue-700 text-white rounded-full w-8 h-8 self-start flex items-center justify-center shrink-0 mr-3">4</span>
                        <div>
                            <h3 className="text-base font-medium mb-1.5">Financial Stewardship</h3>
                            <p>Deep expertise in generating operational savings through conservation projects and implementing CAPEX projects
                                within budget.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="rounded-xl shadow-lg border border-gray-100 p-7 m-5">
                <h2 className="text-3xl font-medium my-5">5-Year Strategic Roadmap</h2>
                <div className="bg-linear-to-r from-blue-500 to-purple-500 text-white p-7 rounded-lg mb-7 p">
                    <h3 className="text-2xl font-medium my-3">Strategic Objective (2026-2030)</h3>
                    <p>"To transform IDS Corporation into a PCAB Category A major industry player by 2030, leveraging
                        a foundation of technical integrity and fixed-asset growth. We will scale our specialized MEPF
                        foundation into a nationally recognized, multi-disciplinary corporation, driven by integrated
                        infrastructure and a high-performance technical workforce, to provide uncompromising reliability
                        and innovative facilities management across the Philippines' industrial and commercial sectors."
                    </p>
                </div>
                <div>
                    <h3 className="font-medium text-xl">Yearly Strategic Milestone</h3>
                    <ul className="flex flex-col gap-3 mt-3">
                        <li className="bg-blue-100 p-5 mb-3 rounded-[0_8px_8px_0] border-blue-800 border-l-5">
                            <h4 className="font-medium text-[18px] mb-3">Year 1 (2026): The Greenfield Launch</h4>
                            <p className="text-black/80">The inaugural year focuses on profitable MEPF execution and strategic reinvestment to
                                build a professional foundation.
                            </p>
                        </li>
                        <li className="bg-blue-100 p-5 mb-3 rounded-[0_8px_8px_0] border-blue-800 border-l-5">
                            <h4 className="font-medium text-[18px] mb-3">Year 2 (2027): Market Consolidation & Recurring Revenue</h4>
                            <p className="text-black/80">The second year pivots from one-time construction to stable, recurring facility management revenue while
                                upgrading the company to a higher PCAB classification.
                            </p>
                        </li>
                        <li className="bg-blue-100 p-5 mb-3 rounded-[0_8px_8px_0] border-blue-800 border-l-5">
                            <h4 className="font-medium text-[18px] mb-3">Year 3 (2028): The "Living Showroom"</h4>
                            <p className="text-black/80">The third year focuses on fixed asset building and leveraging physical infrastructure to skyrocket
                                corporate equity.
                            </p>
                        </li>
                        <li className="bg-blue-100 p-5 mb-3 rounded-[0_8px_8px_0] border-blue-800 border-l-5">
                            <h4 className="font-medium text-[18px] mb-3">Year 4 (2029): National Scaling & Certification</h4>
                            <p className="text-black/80">The fourth year focuses on geographic expansion and achieving international standards to prepare for
                                Category A status.
                            </p>
                        </li>
                        <li className="bg-blue-100 p-5 mb-3 rounded-[0_8px_8px_0] border-blue-800 border-l-5">
                            <h4 className="font-medium text-[18px] mb-3">Year 5 (2030): Vision Realized</h4>
                            <p className="text-black/80">The fifth year marks the official transition into Institutional Dominance, reaching the apex of your
                                initial five-year roadmap with PCAB Category A accreditation.
                            </p>
                        </li>
                    </ul>
                </div>     
            </section>
            <section className="rounded-xl shadow-lg border border-gray-100 p-7 m-5">
                <h2 className="text-3xl font-medium my-5">Founder Profile</h2>
                <div className="flex max-md:flex-col gap-6 border-b border-gray-300 pb-7">
                    <div className="h-48 w-48 overflow-hidden rounded-lg shrink-0 max-md:self-center">
                    <img src={images.portrait} alt="Portrait of Al H. Bodios" 
                    className="h-full w-full object-cover object-top"/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="max-md:text-center">
                        <h3 className="text-2xl font-semibold">Al H. BODIOS</h3>
                        <span className="text-base text-blue-600">REE, CEM</span>
                        </div>
                        <h3 className="text-xl font-medium">Executive Summary</h3>  
                        <p className="text-[16px] leading-relaxed text-black/80">Al H. Bodios is a Registered Electrical Engineer and seasoned engineering leader with over
                            22 years (2004-2026) of hands-on experience in Facilities Engineering and Project Management.
                            As the Founder and Managing Director of Invictus Developments and Services Corporation, he leverages
                            a dual mastery to deliver world-class standards to the Philippine industrial landscape.
                        </p>
                        <p className="text-[16px] leading-relaxed text-black/80">
                            His leadership is defined by a global perspective gained from overseeing international manufacturing
                            facilities and 23-story R&D centers, ensuring that multi-million-dollar investments are protected
                            by rigorous engineering discipline and proactive asset management.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-7 mt-7">
                    <h3 className="text-2xl font-medium">Career Milestones</h3>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-[18px]">Core Professional Milestones</h4>
                        <ul className="ml-4.5 list-disc list-outside text-black/80 flex flex-col gap-2.5">
                            <li>45,325 SQM Chemical Plant (Tanza, Cavite): Served as the Official Owner's Representative & Project
                                Lead, managing the end-to-end lifecycle from design and bidding to final commissioning.
                            </li>
                            <li>PhP 100M Fire Protection Project (Cebu Facilities): Led the comprehensive Project Management of a
                                massive fire suppression and life safety upgrade across Cebu-based facilities.
                            </li>
                            <li>Php 50M Fire Suppression System: Full design and installation project management for the Tanza, Cavite
                                facility.
                            </li>
                            <li>Specialized Production Equipment: Acquisition and installation.</li>
                            <li>Multiple Projects Nationwide averaging 200M CAPEX annually.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-[18px]">PhP 1.8 Billion in CAPEX Management</h4>
                        <p className="text-black/80">
                            Between 2016 and 2026, Al has maintained an elite track record of financial and technical stewardship,
                            managing an average of Php 200M in CAPEX projects annually. With a total of Php 1.8B in projects executed
                            over the last nine years, he has proven his ability to deliver large-scale industrial infrastructure on
                            time, within budget, and at the highest technical standards.
                        </p>
                        
                    </div>       
                    <div className="flex flex-col gap-3">
                        <h4 className="text-[18px]">22 Years of Facilities & Equipment Engineering Mastery</h4>
                        <p className="text-black/80">
                            Since 2004, Al has built a "ground-up" advantage in keeping industrial plants operational through specialized
                            engineering practices:
                        </p>
                        <ul className="ml-4.5 list-disc list-outside text-black/80 flex flex-col gap-2.5">
                            <li>Facilities Engineering (2004-2026): Expert in the design and maintenance of critical, "Life-Support"
                                systems, including HVAC, Chilled Water, Compressed Dry Air (CDA), ahd high-voltage power distribution.
                            </li>
                            <li>
                                Equipment Engineering: Extensive experience in machine reliability using Equipment Failure Mode Analysis (EFMEA)
                                and Preventive Maintenance Working Standards (PMWS).
                            </li>
                            <li>
                                Site Administration: Proven history of managing site adminiatration for high-rise R&D campuses and sprawling
                                manufacturing hubs.
                            </li>
                            <li>
                                Workforce & Contractor Leadership: Solid experience in directing diverse technical teams, including technicians,
                                engineers, and supervisors. He is highly proficient in Contractor Management, overseeing specialized third-party
                                vendors to ensure project specifications and safety standards are met without compromise.
                            </li>
                        </ul>
                    </div> 
      
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default About