import {useState} from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
    const [investment, setInvestment] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 5,
        duration: 10
    });

    function handleChange(investmentType, newNumber){
        setInvestment(prevInvestment => {
            return {
                ...prevInvestment,
                [investmentType]: +newNumber
            }
        })
    }

  return <>
    <Header />
    <UserInput 
      onChange={handleChange}
      investment={investment}
    />
    <Results 
      input={investment}
    />
  </>
}

export default App
