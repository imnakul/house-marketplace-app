import SignIn from "./SignIn";
import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
   const auth = getAuth();

   const [changeDetails, setChangeDetails] = useState(false);

   const [fromData, setFormData] = useState({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
   });

   const { name, email } = formData;

   const navigate = useNavigate();

   const onLogout = () => {
      auth.signOut();
      navigate("/");
   };

   const onSubmit = async () => {
      try {
         if (auth.currentUser.displayName !== name) {
            // update display name in db
            updateProfile(auth.currentUser, {
               displayName: name,
            });
            //update in firestore
            const userRef = doc(db, "users", auth.currentUser.uid);
            await updateDoc(userRef, {
               name,
            });
         }
      } catch (error) {
         toast.error("Could not update profile details");
      }
   };

   return (
      <div className='profile'>
         <header className='profileHeader'>
            <p className='pageHeader'>My Profile</p>
            <button type='button' className='logOut' onClick={onLogout}>
               Logout
            </button>
         </header>

         <main>
            <div className='profileDetailsHeader'>
               <p className='profileDetailsText'>Personal Details</p>
               <p
                  className='changePersonalDetails'
                  onClick={() => {
                     changeDetails && onSubmit();
                     setChangeDetails((prevState) => !prevState);
                  }}
               >
                  {changeDetails ? "done" : "change"}
               </p>
            </div>

            <div className='profileCard'>
               <form>
                  <input
                     type='text'
                     id='name'
                     className={
                        !changeDetails ? "profileName" : "profileNameActive"
                     }
                     disabled={!changeDetails}
                     value={name}
                     onChange={(e) => {
                        setFormData((prevState) => ({
                           ...prevState,
                           name: e.target.value,
                        }));
                     }}
                  />
                  <input
                     type='email'
                     id='email'
                     className={
                        !changeDetails ? "profileEmail" : "profileEmailActive"
                     }
                     disabled={!changeDetails}
                     value={email}
                     onChange={(e) => {
                        setFormData((prevState) => ({
                           ...prevState,
                           email: e.target.value,
                        }));
                     }}
                  />
               </form>
            </div>
         </main>
      </div>
   );
}
export default Profile;
