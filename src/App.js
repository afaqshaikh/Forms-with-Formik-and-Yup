import './App.css';
import FormikForms from './FormikForms';
import FormikYups from './FormikYups';
import StepperComponent from './MultistepsForms/Stepper';

function App() {
  return (
    <div className=" container-fluid">
      <div className="row">
        <StepperComponent />
      </div>
      <div className="row">
        <div className ="col">
        <FormikForms />
        </div>
        <div className ="col">
          <FormikYups />
        </div>
      </div>
    </div>
  );
}

export default App;
