import React from 'react'

const Home = () => {
  return (
    <>
    <main>
      <section>
        <div className="section-hero">
        <div className="container grid grid-two-cols ">
          <div className="hero-content">
            <p>We are the world best IT Companny </p>
            <h1>welcome to jaimin technical</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet reiciendis laboriosam similique, reprehenderit ipsum nesciunt obcaecati explicabo harum a possimus veniam veritatis fugit eligendi quisquam placeat ratione accusamus labore.</p>
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

    <section className='section-analytics'>
      <div className="container grid grid-four-cols">
        <div className='div1'>
          <h2>50+</h2>
          <p>registation comanies</p>
        </div>
        <div className='div1'>
          <h2>100,00+</h2>
          <p>registation comanies</p>
        </div>
        <div className='div1'>
          <h2>50+</h2>
          <p>registation comanies</p>
        </div>
        <div className='div1'>
          <h2>50+</h2>
          <p>registation comanies</p>
        </div>

      </div>

    </section>
    
     <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/img/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Home;