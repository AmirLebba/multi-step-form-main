import PropTypes from 'prop-types'; // Import PropTypes for validation
import { useForm } from "react-hook-form";
import './Step-1.css';

function Step1({ formData, updateFormData, nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <>
      <div className="steps">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label htmlFor="name">Name</label>
        {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <input
          className={errors.name ? "errorField" : ""}
          type="text"
          {...register("name", { required: "Name is required" })}
          placeholder="e.g. Stephen King"
        />
        <div>
          <label htmlFor="email">Email Address</label>
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <input
          className={errors.email ? "errorField" : ""}
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          placeholder="e.g. StephenKing@lorem.com"
        />
        <div>
          <label htmlFor="phone">Phone Number</label>
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>
        <input
          className={errors.phone ? "errorField" : ""}
          type="tel"
          {...register("phone", { required: "Phone number is required" })}
          placeholder="e.g. +1 234 567 890"
        />
        <button type="submit" className='Next'>Next Step</button>
      </form>
    </>
  );
}

// Define propTypes for validation
Step1.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  updateFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Step1;
