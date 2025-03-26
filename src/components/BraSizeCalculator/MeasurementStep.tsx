
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { MeasurementUnit } from '@/utils/calculateBraSize';
import Instructions from './Instructions';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface MeasurementStepProps {
  step: number;
  unit: MeasurementUnit;
  onUnitChange: (unit: MeasurementUnit) => void;
  underbust: number | string;
  bust: number | string;
  onUnderbustChange: (value: number | string) => void;
  onBustChange: (value: number | string) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onCalculate: () => void;
}

const MeasurementStep: React.FC<MeasurementStepProps> = ({
  step,
  unit,
  onUnitChange,
  underbust,
  bust,
  onUnderbustChange,
  onBustChange,
  onNextStep,
  onPrevStep,
  onCalculate
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset error when step changes
    setError(null);
  }, [step]);

  const handleNextClick = () => {
    if (step === 1) {
      // Validate underbust
      if (!underbust || Number(underbust) <= 0) {
        setError("Please enter a valid measurement greater than 0");
        return;
      }

      setIsAnimating(true);
      setTimeout(() => {
        onNextStep();
        setIsAnimating(false);
      }, 300);
    } else if (step === 2) {
      // Validate bust
      if (!bust || Number(bust) <= 0) {
        setError("Please enter a valid measurement greater than 0");
        return;
      }
      
      if (Number(bust) <= Number(underbust)) {
        setError("Bust measurement should be larger than underbust measurement");
        return;
      }

      onCalculate();
    }
  };

  const handlePrevClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onPrevStep();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className={`w-full transition-all-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-medium text-primary">
            {step === 1 ? 'Underbust Measurement' : 'Bust Measurement'}
          </h2>
          <p className="text-sm text-muted-foreground">
            {step === 1 
              ? 'Measure around your torso directly under your breasts' 
              : 'Measure around the fullest part of your breasts'}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Label htmlFor="unit" className="text-sm">Unit</Label>
          <Select value={unit} onValueChange={(value: MeasurementUnit) => onUnitChange(value)}>
            <SelectTrigger className="w-[80px]" id="unit">
              <SelectValue placeholder="Unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in">inches</SelectItem>
              <SelectItem value="cm">cm</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-soft mb-6 border border-border">
        <div className="space-y-6">
          <Instructions step={step} />
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={step === 1 ? 'underbust' : 'bust'} className="text-sm">
                {step === 1 ? 'Enter your underbust measurement' : 'Enter your bust measurement'}
              </Label>
              <div className="flex items-center">
                <Input
                  id={step === 1 ? 'underbust' : 'bust'}
                  type="number"
                  value={step === 1 ? underbust : bust}
                  onChange={(e) => step === 1 
                    ? onUnderbustChange(e.target.valueAsNumber || '')
                    : onBustChange(e.target.valueAsNumber || '')
                  }
                  placeholder={`Enter measurement in ${unit}`}
                  className="rounded-r-none focus:z-10 transition-all-200"
                  step="0.1"
                  min="0"
                />
                <div className="bg-muted px-3 py-2 rounded-r-md border border-l-0 border-input text-muted-foreground">
                  {unit}
                </div>
              </div>
              {error && <p className="text-destructive text-sm mt-1">{error}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        {step > 1 ? (
          <Button 
            variant="outline" 
            onClick={handlePrevClick}
            className="flex items-center transition-all-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        ) : (
          <div></div>
        )}
        
        <Button 
          onClick={handleNextClick}
          className="flex items-center transition-all-200"
        >
          {step === 1 ? 'Next' : 'Calculate'}
          {step === 1 && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default MeasurementStep;
