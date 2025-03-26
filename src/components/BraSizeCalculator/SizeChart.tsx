
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-primary">Bra Size Chart</h2>
            <p className="text-sm text-muted-foreground">Measurements in centimeters</p>
          </div>
          
          <div className="overflow-x-auto">
            <img 
              src="/lovable-uploads/c63878da-f87b-4d1b-8af0-53b4dc62af5d.png" 
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
