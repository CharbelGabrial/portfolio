import React from 'react'
import './Header.scss'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import { AppWrapp } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex' data-testid="header">
      <motion.div className='app__header-info'
      whileInView={{ x: [-100, 0], opacity: [0, 1]}}
      transition={{duration: 0.5}}
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Charbel</h1>
            </div>
            {/* <span>👋🏻</span> */}
          </div>
          <div className='tag-cmp app__flex'>
          <p className='p-text'>HAVE AN IDEA?</p>
          <p className='p-text'>Tell me about it!</p>
          </div>
        </div>
      </motion.div>
      <motion.div className='app__header-img'
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img className='overlay_circle'
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          src= {images.circle}
          alt= "profile_circle"
        />
      </motion.div>
      <motion.div className='app__header-circles'
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      >
        {[images.javascript, images.sass, images.node, images.react].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrapp(Header, 'home');