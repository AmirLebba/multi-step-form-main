import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import './Step2.css';

const Step2 = ({ formData, updateFormData, nextStep, isYearly, toggleBilling }) => {
  const { handleSubmit } = useForm({
    defaultValues: { plan: formData.plan },
  });

  const onSubmit = () => {
    nextStep();
  };

  const plans = [
    { name: "Arcade", monthly: "$9/mo", yearly: "$90/yr" },
    { name: "Advanced", monthly: "$12/mo", yearly: "$120/yr" },
    { name: "Pro", monthly: "$15/mo", yearly: "$150/yr" },
  ];

  return (
    <>
      <div className="steps">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="options">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              value={plan.name}
              className={formData.plan === plan.name ? "selected" : ""}
              onClick={() => updateFormData({ plan: plan.name })}
            >
              <img
                src={plan.name === "Arcade" ? Arcade : plan.name === "Advanced" ? Advanced : Pro}
                alt={plan.name}
              />
              <div className="description">
                <h2>{plan.name}</h2>
                <h3>{isYearly ? plan.yearly : plan.monthly}</h3>
                {isYearly && <h3>2 months free</h3>}
              </div>
            </button>
          ))}
        </div>
        <div className="Toggle">
          <h2>Monthly</h2>
          <label className="switch">
            <input type="checkbox" onChange={toggleBilling} checked={isYearly} />
            <span className="slider round"></span>
          </label>
          <h2>Yearly</h2>
        </div>
        <button type="submit" className='Next'>Next Step</button>
      </form>
    </>
  );
};

// Define propTypes for validation
Step2.propTypes = {
  formData: PropTypes.shape({
    plan: PropTypes.string,
  }).isRequired,
  updateFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  isYearly: PropTypes.bool.isRequired,
  toggleBilling: PropTypes.func.isRequired,
};

export default Step2;
