import {useState} from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [investment, setInvestment] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 5,
        duration: 10
    })

    function handleChange (investmentType, newNumber){
        setInvestment(prevInvestment =>{
            return {
                ...prevInvestment,
                [investmentType]: +newNumber
            }
        })
    }

    const validDuration = investment.duration > 0;


  return <>
    <Header />
    <UserInput 
      onChange={handleChange}
      userInput={investment}
    />
    {validDuration && <Results input={investment} />}
    {!validDuration && <p className="center">Please enter duration greater than 0</p>}
  </>
}

export default App
