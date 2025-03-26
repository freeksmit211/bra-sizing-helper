
import React from 'react';

interface InstructionsProps {
  step: number;
}

const Instructions: React.FC<InstructionsProps> = ({ step }) => {
  const renderInstructions = () => {
    switch (step) {
      case 1:
        return (
          <div className="animate-slide-in space-y-3">
            <h3 className="text-lg font-medium text-primary mb-2">How to measure your underbust</h3>
            <p className="text-sm text-muted-foreground">
              To measure your underbust:
            </p>
            <ol className="text-sm space-y-3 list-decimal pl-5">
              <li>
                Wrap the measuring tape directly under your breasts, around your ribcage.
              </li>
              <li>
                The tape should be snug but not tight. Make sure it's parallel to the ground.
              </li>
              <li>
                Take a deep breath in and out, then measure. This is your underbust measurement.
              </li>
            </ol>
          </div>
        );
      case 2:
        return (
          <div className="animate-slide-in space-y-3">
            <h3 className="text-lg font-medium text-primary mb-2">How to measure your bust</h3>
            <p className="text-sm text-muted-foreground">
              To measure your bust:
            </p>
            <ol className="text-sm space-y-3 list-decimal pl-5">
              <li>
                Wrap the measuring tape around your back and across the fullest part of your breasts, typically at nipple level.
              </li>
              <li>
                The tape should be snug but not tight, and parallel to the ground.
              </li>
              <li>
                Make sure you're standing straight with your arms relaxed at your sides.
              </li>
            </ol>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-accent/30 rounded-lg p-4 backdrop-blur-sm border border-accent">
      {renderInstructions()}
    </div>
  );
};

export default Instructions;
