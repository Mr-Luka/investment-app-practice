import {useState} from 'react';


export default function UserInput(){
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
                        value={investment.initialInvestment}
                        onChange={(e)=> handleChange('initialInvestment', e.target.value)}
                     />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        required 
                        value={investment.annualInvestment}
                        onChange={(e)=> handleChange('annualInvestment', e.target.value)}
                        />
                </p>
            </div>
             <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        value={investment.expectedReturn}
                        onChange={(e)=> handleChange('expectedReturn', e.target.value)}
                        />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={investment.duration}
                        onChange={(e)=> handleChange('duration', e.target.value)}
                        />
                </p>
            </div>
  
        
        </section>
    )
}