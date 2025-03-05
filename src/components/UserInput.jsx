import {useState} from 'react';

export default function UserInput(){
    const [investment, setInvestment] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 5,
        duration: 5
    });


    function handleChange(investmentType, newNumber){
        setInvestment( prevInput => {
            return {
                ...prevInput,
                [investmentType]: newNumber
            }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        required 
                        onChange={(e)=> handleChange('initialInvestment', e.target.value)}
                        value={investment.initialInvestment}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        required 
                        onChange={(e)=> handleChange('annualInvestment', e.target.value)}
                        value={investment.annualInvestment}
                    />
                </p>
            </div>
             <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        onChange={(e)=> handleChange('expectedReturn', e.target.value)}
                        value={investment.expectedReturn}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        onChange={(e)=> handleChange('duration', e.target.value)}
                        value={investment.duration}
                    />
                </p>
            </div>
  
        
        </section>
    )
}