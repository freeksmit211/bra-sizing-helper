
import React, { useState } from 'react';
import MeasurementStep from './MeasurementStep';
import ResultsDisplay from './ResultsDisplay';
import { calculateBraSize, MeasurementUnit, BraSizeResult } from '@/utils/calculateBraSize';

const Calculator: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [unit, setUnit] = useState<MeasurementUnit>("in");
  const [underbust, setUnderbust] = useState<number | string>("");
  const [bust, setBust] = useState<number | string>("");
  const [result, setResult] = useState<BraSizeResult | null>(null);

  const handleCalculate = () => {
    if (typeof underbust === 'number' && typeof bust === 'number' && underbust > 0 && bust > 0) {
      const calculatedResult = calculateBraSize({
        underbust,
        bust,
        unit
      });
      setResult(calculatedResult);
    }
  };

  const handleReset = () => {
    setStep(1);
    setUnderbust("");
    setBust("");
    setResult(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!result ? (
        <MeasurementStep
          step={step}
          unit={unit}
          onUnitChange={setUnit}
          underbust={underbust}
          bust={bust}
          onUnderbustChange={setUnderbust}
          onBustChange={setBust}
          onNextStep={() => setStep(2)}
          onPrevStep={() => setStep(1)}
          onCalculate={handleCalculate}
        />
      ) : (
        <ResultsDisplay
          result={result}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default Calculator;
