import  { useState } from "react";
import "./App.css";
import MultiStepForm from "./MultiStepForm";
import useMultiStepForm from "./Hooks/useMultiStepForm";

function App() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    plan: "",
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  };

  const {
    step,
    formData,
    nextStep,
    prevStep,
    goToStep,
    updateFormData,
    isYearly,
    toggleBilling,
  } = useMultiStepForm(initialFormData);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("Submitting form data: ", formData); // Debugging
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <header>
        <div>
          <div  className={step === 1 ? "active" : ""}>1</div>
          <p>STEP1  <br /> YOUR INFO</p>
        </div>
        <div>
          <div  className={step === 2 ? "active" : ""}>2</div>
          <p>STEP2  <br /> SELECT PLAN</p>
        </div>
        <div>
          <div  className={step === 3 ? "active" : ""}>3</div>
          <p>STEP3  <br /> ADD-ONS</p>
        </div>
        <div>
          <div  className={step === 4 ? "active" : ""}>4</div>
          <p>STEP4  <br /> SUMMARY</p>
        </div>
      </header>
      <article>
        <MultiStepForm
          step={step}
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          updateFormData={updateFormData}
          isYearly={isYearly}
          toggleBilling={toggleBilling}
          isSubmitted={isSubmitted}
          goToStep={goToStep}
        />
      </article>
      {!isSubmitted && (
        <footer>
          {step > 1 && step < 5 && (
            <button className="Prev" onClick={prevStep}>
              Go Back
            </button>
          )}
          
          {step === 4 && (
            <button className="Confirm" onClick={handleSubmit}>
              Confirm
            </button>
          )}
        </footer>
      )}
    </>
  );
}

export default App;
