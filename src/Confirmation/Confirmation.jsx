// Confirmation.jsx
import './Confirmation.css'; 
import ThankYou from "../assets/images/icon-thank-you.svg";

const Confirmation = () => {
  return (
    <div className="confirmation">
      <img src={ThankYou} alt="Thank you" />
      <h1>Thank you!</h1>
      <p>Thanks for confirming your subscription!</p>
      <p>
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Confirmation;
