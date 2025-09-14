import React, { useRef } from 'react'
import Marque from '../components/Marque'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
    const containerRef = useRef(null)
    const items=["Innovation","Precision", "Trust","Collaboration", "Excellence"]
    const items2 = ["Contact Me", "Contact Me", "Contact Me", "Contact Me","Contact Me"]
    useGSAP(() => {
        gsap.to(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            markers: false,
          },
        });
      }, []);
  return (
    <section ref={containerRef} className='flex flex-col items-center justify-between min-h-screen gap-12 mt-16'>
        <Marque items={items}/>
        <div className='overflow-hidden font-light text-center contact-text-responsive'>
            <p className='text-3xl'>"💼 I am actively seeking opportunities in <br /> Electronics, Communication, and Web Development.<br/>
               <span className='font-normal'>If you have an opening or collaboration in mind,</span><br/>
               <span className='italic text-amber-400'>feel free to connect with me.</span>
               "
            </p>
        </div>
        <Marque items={items2} reverse={true} className='text-black bg-transparent border-y-2' iconClassName='stroke-gold stroke-2 text-primary ' icon='material-symbols-light:square'/>

    </section>
  )
}

export default ContactSummary