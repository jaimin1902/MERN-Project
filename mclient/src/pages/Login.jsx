import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [user,setUser] = useState({
    email:"",
    password:"",
  });

  const navigate=useNavigate();

  const handleInput =(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(user);

    try{
      const response =await fetch(`http://localhost:5000/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user),
      });
  
      if(response.ok){
        alert("login successful")

        const res_data = await response.json();
          // storetokenInLS(res_data.token);
      localStorage.setItem("token",res_data.token);

        setUser({  
        email:'',
        password:'',
      });
        navigate('/');
      }else{
        alert("Invalid Credentials");

      }
      
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
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
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

export default Login;