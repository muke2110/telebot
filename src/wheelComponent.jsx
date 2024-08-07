import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './wheelComponent.css'

const data = [
    { option: 'won 10', style: { backgroundColor: '#EE4040', textColor: 'white' } },
    { option: 'won 20', style: { backgroundColor: '#F0CF50', textColor: 'white' } },
    { option: 'won 30', style: { backgroundColor: '#815CD1', textColor: 'white' } },
    { option: 'won 40', style: { backgroundColor: '#3DA5E0', textColor: 'white' } },
    { option: 'won 50', style: { backgroundColor: '#34A24F', textColor: 'white' } },
    { option: 'won uber pass', style: { backgroundColor: '#F9AA1F', textColor: 'white' } },
    { option: 'won 2', style: { backgroundColor: '#FF6347', textColor: 'white' } },
    { option: 'better luck next time', style: { backgroundColor: '#DC143C', textColor: 'white' } }
];

const WheelComponent = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [result, setResult] = useState('');

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    const handleStopSpinning = () => {
        setMustSpin(false);
        setResult(data[prizeNumber].option);
    };

    return (
        <div className="wheel-container">
            <h1 className="title">Hello CodeSandbox</h1>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}
                onStopSpinning={handleStopSpinning}
            />
            <button onClick={handleSpinClick} className="spin-button">
                Spin
            </button>
            {result && <div className="result">Result: {result}</div>}
        </div>
    );
};

export default WheelComponent;
