
import React from 'react';
import Calculator from '@/components/BraSizeCalculator/Calculator';
import { Separator } from '@/components/ui/separator';

const CalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-calculator-light-gray p-4">
      <header className="bg-white border-b border-border py-4 px-6 rounded-t-lg shadow-sm">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/281098e3-a7ca-4fd8-a74f-cc6e244f194a.png" 
            alt="Sassy Lingerie Logo" 
            className="h-10" 
          />
          <h1 className="text-xl font-medium text-primary">Bra Size Calculator</h1>
        </div>
      </header>

      <main className="flex-1 py-6">
        <div className="bg-white rounded-lg shadow-soft overflow-hidden border border-border">
          <div className="p-4 sm:p-6">
            <div className="max-w-2xl mx-auto text-center mb-6">
              <h2 className="text-lg sm:text-xl font-medium text-foreground mb-2">
                Find Your Perfect Fit
              </h2>
              <p className="text-sm text-muted-foreground">
                Enter your measurements to calculate your bra size.
              </p>
            </div>

            <Separator className="mb-6" />

            <Calculator />
          </div>
        </div>
      </main>

      <footer className="text-center text-sm text-muted-foreground mt-4">
        <p>© {new Date().getFullYear()} Sassy Lingerie. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CalculatorPage;
