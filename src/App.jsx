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

    const validDuration = investment.duration > 0;

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
    {validDuration ? <Results input={investment} /> : <p className='center'>Please enter duration greated than 0</p>}

  </>
}

export default App
