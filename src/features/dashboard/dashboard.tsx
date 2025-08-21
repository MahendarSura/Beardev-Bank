import BudgetCard from '../components/finance/BudgetCard';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  // Dummy data, real data vachina API or context use cheyyachu
  const [budget, setBudget] = useState(1200);
  const [savings, setSavings] = useState(500);
  const [investments, setInvestments] = useState(800);

  // Example: useEffect to fetch data later
  useEffect(() => {
    // fetch budget/savings/investments here and update state
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BudgetCard title="Monthly Budget" amount={budget} />
        <BudgetCard title="Savings" amount={savings} />
        <BudgetCard title="Investments" amount={investments} />
      </div>
    </div>
  );
};

export default Dashboard;
