import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const SkillsSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
  
    });
  return (
    <section className='mt-20 overflow-hidden font-light leading-snug text-center mb-11 contact-text-responsive -translate-x-48'>
      <div id='title-service-1'>
        <p className='underline '>SKILLS</p>
      </div>
    </section>
  )
}

export default SkillsSummary