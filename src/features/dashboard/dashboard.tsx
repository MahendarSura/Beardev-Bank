import { useEffect, useState } from 'react';
import BudgetCard from '../components/finance/BudgetCard';
import InvestmentsList from '../features/investments/InvestmentsList';
import SavingsSummary from '../features/savings/SavingsSummary';

const Dashboard = () => {
  // Dummy state values
  const [budget, setBudget] = useState(1200);
  const [savings, setSavings] = useState(500);
  const [investments, setInvestments] = useState(800);

  useEffect(() => {
    // Fetch data and update state here
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <BudgetCard title="Monthly Budget" amount={budget} />
        <BudgetCard title="Savings" amount={savings} />
        <BudgetCard title="Investments" amount={investments} />
      </div>

      {/* Savings Summary Section */}
      <div className="mb-8">
        <SavingsSummary totalSaved={savings} monthlyContribution={200} />
      </div>

      {/* Investments List Section */}
      <div>
        <InvestmentsList />
      </div>
    </div>
  );
};

export default Dashboard;
