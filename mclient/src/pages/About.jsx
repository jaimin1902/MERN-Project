import React from 'react'

const About = () => {
  return (
<>
<main>
      <section>
        <div className="section-hero">
        <div className="container grid grid-two-cols ">
          <div className="hero-content">
            <p>We are the world best IT Companny </p>
            <h1>why choose us?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet reiciendis laboriosam similique, </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet reiciendis laboriosam similique, </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet reiciendis laboriosam similique, </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className='btn'>Connect now</button>
              </a>
              <a href="/service">
                <button className='btn secondary-btn'>learn more</button>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/img/home.png" alt="home image" 
            width={400}
            height={500}
           />
          </div>
        </div>
        </div>
      </section>
    
    </main>

</>
  )
}

export default About