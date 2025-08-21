import React from 'react';

interface SavingsSummaryProps {
  totalSaved: number;
  monthlyContribution: number;
}

const SavingsSummary = ({
  totalSaved,
  monthlyContribution,
}: SavingsSummaryProps) => {
  return (
    <div className="p-4 border rounded shadow bg-green-50">
      <h2 className="text-2xl font-semibold mb-3">Savings Summary</h2>
      <p className="text-lg">
        Total Saved: <span className="font-bold">${totalSaved.toFixed(2)}</span>
      </p>
      <p className="text-lg">
        Monthly Contribution:{' '}
        <span className="font-bold">${monthlyContribution.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default SavingsSummary;
