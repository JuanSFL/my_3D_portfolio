import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.9 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" >
        <div 
        options={{
          max:45,
          scale:1,
          speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
          <img src={icon} alt="title" className='w-16 h-16 object-contain'/>
          <h3 className='text text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-5xl ">
      Full Stack Developer with previous experience in the sales and customer support field. Working as a salesman in a fast pace environment while also learning full-stack web development helped me learn new ways to manage my time efficiently, as well as give me the ability to learn and use abstract technologies  in ways I never would have imagined. I'm eager to continue my journey as a developer and build my programming skills!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </div>
  )
}

export default  SectionWrapper(About,'about')