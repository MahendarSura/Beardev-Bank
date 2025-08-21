import React from 'react';

interface Investment {
  id: number;
  name: string;
  amount: number;
  returnsPercent: number;
}

const dummyInvestments: Investment[] = [
  { id: 1, name: 'Stocks - ABC Corp', amount: 1000, returnsPercent: 8 },
  { id: 2, name: 'Mutual Funds - XYZ Growth', amount: 500, returnsPercent: 5.5 },
  { id: 3, name: 'Bonds - Govt', amount: 2000, returnsPercent: 6 },
];

const InvestmentsList = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Investments</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Investment</th>
            <th className="border border-gray-300 p-2 text-right">Amount ($)</th>
            <th className="border border-gray-300 p-2 text-right">Returns (%)</th>
          </tr>
        </thead>
        <tbody>
          {dummyInvestments.map((inv) => (
            <tr key={inv.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{inv.name}</td>
              <td className="border border-gray-300 p-2 text-right">{inv.amount.toFixed(2)}</td>
              <td className="border border-gray-300 p-2 text-right">{inv.returnsPercent.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentsList;
