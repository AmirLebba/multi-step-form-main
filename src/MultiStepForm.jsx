import React from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Summary from "./Summary/Summary";
import Confirmation from "./Confirmation/Confirmation";

const MultiStepForm = ({
  step,
  formData,
  nextStep,
  prevStep,
  goToStep,
  updateFormData,
  isYearly,
  toggleBilling,
  isSubmitted,
}) => {
  

  if (isSubmitted) {
    return (
      <Confirmation
      />
    );
  }

  if (step === 1) {
    return (
      <Step1
        formData={formData}
        updateFormData={updateFormData}
        nextStep={nextStep}
      />
    );
  } else if (step === 2) {
    return (
      <Step2
        formData={formData}
        updateFormData={updateFormData}
        nextStep={nextStep}
        prevStep={prevStep}
        isYearly={isYearly}
        toggleBilling={toggleBilling}
      />
    );
  } else if (step === 3) {
    return (
      <Step3
        formData={formData}
        updateFormData={updateFormData}
        nextStep={nextStep}
        prevStep={prevStep}
        isYearly={isYearly}
        toggleBilling={toggleBilling}
      />
    );
  } else if (step === 4) {
    return (
      <Summary
        formData={formData}
        prevStep={prevStep}
        isYearly={isYearly}
        nextStep={nextStep}
        goToStep={goToStep}
      />
    );
  } else {
    return <div>Form</div>;
  }
};

export default MultiStepForm;
