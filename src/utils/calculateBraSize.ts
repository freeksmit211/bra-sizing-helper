
export type MeasurementUnit = "in" | "cm";

export interface MeasurementInput {
  bust: number;
  underbust: number;
  unit: MeasurementUnit;
}

export interface BraSizeResult {
  bandSize: number;
  cupSize: string;
  fullSize: string;
  sisterSizes: string[];
}

const CUP_SIZES = ['AA', 'A', 'B', 'C', 'D', 'DD', 'DDD', 'E', 'F', 'FF', 'G', 'GG', 'H', 'HH', 'J'];

export const calculateBraSize = (measurements: MeasurementInput): BraSizeResult => {
  let { bust, underbust, unit } = measurements;
  
  // Convert to inches if in cm
  if (unit === "cm") {
    bust = bust / 2.54;
    underbust = underbust / 2.54;
  }

  // Calculate band size (round to nearest even number)
  let bandSize = Math.round(underbust / 2) * 2;
  
  // Calculate cup size
  const difference = bust - bandSize;
  
  // Get cup letter based on difference
  const cupIndex = Math.max(0, Math.round(difference) - 1);
  const cupSize = cupIndex < CUP_SIZES.length ? CUP_SIZES[cupIndex] : CUP_SIZES[CUP_SIZES.length - 1];
  
  // Create full size string
  const fullSize = `${bandSize}${cupSize}`;
  
  // Calculate sister sizes (one band up, one band down)
  const sisterSizes: string[] = [];
  
  // Sister size up: increase band by 2, decrease cup by 1
  if (cupIndex > 0) {
    sisterSizes.push(`${bandSize + 2}${CUP_SIZES[cupIndex - 1]}`);
  }
  
  // Sister size down: decrease band by 2, increase cup by 1
  if (cupIndex < CUP_SIZES.length - 1 && bandSize > 30) {
    sisterSizes.push(`${bandSize - 2}${CUP_SIZES[cupIndex + 1]}`);
  }
  
  return {
    bandSize,
    cupSize,
    fullSize,
    sisterSizes
  };
};
