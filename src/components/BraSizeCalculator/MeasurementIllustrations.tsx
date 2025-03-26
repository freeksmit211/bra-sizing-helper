
import React from 'react';

type IllustrationProps = {
  type: 'underbust' | 'bust';
  className?: string;
};

const MeasurementIllustration: React.FC<IllustrationProps> = ({ type, className = '' }) => {
  return (
    <div className={`rounded-lg bg-white shadow-md overflow-hidden ${className}`}>
      <div className="aspect-w-16 aspect-h-9 relative">
        {type === 'underbust' ? (
          <div className="w-full h-full flex items-center justify-center bg-accent/30 p-4">
            <div className="relative w-4/5 h-4/5">
              {/* Simplified illustration of underbust measurement */}
              <div className="absolute w-24 h-24 rounded-full bg-primary/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-40 h-3 bg-primary/80 top-1/2 left-1/4 right-1/4 transform -translate-y-1/2"></div>
              <div className="absolute top-[calc(50%-18px)] left-1/2 transform -translate-x-1/2 text-xs font-medium text-primary-foreground bg-primary px-2 py-1 rounded-full">
                Underbust
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-accent/30 p-4">
            <div className="relative w-4/5 h-4/5">
              {/* Simplified illustration of bust measurement */}
              <div className="absolute w-32 h-32 rounded-full bg-primary/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-48 h-3 bg-primary/80 top-1/2 left-1/6 right-1/6 transform -translate-y-1/2"></div>
              <div className="absolute top-[calc(50%-18px)] left-1/2 transform -translate-x-1/2 text-xs font-medium text-primary-foreground bg-primary px-2 py-1 rounded-full">
                Bust
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-3 text-center bg-white">
        <p className="text-sm text-muted-foreground">
          {type === 'underbust' 
            ? 'Measure directly under your breasts, around your ribcage'
            : 'Measure at the fullest part of your breasts, keeping tape parallel to floor'
          }
        </p>
      </div>
    </div>
  );
};

const MeasurementIllustrations: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <MeasurementIllustration type="underbust" />
      <MeasurementIllustration type="bust" />
    </div>
  );
};

export default MeasurementIllustrations;
