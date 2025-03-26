import React from 'react';
import Calculator from '@/components/BraSizeCalculator/Calculator';
import { Separator } from '@/components/ui/separator';
import { Ruler, MoveHorizontal } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-calculator-light-gray">
      <header className="bg-white border-b border-border py-4 px-6 sm:px-8 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-medium text-primary">Sassy Lingerie Bra Size Calculator</h1>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-soft overflow-hidden border border-border">
            <div className="p-6 sm:p-8">
              <div className="max-w-2xl mx-auto text-center mb-8 animate-smooth-appear">
                <h2 className="text-xl sm:text-2xl font-medium text-foreground mb-3">
                  Find Your Perfect Fit
                </h2>
                <p className="text-muted-foreground">
                  Enter your measurements to calculate your bra size. We'll provide your exact size and sister sizes for the perfect fit.
                </p>
              </div>

              <Separator className="mb-8" />

              <Calculator />
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto animate-smooth-appear animate-delayed">
            <h2 className="text-xl font-medium text-foreground mb-4">How to Measure for Your Bra Size</h2>
            <div className="bg-white rounded-lg shadow-soft p-6 border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 shrink-0">
                      <Ruler className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium">Underbust Measurement</h3>
                      <ol className="mt-2 space-y-3 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">1.</span>
                          <span>Wrap the measuring tape directly under your breasts, around your ribcage.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">2.</span>
                          <span>The tape should be snug but not tight. You should be able to fit a finger between the tape and your body.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">3.</span>
                          <span>Make sure the tape is parallel to the floor and not riding up in the back.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">4.</span>
                          <span>Take a deep breath in and out, then record the measurement.</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 shrink-0">
                      <MoveHorizontal className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium">Bust Measurement</h3>
                      <ol className="mt-2 space-y-3 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">1.</span>
                          <span>Wrap the measuring tape around your back and across the fullest part of your breasts (at nipple level).</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">2.</span>
                          <span>Keep the tape parallel to the ground and make sure it's not too tight or too loose.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">3.</span>
                          <span>Stand straight with your arms relaxed at your sides.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">4.</span>
                          <span>Record this measurement in either inches or centimeters.</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent/20 rounded-lg p-6 space-y-4">
                  <h3 className="text-base font-medium text-primary">Tips for Accurate Measurements</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 shrink-0 text-xs font-medium">
                        ✓
                      </div>
                      <span>Use a soft fabric measuring tape, not a metal construction tape.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 shrink-0 text-xs font-medium">
                        ✓
                      </div>
                      <span>Measure directly against your skin, not over clothing.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 shrink-0 text-xs font-medium">
                        ✓
                      </div>
                      <span>For the most accurate results, take measurements while not wearing a bra.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 shrink-0 text-xs font-medium">
                        ✓
                      </div>
                      <span>Round to the nearest whole number for the underbust and bust measurements.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 shrink-0 text-xs font-medium">
                        ✓
                      </div>
                      <span>If you're between sizes, try both sizes and see which feels more comfortable.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 shrink-0 text-xs font-medium">
                        ✓
                      </div>
                      <span>Remeasure every 6-12 months as your body can change over time.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto space-y-8 animate-smooth-appear animate-delayed">
            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">Measuring Tips</h2>
              <div className="bg-white rounded-lg shadow-soft p-6 border border-border">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      1
                    </div>
                    <div>
                      <h3 className="text-base font-medium">Use a fabric measuring tape</h3>
                      <p className="text-sm text-muted-foreground">A fabric measuring tape will give you the most accurate results.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      2
                    </div>
                    <div>
                      <h3 className="text-base font-medium">Measure without a bra</h3>
                      <p className="text-sm text-muted-foreground">For the most accurate results, take measurements while not wearing a bra.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      3
                    </div>
                    <div>
                      <h3 className="text-base font-medium">Stand with good posture</h3>
                      <p className="text-sm text-muted-foreground">Stand straight with your arms relaxed at your sides when taking measurements.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      4
                    </div>
                    <div>
                      <h3 className="text-base font-medium">Keep the tape parallel</h3>
                      <p className="text-sm text-muted-foreground">Make sure the measuring tape is parallel to the floor for accurate results.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">Why Finding Your Correct Size Matters</h2>
              <div className="bg-white rounded-lg shadow-soft p-6 border border-border">
                <p className="text-muted-foreground mb-4">
                  Wearing the correct bra size is important for both comfort and health. A well-fitting bra provides proper support, improves posture, and can help prevent back and shoulder pain.
                </p>
                <p className="text-muted-foreground">
                  Many people wear the wrong bra size without realizing it. Using this calculator helps you find your true size based on your actual measurements, not just what feels familiar.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-border py-6 px-6 sm:px-8 mt-8">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>This calculator provides an estimate of your bra size. For the best fit, we recommend trying on bras in your calculated size and sister sizes.</p>
          <p className="mt-2">© {new Date().getFullYear()} Sassy Lingerie Bra Size Calculator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
