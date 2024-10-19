import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import './Step3.css';

const Step3 = ({ formData, updateFormData, nextStep, isYearly }) => {
  const { handleSubmit } = useForm({
    defaultValues: formData.addOns,
  });

  const onSubmit = () => {
    nextStep();
  };

  const Addons = [
    {
      name: "onlineService",
      label: "Online service",
      monthly: "$1/mo",
      yearly: "$10/yr",
      description: "Access to multiplayer games",
    },
    {
      name: "largerStorage",
      label: "Larger storage",
      monthly: "$2/mo",
      yearly: "$20/yr",
      description: "Extra 1TB of cloud save",
    },
    {
      name: "customizableProfile",
      label: "Customizable profile",
      monthly: "$2/mo",
      yearly: "$20/yr",
      description: "Custom theme on your profile",
    },
  ];

  const handleChange = (e) => {
    const { name, checked } = e.target;
    updateFormData({
      addOns: { ...formData.addOns, [name]: checked },
    });
  };

  return (
    <>
      <div className="steps">
        <h1>Pick Add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="AddonsOptions">
          {Addons.map((addon) => (
            <label
              key={addon.name}
              className={`checkboxContainer ${formData.addOns[addon.name] ? "selected" : ""}`}
            >
              <input
                type="checkbox"
                name={addon.name}
                checked={formData.addOns[addon.name] || false}
                onChange={handleChange}
              />
              <div className="info">
                <h2>{addon.label}</h2>
                <p>{addon.description}</p>
              </div>
              <div className="price">
                <h3>{isYearly ? addon.yearly : addon.monthly}</h3>
              </div>
            </label>
          ))}
        </div>
        <button type="submit" className='Next'>Next Step</button>
      </form>
    </>
  );
};

// Define propTypes for validation
Step3.propTypes = {
  formData: PropTypes.shape({
    addOns: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
  updateFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  isYearly: PropTypes.bool.isRequired,
};

export default Step3;
