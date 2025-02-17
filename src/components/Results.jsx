import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Results ({input}){
    const resultsData = calculateInvestmentResults(input);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {

                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}