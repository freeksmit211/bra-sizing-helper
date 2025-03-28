
import React from 'react';

type IllustrationProps = {
  type: 'underbust' | 'bust';
  className?: string;
};

const MeasurementIllustration: React.FC<IllustrationProps> = ({ type, className = '' }) => {
  return (
    <div className={`rounded-lg bg-white shadow-md overflow-hidden ${className}`}>
      <div className="relative">
        {type === 'underbust' ? (
          <>
            <div className="w-full aspect-[1.5/1] overflow-hidden">
              <img 
                src="/lovable-uploads/b862b507-62ab-485b-acaf-313d10787d27.png" 
                alt="How to measure underbust" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 text-center bg-white">
              <h3 className="text-base font-medium mb-2">Step 1 – Measure Your Band Size (Under-Bust)</h3>
              <p className="text-sm text-muted-foreground">
                Wrap a measuring tape around your chest, where your band sits, and ensure that it is snug, but not too tight or loose.
                Round it off to the next even number if it's an odd measurement or in fractions.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="w-full aspect-[1.5/1] overflow-hidden">
              <img 
                src="/lovable-uploads/64dcd7f5-db0e-4867-afb5-b079a68da02c.png" 
                alt="How to measure bust" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 text-center bg-white">
              <h3 className="text-base font-medium mb-2">Step 2 – Measure Your Cup Size (Over-Bust)</h3>
              <p className="text-sm text-muted-foreground">
                Wrap the tape around the fullest part of your breasts, at the nipple level. 
                This will give you an accurate measurement.
                Round it off to the nearest or next whole number.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const MeasurementIllustrations: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <MeasurementIllustration type="underbust" />
      <MeasurementIllustration type="bust" />
    </div>
  );
};

export default MeasurementIllustrations;
