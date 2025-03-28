
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { BarChart3 } from 'lucide-react';

interface SizeChartProps {
  className?: string;
}

const SizeChart: React.FC<SizeChartProps> = ({ className }) => {
  return (
    <div className={className}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Size Chart (in cm)</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl overflow-auto max-h-[90vh]">
          <div className="text-center mb-4 flex items-center justify-center gap-2">
            <img 
              src="/lovable-uploads/281098e3-a7ca-4fd8-a74f-cc6e244f194a.png" 
              alt="Sassy Lingerie Logo" 
              className="h-8" 
            />
            <h2 className="text-xl font-semibold text-primary">Bra Size Chart</h2>
          </div>
          <p className="text-sm text-muted-foreground text-center mb-4">Measurements in centimeters</p>
          
          <div className="overflow-x-auto">
            <img 
              src="/lovable-uploads/97ffdff2-a5de-443a-a89a-4203c635103a.png" 
              alt="Bra size chart showing underbust and bust measurements with corresponding cup sizes" 
              className="w-full"
            />
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <p>This chart provides sizing guidance based on your measurements in centimeters. Find your underbust measurement in the left column and your bust measurement to determine your cup size.</p>
            <p className="mt-2">Note: This is a general guide. Individual fit may vary between different brands and styles.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SizeChart;
