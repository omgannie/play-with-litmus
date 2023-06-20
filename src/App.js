import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MultiStepForm, PassageInput } from "./components";
import { createPassageForAnalysis } from "./services/passages.js";

function App() {
  const [currentStep, setStep] = useState(0);
  const [userInput, setInput] = useState(null);

  async function handlePassage({ userInput }) {
    const resp = await createPassageForAnalysis({ textInput: userInput })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MultiStepForm
          steps={[
          <PassageInput
            stepId={0}
            handleSubmit={() => handlePassage({ userInput })}
            buttonText={"Next"}
            onChange={(e) => setInput(e.target.value)}
          />
        ]} />
      </header>
    </div>
  );
}

export default App;
