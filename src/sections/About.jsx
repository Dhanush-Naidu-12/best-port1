import React, { useRef } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import AnimatedTextLines from '../components/AnimatedTextLines';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const imgRef = useRef(null);
  const text = `I am an Electronics and Communication Engineering student with a strong interest in embedded systems, digital electronics, communication technologies and Web Designing`
  const aboutText = `👨‍💻 I am an Electronics and Communication Engineering student with a passion for both hardware systems and web technologies.
📡 My core interests include embedded systems, digital electronics, and modern communication networks.
🌐 Alongside engineering, I have developed strong skills in web development using HTML, CSS, JavaScript, and React.
🔗 I enjoy creating projects that merge my ECE knowledge with software solutions, bridging the gap between hardware and the web.
`

useGSAP(() => {
  gsap.to("#about", {
    scale: 0.95,
    scrollTrigger: {
      trigger: "#about",
      start: "bottom 80%",
      end: "bottom 20%",
      scrub: true,
      markers: false,
    },
    ease: "power1.inOut",
  });

  gsap.set(imgRef.current, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  });
  gsap.to(imgRef.current, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 2,
    ease: "power4.out",
    scrollTrigger: { trigger: imgRef.current },
  });
});
  return (
    <section id='about' className='min-h-screen bg-black rounded-b-4xl'>
        <AnimatedHeaderSection subTitle={"Learn with Purpose, Innovate with Intent"} title={"About"} text={text} textColor={"text-white"} withScrollTrigger={true} />
        <div className='flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
           <img ref={imgRef} src="images/man.jpg" alt="man" className='w-md rounded-3xl' />
           <AnimatedTextLines text={aboutText} className={"w-full"} />
        </div>
    </section>
  )
}

export default About