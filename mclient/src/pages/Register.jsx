import React, { useState } from 'react'
import {useNavigate} from"react-router-dom";

const Register = () => {

  const [user,setUser] = useState({
    username:'',
    email:'',
    phone:'',
    password:'',
  });

  const navigate =useNavigate();

  const handleInput = (e)=>{
    console.log(e)
    const name = e.target.name;
    const value = e.target.value
    setUser({
      ...user,
      [name]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(user);

    try{
    const response =await fetch(`http://localhost:5000/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user),
    });

    if(response.ok){
      const res_data = await response.json();
      // storetokenInLS(res_data.token);
      localStorage.setItem("token",res_data.token);


      setUser({  username:'',
      email:'',
      phone:'',
      password:'',})

      navigate('/login');
    }


    console.log(response);
  }catch(err){
    console.log(err);
  }
}



  return (
   <>
  <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/img/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
   </>
  )
}

export default Register;