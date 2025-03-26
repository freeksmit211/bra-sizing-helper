
import React, { useState, useEffect } from 'react';
import Calculator from './Calculator';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const EmbeddableCalculator: React.FC = () => {
  return (
    <div className="sassy-calculator-container">
      <Calculator />
      
      <style jsx>{`
        .sassy-calculator-container {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default EmbeddableCalculator;
