import react ,{ useState } from 'react'
import './App.css'
import Form from './first-form/Form'



function App() {
  const [step, setStep] = useState(1);
  const handleFormSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  return (
    <>
      <header>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </header>
      <article>
        <Form />
      </article>
      <footer>
        <button onClick={() => setStep(step + 1)}>Next Step</button>
      </footer>
    </>
  );
}

export default App
 