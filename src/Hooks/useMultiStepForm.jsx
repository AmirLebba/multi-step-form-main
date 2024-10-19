import { useState } from "react";

const useMultiStepForm = (initialState) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [isYearly, setIsYearly] = useState(false); // Add state for toggle

  const nextStep = () => {
    setStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };
  
  const goToStep = (stepNumber) => setStep(stepNumber);

  const updateFormData = (newData) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...newData }));
  };

  const toggleBilling = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  return {
    step,
    formData,
    nextStep,
    prevStep,
    goToStep,
    updateFormData,
    isYearly,
    toggleBilling,
    
  };
};

export default useMultiStepForm;
