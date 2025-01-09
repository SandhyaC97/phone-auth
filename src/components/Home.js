import React, { useState } from "react";
import "./Home.css"; // Importing CSS for styles

function Home() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // To toggle between mobile input and OTP input

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    console.log("Mobile number submitted:", mobileNumber);
    // Simulate API call for sending OTP
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    console.log("OTP submitted:", otp);
    alert("Authentication successful!");
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <h2 className="heading">Mobile Authentication</h2>
        {step === 1 ? (
          <form onSubmit={handleMobileSubmit} className="form">
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              maxLength={10}
              className="input"
            />
            <button type="submit" className="button">
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="form">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength={6}
              className="input"
            />
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Home;
