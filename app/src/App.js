import React, { useState, useEffect, useRef } from 'react';
import { Search, User, LifeBuoy, MapPin, ArrowRightCircle, ChevronRight, MessageCircle, BarChart, CreditCard, DollarSign, Bot, Loader } from 'lucide-react';
import { HelpCircle, Phone, Map, AlertTriangle, FileText } from 'lucide-react';

const App = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const botResponse = { text: `You said: "${userMessage.text}"`, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const allCards = [
    {
      title: "Everyday Savings Account",
      desc: "Enjoy offers on BookMyShow, EazyDiner and more.",
      img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_1.jpg"
    },
    {
      title: "Credit Cards",
      desc: "Rewards | Cashback | EMI Deals",
      img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_2.jpg"
    },
    {
      title: "3-in-1 Trinity Account",
      desc: "Save, Trade & Invest Smartly",
      img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_3.jpg"
    },
    {
      title: "Current Account",
      desc: "Power your entrepreneurial dreams. Enjoy simplified transactions and grow the smart way.",
      img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_1.jpg"
    },
    {
      title: "Business Lending",
      desc: "Not enough funds for your business dreams? Flexible collateral-free loans from ₹3 lakh to ₹1 crore",
      img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_2.jpg"
    },
    {
      title: "Working Capital",
      desc: "Your big ambitions need smart capital. Answer business opportunities with confidence, thanks to our working capital solutions",
      img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_3.jpg"
    }
  ];

  const firstRowCards = allCards.slice(0, 3);
  const secondRowCards = allCards.slice(3, 6);

  const lastThreeImages = [
    {
      title: "Pay in a Flash!",
      description: "Scan, tap, and pay. Make UPI payments on-the-go with the New Beardev Bank App.",
      image: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132546_1.jpg",
      linkText: "Know more"
    },
    {
      title: "Did you know? One app can do it all!",
      description: "Bank, invest, shop, travel, pay & more with the Beardev Mobile Banking App!",
      image: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132546_2.jpg",
      linkText: "Know More"
    },
    {
      title: "3-IN-1 ACCOUNT",
      description: "Savings + Demat + Trading. Stocks | Bonds | ETFs | IPO",
      image: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132546_3.jpg",
      linkText: "Upgrade Now"
    }
  ];

  const helpOptions = [
    {
      icon: <HelpCircle size={16} className="text-gray-600 mb-1" />,
      title: "Visit Help Center",
      description: "Get information on all topics",
    },
    {
      icon: <Phone size={16} className="text-gray-600 mb-1" />,
      title: "Contact us",
      description: "Get in touch with a phone banking expert",
    },
    {
      icon: <Map size={16} className="text-gray-600 mb-1" />,
      title: "Locate us",
      description: "Find a branch or ATM near you",
    },
    {
      icon: <AlertTriangle size={16} className="text-gray-600 mb-1" />,
      title: "Report a fraud",
      description: "Raise a dispute or report a suspicious transaction",
    },
    {
      icon: <FileText size={16} className="text-gray-600 mb-1" />,
      title: "Lodge a complaint",
      description: "Raise a grievance for any service deficiency",
    },
  ];

  const footerData = {
    "About us": [
      "Our Businesses", "Media Centre", "Careers", "DIFC Branch", "GIFT Branch", "KMFSL"
    ],
    "Customer Service": [
      "Important Information", "Write to us", "Grievance Redressal", "Report Fraud / Raise Dispute", "Banking Ombudsman", "Download Forms", "Service Requests", "Track Application Status", "Tips on Safe Banking", "Doorstep Banking Service"
    ],
    "Calculators & Tools": [
      "Personal Loan EMI Calculator", "Car Loan EMI Calculator", "Home Loan EMI Calculator", "Fixed Deposit Calculator", "Recurring Deposit Calculator", "Life Insurance Calculator", "Business Loan EMI Calculator", "Retirement Calculator", "Simple Interest Calculator", "Compound Interest Calculator"
    ],
    "Digital Banking": [
      "Ways to Bank", "Insta Services", "Business & Fintech", "Open Banking"
    ]
  };
  
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="px-4 sm:px-6 lg:px-16 xl:px-20">
        <header className="bg-red-600 shadow-sm sticky top-0 z-50 text-[12px] -mx-4 sm:-mx-6 lg:-mx-16 xl:-mx-20">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            {/* Increased font size for B and Beardev Bank text from text-sm to text-base */}
            <div className="flex items-center space-x-3 min-w-0">
              <div className="flex items-center flex-shrink-0">
                <span className="bg-white text-red-600 rounded-md p-1 mr-2 font-bold text-base">B</span>
                <span className="text-base font-bold text-white whitespace-nowrap">Beardev Bank</span>
              </div>
              {/* Increased font size for main nav links from text-xs to text-sm */}
              <nav className="flex items-center space-x-2 font-medium min-w-0 overflow-x-auto no-scrollbar whitespace-nowrap text-sm">
                {["Personal", "Business", "Corporate", "Private Banking", "Privy League", "Solitaire", "NRI Services", "Investors"].map((link) => (
                  <a key={link} href="#" className="text-white hover:underline flex-shrink-0 px-1">{link}</a>
                ))}
              </nav>
            </div>
            {/* Increased font size for Login text from text-xs to text-sm */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button className="text-white hover:text-gray-100 p-2 rounded-full transition-colors hidden sm:block">
                <Search size={16} />
              </button>
              <button className="bg-white hover:bg-gray-100 text-red-600 font-semibold px-3 py-1 rounded-full flex items-center space-x-1 text-sm shadow-sm transition-colors whitespace-nowrap">
                <User size={14} />
                <span>Login</span>
              </button>
            </div>
          </div>
          <div className="bg-white border-t border-gray-200">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
              {/* Increased font size for sub-nav links from text-[11px] to text-xs */}
              <div className="flex items-center space-x-3 text-gray-600 font-medium text-xs min-w-0 overflow-x-auto no-scrollbar whitespace-nowrap">
                {["Accounts & Deposits", "Cards & Prepaid Services", "Loans", "Investment & Insurance", "Payments & Taxes", "Offers", "Service Request"].map((item) => (
                  <a key={item} href="#" className="hover:text-red-600 flex-shrink-0 px-1">{item}</a>
                ))}
              </div>
              {/* Increased font size for Help and Locate links from text-xs to text-sm */}
              <div className="hidden md:flex items-center space-x-4 text-red-600 font-semibold text-sm whitespace-nowrap">
                <a href="#" className="flex items-center space-x-1 hover:underline">
                  <LifeBuoy size={14} /><span>Help Center</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:underline">
                  <MapPin size={14} /><span>Locate us</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 max-w-[1600px] mx-auto">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 lg:h-[600px] flex flex-col-reverse lg:flex-row items-center">
            <div className="p-8 sm:p-12 lg:p-24 lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                Own your dream home, with best <span className="text-red-600">Beardev Bank Home Loans</span> rate!
              </h1>
              <p className="text-lg text-gray-600 mb-6">Interest rate now starting at 7.99%* p.a.</p>
              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg">Apply Now</button>
                <button className="text-red-600 hover:text-red-700 font-semibold py-3 px-8 rounded-full border-2 border-red-600 transition-colors">Know More</button>
              </div>
            </div>
            <div className="lg:w-1/2 h-64 sm:h-96 lg:h-full w-full">
              <img src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132414.jpg" alt="Family" className="w-full h-full object-cover" />
            </div>
          </div>

          <section className="mt-20 mb-20">
            <div className="flex flex-wrap md:flex-nowrap gap-6 mb-6">
              {firstRowCards.map((card, i) => (
                <div key={i} className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="h-36">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{card.desc}</p>
                    <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                      <span>Apply Now</span>
                      <ArrowRightCircle size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-6">
              {secondRowCards.map((card, i) => (
                <div key={i} className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="h-36">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{card.desc}</p>
                    <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                      <span>Apply Now</span>
                      <ArrowRightCircle size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="w-full md:w-2/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="h-40 sm:h-48 md:h-52 lg:h-60">
                    <img
                      src="https://raw.githubusercontent.com/mdr-001/images/main/wide-placeholder.jpg"
                      alt="Wide Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
                  <div className="h-40 sm:h-48 md:h-52 lg:h-60">
                    <img
                      src="https://raw.githubusercontent.com/mdr-001/images/main/small-placeholder.jpg"
                      alt="Small Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] text-gray-600 leading-relaxed">
                      At <span className="font-semibold">Beardev Bank</span>, we believe in the fearless trailblazers—the ones who dare to dream bigger, push boundaries, and turn challenges into opportunities. That’s why we are here—to back you with financial solutions that evolve with your needs, empowering you to chase the extraordinary. Because when you have <span className="font-semibold">Hausla</span>, anything is possible.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-[20px] font-semibold text-[#1d2939] text-center mb-6">Knowledge Hub</h2>
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 flex flex-col md:flex-row p-4 gap-4">
                  <div className="relative w-full md:w-2/3 rounded-2xl overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132522.jpg"
                      alt="Stories in focus"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
                      <h3 className="text-base font-semibold mb-2">Stories in focus</h3>
                      <p className="text-sm font-medium mb-4 leading-relaxed">
                        Browse through our specially curated collection of stories, handpicked for your reading pleasure
                      </p>
                      <a href="#" className="flex items-center space-x-1 text-sm font-medium hover:underline">
                        <span>Read more</span>
                        <ArrowRightCircle size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 p-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">Stories in focus</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2 pb-3 border-b border-gray-200">
                        <img
                          src="https://raw.githubusercontent.com/mdr-001/images/main/sabatical.jpg"
                          alt="Sabbatical"
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <span className="text-xs text-gray-800 font-medium leading-tight">How to Manage Personal Loan If You Are Planning to Take a Sabbatical</span>
                          <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                        </div>
                      </li>
                      <li className="flex items-center space-x-2 pb-3 border-b border-gray-200">
                        <img
                          src="https://raw.githubusercontent.com/mdr-001/images/main/benefits.jpg"
                          alt="Benefits of personal loan"
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <span className="text-xs text-gray-800 font-medium leading-tight">Here are some of the Amazing Benefits of Personal Loan</span>
                          <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                        </div>
                      </li>
                      <li className="flex items-center space-x-2 pb-3 border-b border-gray-200">
                        <img
                          src="https://raw.githubusercontent.com/mdr-001/images/main/calculator.jpg"
                          alt="Loan calculator"
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <span className="text-xs text-gray-800 font-medium leading-tight">4 Major benefits of using online personal loan EMI calculators over manual computations</span>
                          <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                        </div>
                      </li>
                      <li className="flex items-center space-x-2 pb-3 border-b border-gray-200">
                        <img
                          src="https://raw.githubusercontent.com/mdr-001/images/main/self-employed.jpg"
                          alt="Self-employed"
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <span className="text-xs text-gray-800 font-medium leading-tight">How to Build a Strong Credit Profile as a Self-Employed Individual</span>
                          <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                        </div>
                      </li>
                      <li className="flex items-center space-x-2 pb-3 border-b-0">
                        <img
                          src="https://raw.githubusercontent.com/mdr-001/images/main/financial-setback.jpg"
                          alt="Financial setback"
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <span className="text-xs text-gray-800 font-medium leading-tight">Steps to Rebuild Credit After a Financial Setback</span>
                          <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                        </div>
                      </li>
                    </ul>
                    <div className="mt-2 text-center">
                      <a href="#" className="text-red-600 font-semibold text-xs hover:underline">
                        View all stories
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="my-20">
            <h2 className="text-[20px] font-semibold text-[#1d2939] text-center mb-6">
              What's New at Beardev Bank
            </h2>
            <div className="flex flex-wrap md:flex-nowrap gap-6">
              {[
                { title: "New Instant Loan Approval", desc: "Get your loan approved in minutes with our new digital process.", date: "Aug 25, 2025", icon: <DollarSign size={24} className="text-red-600" /> },
                { title: "Financial Literacy Workshops", desc: "Join our free workshops to learn how to manage your finances better.", date: "Aug 20, 2025", icon: <BarChart size={24} className="text-red-600" /> },
                { title: "Introducing the Titanium Credit Card", desc: "Enjoy exclusive benefits and rewards with our new premium credit card.", date: "Aug 18, 2025", icon: <CreditCard size={24} className="text-red-600" /> },
              ].map((item, i) => (
                <div key={i} className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-6 flex flex-col items-start space-y-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 flex-grow">{item.desc}</p>
                  <div className="text-xs text-gray-400 mt-2">{item.date}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="my-20">
            <h2 className="text-[20px] font-semibold text-[#1d2939] text-center mb-6">
              Hear from Our Happy Customers
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              {[
                { name: "Jane Doe", quote: "Beardev Bank's customer service is top-notch. They helped me secure my home loan with an incredibly smooth process. Highly recommended!", avatar: "https://placehold.co/80x80/EFEFEF/9C9C9C?text=JD" },
                { name: "John Smith", quote: "The online banking platform is so easy to use. I can manage all my accounts, investments, and credit cards from one place. It has truly simplified my financial life.", avatar: "https://placehold.co/80x80/EFEFEF/9C9C9C?text=JS" },
                { name: "Emily White", quote: "I've been a customer for years and have always been impressed by their commitment to security and providing a seamless experience. They're a bank you can trust.", avatar: "https://placehold.co/80x80/EFEFEF/9C9C90?text=EW" },
              ].map((testimonial, i) => (
                <div key={i} className="w-full md:w-1/3 bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center flex flex-col items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mb-4" />
                  <p className="text-sm italic text-gray-600 mb-4 flex-grow">"{testimonial.quote}"</p>
                  <div className="font-semibold text-red-600">— {testimonial.name}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="my-20">
            <div className="flex flex-wrap md:flex-nowrap gap-6">
              {lastThreeImages.map((item, i) => (
                <div key={i} className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
                  <div className="h-40">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
                    <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium mt-auto">
                      <span>{item.linkText}</span>
                      <ArrowRightCircle size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="my-20">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Need Help?</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {helpOptions.map((option, i) => (
                <div key={i} className="bg-white rounded-lg p-2 shadow-md text-center w-[18%] border border-gray-200 flex flex-col items-center justify-between">
                  {/* Icon and title on top */}
                  <div className="flex flex-col items-center">
                    {option.icon}
                    <h3 className="text-[10px] font-semibold text-gray-800 mt-1">{option.title}</h3>
                  </div>
                  {/* Description at the bottom */}
                  <p className="text-[8px] text-gray-500 mt-1">{option.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="my-20 bg-white rounded-xl shadow-lg border border-gray-200 p-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Ready to take the next step?</h2>
              <p className="text-md text-gray-600">Our team is here to help you with your financial needs. Get in touch with us today!</p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg">
                Contact Us
              </button>
            </div>
          </section>

          {/* New content from the image */}
          <div className="bg-[#f0f0f0] -mx-4 sm:-mx-6 lg:-mx-16 xl:-mx-20 text-gray-700">
            <div className="max-w-[1600px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-gray-600">
                {/* All items from the previous version have been removed as per the request. */}
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-[#f2f2f2] -mx-4 sm:-mx-6 lg:-mx-16 xl:-mx-20 text-gray-700">
          <div className="max-w-[1600px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">About us</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Our Businesses</a></li>
                  <li><a href="#" className="hover:underline">Media Centre</a></li>
                  <li><a href="#" className="hover:underline">Careers</a></li>
                  <li><a href="#" className="hover:underline">DIFC Branch</a></li>
                  <li><a href="#" className="hover:underline">GIFT Branch</a></li>
                  <li><a href="#" className="hover:underline">KMFSL</a></li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Customer Service</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Important Information</a></li>
                  <li><a href="#" className="hover:underline">Write to us</a></li>
                  <li><a href="#" className="hover:underline">Grievance Redressal</a></li>
                  <li><a href="#" className="hover:underline">Report Fraud / Raise Dispute</a></li>
                  <li><a href="#" className="hover:underline">Banking Ombudsman</a></li>
                  <li><a href="#" className="hover:underline">Download Forms</a></li>
                  <li><a href="#" className="hover:underline">Service Requests</a></li>
                  <li><a href="#" className="hover:underline">Track Application Status</a></li>
                  <li><a href="#" className="hover:underline">Tips on Safe Banking</a></li>
                  <li><a href="#" className="hover:underline">Doorstep Banking Service</a></li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Calculators & Tools</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Personal Loan EMI Calculator</a></li>
                  <li><a href="#" className="hover:underline">Car Loan EMI Calculator</a></li>
                  <li><a href="#" className="hover:underline">Home Loan EMI Calculator</a></li>
                  <li><a href="#" className="hover:underline">Fixed Deposit Calculator</a></li>
                  <li><a href="#" className="hover:underline">Recurring Deposit Calculator</a></li>
                  <li><a href="#" className="hover:underline">Life Insurance Calculator</a></li>
                  <li><a href="#" className="hover:underline">Business Loan EMI Calculator</a></li>
                  <li><a href="#" className="hover:underline">Retirement Calculator</a></li>
                  <li><a href="#" className="hover:underline">Simple Interest Calculator</a></li>
                  <li><a href="#" className="hover:underline">Compound Interest Calculator</a></li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Digital Banking</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Ways to Bank</a></li>
                  <li><a href="#" className="hover:underline">Insta Services</a></li>
                  <li><a href="#" className="hover:underline">Business & Fintech</a></li>
                  <li><a href="#" className="hover:underline">Open Banking</a></li>
                </ul>
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-900">Self Help</h4>
                  <ul className="space-y-1 mt-2">
                    <li><a href="#" className="hover:underline">Help Center</a></li>
                  </ul>
                </div>
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-900">Trending Products</h4>
                  <ul className="space-y-1 mt-2">
                    <li><a href="#" className="hover:underline">Credit Cards</a></li>
                    <li><a href="#" className="hover:underline">811 Digital Savings Bank Account</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-sm font-semibold text-gray-900">Connect with Us</span>
                <div className="flex space-x-2">
                  <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-red-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.234 0C.72 3.447 0 4.296 0 6.136v9.728c0 1.84 0.72 2.689 4.381 2.952 3.602.246 11.63.245 15.233 0 3.66-.263 4.381-1.112 4.381-2.952V6.136c0-1.84-.72-2.689-4.381-2.952zm-10.744 10.74l-.004-.002-4.088-2.361-4.088 2.36-.002-.001-.005.003-3.08-1.78.006-.003.001-.001-.002-.001V5.539l.001-.001.002-.001.001-.001 2.973 1.716 3.08-1.78.001-.001.002-.001.001-.001 4.09 2.361 4.088-2.361.001.001.002.001.002.001 3.08 1.78-.002.001-.001.001-.001.001V12.28l.001.001.002.001.001.001-2.972-1.716-3.08 1.78-.001.001-.002.001-.001.001-4.09-2.361-4.088 2.361zM9.99 12.28l-2.974 1.717V8.563L9.99 10.28z"></path></svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-red-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zM.002 24h4.965v-16h-4.965v16zM24 12.5c0-4.757-3.238-7.394-7.461-7.394-3.097 0-4.609 1.547-5.32 2.653V5.503h-4.966V24h4.965V15.772c0-2.31 1.488-4.008 3.546-4.008 2.059 0 3.737 1.761 3.737 4.008V24H24V12.5z"></path></svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-sm font-semibold text-gray-900">Install the Beardev Bank App</span>
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" /></a>
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" /></a>
              </div>
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img src="https://raw.githubusercontent.com/mdr-001/images/main/enTrust.jpg" alt="Entrust Secured" className="h-8" />
                <img src="https://raw.githubusercontent.com/mdr-001/images/main/verisign.jpg" alt="VeriSign" className="h-8" />
              </div>
            </div>

            <div className="text-center mt-6 text-[10px] text-gray-500">
              <p>&copy; 2025 Beardev Bank. All rights reserved.</p>
              <div className="mt-2 flex justify-center space-x-4">
                <a href="#" className="hover:underline">Disclaimer</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
