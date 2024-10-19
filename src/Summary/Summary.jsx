import "./Summary.css";

const Summary = ({ formData, isYearly, prevStep, nextStep, goToStep }) => {
  const { plan, addOns } = formData;

  const plans = {
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  const addOnsPrices = {
    onlineService: { monthly: 1, yearly: 10 },
    largerStorage: { monthly: 2, yearly: 20 },
    customizableProfile: { monthly: 2, yearly: 20 },
  };

  const selectedPlan = plan ? plans[plan] : null;
  const selectedAddOns = Object.keys(addOns)
    .filter((key) => addOns[key])
    .map((key) => ({
      name: key,
      price: isYearly ? addOnsPrices[key].yearly : addOnsPrices[key].monthly,
    }));

  const total = selectedAddOns.reduce(
    (acc, addOn) => acc + addOn.price,
    selectedPlan ? (isYearly ? selectedPlan.yearly : selectedPlan.monthly) : 0
  );

  return (
    <>
      <div className="steps">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="summary-container">
        {selectedPlan ? (
          <div className="plan-summary">
            <div>
              <h2>
                {plan} ({isYearly ? "Yearly" : "Monthly"})
              </h2>
              <p className="change-link" onClick={() => goToStep(2)}>Change</p>
            </div>
            <p className="plan-price">
              {isYearly
                ? "$" + selectedPlan.yearly + "/yr"
                : "$" + selectedPlan.monthly + "/mo"}
            </p>
          </div>
        ) : (
          <p>No plan selected</p>
        )}
        <div className="addons-summary">
          {selectedAddOns.length > 0 ? (
            selectedAddOns.map((addOn) => (
              <div key={addOn.name} className="addon-item">
                <p className="addon">{addOn.name.replace(/([A-Z])/g, " $1")}</p>
                <p className="addon-price">
                  {isYearly
                    ? "+$" + addOn.price + "/yr"
                    : "+$" + addOn.price + "/mo"}
                </p>
              </div>
            ))
          ) : (
            <p>No add-ons selected</p>
          )}
        </div>
        <div className="total-summary">
          <p className="total">Total (per {isYearly ? "year" : "month"})</p>
          <p className="total-price">
            {isYearly ? "+" + total + "/yr" : "+" + total + "/mo"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
