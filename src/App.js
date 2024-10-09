import FirstStep from './Components/FirstStep';
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import './App.css';
import { appContext } from './StepContext';
import { useContext } from 'react';


function App() {
  const {currentStep,userData} = useContext(appContext);
  function showCase(step){
    switch(step) {
      case 1: return <FirstStep/>
      case 2: return <SecondStep/>
      case 3: return <ThirdStep/>
      default: return <Step/>
    }
  }
  return (
    <div className="App">
      <header className='App-header'>
        <h3 style={{textDecoration:'underline', color:'red'}}>The Important Form</h3>
        <div className="center-stepper">
          <Stepper style={{width: "100%"}} activeStep={currentStep-1} orientation='horizontal'>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showCase(currentStep)}
      </header>
    </div>
  );
}

export default App;
