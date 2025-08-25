// src/pages/index.tsx
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-axisRed">
        Beardev Bank 
        <nav className="flex items-center justify-between mb-12">
        <div className="text-5xl font-extrabold text-axisRed">Beardev Bank</div>
        <ul className="hidden md:flex space-x-10 font-semibold text-gray-700">
          <li className="hover:text-axisRed cursor-pointer">Explore products</li>
          <li className="hover:text-axisRed cursor-pointer">Grab Deal</li>
          <li className="hover:text-axisRed cursor-pointer">Make Payments</li>
          <li className="hover:text-axisRed cursor-pointer">Bank Smart</li>
          <li className="hover:text-axisRed cursor-pointer">Accounts</li>
          <li className="hover:text-axisRed cursor-pointer">Deposits</li>
          <li className="hover:text-axisRed cursor-pointer">Cards</li>
          <li className="hover:text-axisRed cursor-pointer">Loans</li>
          <li className="hover:text-axisRed cursor-pointer">Investments</li>
          <li className="hover:text-axisRed cursor-pointer">Insurance</li>
          <li className="hover:text-axisRed cursor-pointer">Special Services</li>
          <li className="hover:text-axisRed cursor-pointer">Knowledge Hub</li>
        </ul>
        <div className="text-axisRed font-semibold cursor-pointer hover:underline">Login/Signup</div>
      </nav>
      </h1>
    </div>
  );
};

export default Home;
