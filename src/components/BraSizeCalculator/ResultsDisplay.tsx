
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BraSizeResult } from '@/utils/calculateBraSize';
import { ArrowLeft, Share2, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

interface ResultsDisplayProps {
  result: BraSizeResult;
  onReset: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, onReset }) => {
  const [animating, setAnimating] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    }, 300);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Bra Size Result',
        text: `My calculated bra size is ${result.fullSize}. Try the bra size calculator yourself!`,
        url: window.location.href,
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      navigator.clipboard.writeText(
        `My calculated bra size is ${result.fullSize}. Try the bra size calculator yourself at ${window.location.href}`
      ).then(() => {
        toast.success('Result copied to clipboard!');
      });
    }
  };

  return (
    <div className={`transition-all-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-medium text-primary">Your Bra Size Results</h2>
          <p className="text-sm text-muted-foreground">
            Based on your measurements
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-soft mb-8 overflow-hidden border border-border">
        <div className="bg-gradient-to-r from-accent to-accent/40 p-8 text-center">
          <div className="text-xs font-medium text-accent-foreground/70 uppercase tracking-wider mb-1">
            Your size is
          </div>
          <div className="text-4xl font-bold text-primary animate-[fade-in_0.5s_ease-out]">
            {result.fullSize}
          </div>
          <div className="mt-1 text-sm text-accent-foreground/70">
            Band: {result.bandSize} | Cup: {result.cupSize}
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Sister Sizes</h3>
            {result.sisterSizes.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {result.sisterSizes.map((size, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm transition-all-200 hover:bg-secondary/70"
                  >
                    {size}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No sister sizes available for your measurements.</p>
            )}
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">What are sister sizes?</h3>
            <p className="text-sm text-muted-foreground">
              Sister sizes are bra sizes with the same cup volume but different band sizes. 
              If your calculated size doesn't feel right, try a sister size for a better fit.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <Button 
          variant="outline" 
          onClick={onReset}
          className="flex items-center transition-all-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Start Over
        </Button>
        
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleShare}
            className="flex items-center transition-all-200"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          
          <Button 
            onClick={onReset}
            className="flex items-center transition-all-200"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            New Calculation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
