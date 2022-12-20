import React from 'react';
import './Skills.scss';
// import * as ReactTooltip from 'react-tooltip';
import { useEffect, useState } from 'react';
import { AppWrapp, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
    .then((data) => {
      setExperience(data);
    })

    client.fetch(skillsQuery)
    .then((data) => {
      setSkills(data);
    })

  }, []);

  return (
    <>
      <h2 className='head-text' data-testid="skills">Skills <span>&</span> Where I’ve Worked</h2>
      <div className='app__skills-container'>
        <motion.div
        className='app__skills-list'>
          {skills?.map((skill) => (
            <motion.div 
            className='app__skills-item app__flex'
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5}}
            key={skills.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
            {experience?.map((experience) => (
              <motion.div
              className='app__skills-exp-item'
              key={experience.year}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {experience.works.map((work) => (
                  <>
                    <motion.div
                    className='app__skills-exp-work'
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 0.5}}
                    data-tip
                    key={work.name}
                    data-for={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      className='skills-tooltip'
                      id={work.name}
                      effect='solid'
                      place='top'
                      arrowColor='#fff'
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrapp(MotionWrap(Skills, 'app__skills'), 'skills', '');