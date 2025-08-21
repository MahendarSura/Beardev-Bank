interface BudgetCardProps {
  title: string;
  amount: number;
}

const BudgetCard = ({ title, amount }: BudgetCardProps) => (
  <div className="p-4 border rounded shadow">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-green-600 text-xl">${amount}</p>
  </div>
);

export default BudgetCard;
