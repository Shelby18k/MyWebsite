import React, {useState}from 'react'
import emailjs from 'emailjs-com';
import '../../App.css'
import './SignUp.css'






function SignUp() {

    const [mailSent, displayMessage] = useState(false);
    const [mailError,displayError] = useState(false);

    const displaySuccess = () => displayMessage(!mailSent);
    const displaySuc = () => displayError(!mailError);

    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('service_j5ee588', 'template_z5xb09j', e.target,"user_vErEkvZYR0nx9fx7LW3Jn")
          .then((result) => {
              console.log(result.text);
              displaySuccess()
          }, (error) => {
              console.log(error.text);
              displaySuc();
          });
      }

    return (
        <div className="parent">
        <div className="messages">
            {mailSent && <h2>Sent Successfully</h2>}
            {mailError && <h2>Error Occurred!</h2>}
        </div>
        <div className="sign-up">
            
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
        </div>
        </div>
    );
}

export default SignUp;

