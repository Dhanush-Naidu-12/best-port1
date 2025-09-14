import React from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { socials } from '../constants'
import Marque from '../components/Marque'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Contact = () => {
    const text = `👋 Thanks for visiting my portfolio! I’m always open to learning, collaborating, and exploring new opportunities. Whether it’s about ECE, web development, or innovative projects, let’s connect.`
    const items =["Just Imagine, I create It ", "Just Imagine, I create It ","Just Imagine, I create It ","Just Imagine, I create It ", ]
    useGSAP(()=>{
        gsap.from(".social-link",{
            y:100,
            opacity:0,
            delay:0.5,
            duration:0.3,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger:{
                trigger:".social-link"
            }
        })
    },[])
  return (
    <section id='contact' className='flex flex-col justify-between min-h-screen bg-black'>
        <div>
            <AnimatedHeaderSection subTitle={"✨ Let’s build something amazing together!"} title={"Contact"} text={text} textColor={"text-white"} withScrollTrigger={true}/>
            <div className='flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10'>
                <div className='flex flex-col gap-10'>
                    <div className='social-link'>
                        <h2>E-Mail</h2>
                        <div className='w-full h-px my-2 bg-white/30' />
                        <p className='text-xl tracking-wider lowercase md:text-2xl lg:text-3xl'>saidhanush142@gmail.com</p>
                    </div>
                    <div className='social-link'>
                        <h2>Phone</h2>
                        <div className='w-full h-px my-2 bg-white/30' />
                        <p className='text-xl lowercase md:text-2xl lg:text-3xl'>9381917343</p>
                    </div>
                    <div className='social-link'>
                        <h2>Social Media</h2>
                        <div className='w-full h-px my-2 bg-white/30' />
                        <div className='flex flex-wrap gap-2'>
                            {socials.map((social,index) => (
                                <a key={index} href={social.href} className='text-xs leading-loose uppercase md:text-sm hover:text-amber-400 transition-colors duration-300'>{"["}{social.name}{"]"}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Marque items={items} className='text-white bg-transparent'/>

    </section>
  )
}

export default Contact