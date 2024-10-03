import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "../assets/svg/keyboardArrowRightIcon.svg?react";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
   const [showPassword, setShowPassword] = useState(false);
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
   });
   const { name, email, password } = formData;

   const navigate = useNavigate();

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.id]: e.target.value,
      }));
   };

   return (
      <>
         <div className='pageContainer'>
            <header>
               <p className='pageHeader'>Welcome Back!</p>
            </header>

            <form>
               <input
                  type='text'
                  className='nameInput'
                  placeholder='Name'
                  id='name'
                  value={name}
                  onChange={onChange}
               />

               <input
                  type='email'
                  className='emailInput'
                  placeholder='Email'
                  id='email'
                  value={email}
                  onChange={onChange}
               />

               <div className='passwordInputDiv'>
                  <input
                     type={showPassword ? "text" : "password"}
                     className='passwordInput'
                     placeholder='Password'
                     id='password'
                     value={password}
                     onChange={onChange}
                  />

                  {/* <img
                     src={visibilityIcon}
                     alt='show password'
                     onClick={() => setShowPassword((prevState) => !prevState)}
                  /> */}
               </div>

               {/* <Link to='/forgot-password' className='forgotPasswordLink'>
                  Forgot Password
               </Link> */}

               <div className='signInBar'>
                  <p className='signInText'>Sign Up</p>

                  <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
               </div>
            </form>
            {/* Google OAuth */}

            <Link to='/sign-in' className='registerLink'>
               Sign In Instead{" "}
            </Link>
         </div>
      </>
   );
}
export default SignUp;
