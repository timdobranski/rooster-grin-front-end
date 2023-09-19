import banner1 from '../../assets/images/banner-1.jpg';
import axios from 'axios';
import '../../index.css';
import '../../index.mobile.css';
import './signUp.css';
import './signUp.mobile.css';
import { useState } from 'react';

function History() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/send-email', {
        recipientEmail: email,
      });
      setEmail('');
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="row-3">
      <div className='content-container'>
        <h3 className='section-titles'>SIGN UP</h3>
        <p>Enter your email below to sign up for our newsletter</p>
        <p className='comment'>{'(sends confirmation email to address provided)'}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="email-input radius"
          />
          <button type="submit" className="signUpButton radius">
            SIGN UP
          </button>
        </form>
      </div>
      <img className='banner1' src={banner1} alt="banner1" />
    </div>
  );
}

export default History;