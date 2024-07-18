import React ,{useState} from 'react'

const Contact = () => {

  const [contact,setContact] = useState({
    username:'',
    email:'',
    message:'',
  });

  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value
    setContact({
      ...contact,
      [name]:value,});
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(contact);

    try{
      const response =await fetch(`http://localhost:5000/contactForm/contact`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(contact),
      });
  
      if(response.ok){
        setContact({ 
        username:'',
        email:'',
        message:'',
       })
  
      }
  
  
      console.log(response);
    }catch(err){
      console.log(err);
    }

  }

  return (
    <>
    <section className="section-contact">
    <div className="contact-content container">
      <h1 className="main-heading">contact us</h1>
    </div>
    {/* contact page main  */}
    <div className="container grid grid-two-cols">
      <div className="contact-img">
        <img src="/img/support.png" alt="we are always ready to help" />
      </div>

      {/* contact form content actual  */}
      <section className="section-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              value={contact.username}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={contact.email}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              autoComplete="off"
              value={contact.message}
              onChange={handleInput}
              required
              cols="30"
              rows="6"
            ></textarea>
          </div>

          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </section>
    </div>

    <section className="mb-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.180691688409!2d72.49625799216132!3d23.83316201445587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c59cb97afd4eb%3A0xff712316d2fb1223!2sUpera%2C%20Gujarat%20384170!5e0!3m2!1sen!2sin!4v1716607217330!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.180691688409!2d72.49625799216132!3d23.83316201445587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c59cb97afd4eb%3A0xff712316d2fb1223!2sUpera%2C%20Gujarat%20384170!5e0!3m2!1sen!2sin!4v1716607217330!5m2!1sen!2sin"
       width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </section>
  </section>
</>
  )
}

export default Contact;