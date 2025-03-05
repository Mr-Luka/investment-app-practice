import {useState} from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [investment, setInvestment] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 5,
        duration: 5
    });

    const correctDuration = investment.duration > 0;


    function handleChange(investmentType, newNumber){
        setInvestment( prevInput => {
            return {
                ...prevInput,
                [investmentType]: +newNumber
            }
        })
    }


  return <>
    <Header />
    <UserInput 
      changeOn={handleChange}
      userInput={investment}
    />
    {correctDuration ? <Results input={investment}/> : <p className='center'>Please enter duration greater than 0</p>}
      
  </>
}

export default App
