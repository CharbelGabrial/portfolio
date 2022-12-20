import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
            <a className='app__navigation-dot'
                href={`#${item}`} 
                key={item + index}
                style={active === item ? {backgroundColor: '#64ffda' } : { }}
                >
            </a>
        ))}
    </div>
  )
}

export default NavigationDots;