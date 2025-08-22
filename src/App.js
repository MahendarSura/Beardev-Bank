<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Axis Bank Style Beardev Bank</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Axis Bank primary red */
    .text-axisRed { color: #E2001A; }
    .hover\:text-axisRed:hover { color: #E2001A; }
    .bg-axisRed { background-color: #E2001A; }
    .hover\:bg-axisRed:hover { background-color: #E2001A; }
    
    /* Custom font: Roboto */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
    body {
      font-family: 'Roboto', sans-serif;
    }
  </style>
</head>
<body class="bg-white">

  <div class="max-w-7xl mx-auto px-6 py-12">

    <!-- NAVBAR -->
    <nav class="flex items-center justify-between mb-12">
      <div class="text-5xl font-extrabold text-axisRed">
        Beardev Bank
      </div>
      <ul class="hidden md:flex space-x-10 font-semibold text-gray-700">
        <li class="hover:text-axisRed cursor-pointer">Explore products</li>
        <li class="hover:text-axisRed cursor-pointer">Grab Deal</li>
        <li class="hover:text-axisRed cursor-pointer">Make Payments</li>
        <li class="hover:text-axisRed cursor-pointer">Bank Smart</li>
        <li class="hover:text-axisRed cursor-pointer">Accounts</li>
        <li class="hover:text-axisRed cursor-pointer">Deposits</li>
        <li class="hover:text-axisRed cursor-pointer">Cards</li>
        <li class="hover:text-axisRed cursor-pointer">Loans</li>
        <li class="hover:text-axisRed cursor-pointer">Investments</li>
        <li class="hover:text-axisRed cursor-pointer">Insurance</li>
        <li class="hover:text-axisRed cursor-pointer">Special Services</li>
        <li class="hover:text-axisRed cursor-pointer">Knowledge Hub</li>
      </ul>
      <div class="text-axisRed font-semibold cursor-pointer hover:underline">
        Login/Signup
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="relative h-[480px] md:h-[600px] bg-gradient-to-r from-red-700 to-red-600 flex items-center px-10 text-white mb-16">
      <div class="max-w-3xl space-y-6">
        <h1 class="text-5xl font-extrabold">Reimagining Banking for You</h1>
        <p class="text-xl max-w-xl">
          Seamless, secure, and personalized banking experience at Beardev-Bank. Explore our services today.
        </p>
        <div class="flex space-x-6">
          <button class="bg-white text-axisRed font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
            Open an Account
          </button>
          <button class="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-axisRed transition">
            Learn More
          </button>
        </div>
      </div>
      <div class="flex-1 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1515165562835-c48f9bb46a3d?auto=format&fit=crop&w=800&q=80"
          alt="Digital Banking"
          class="rounded shadow-xl"
        />
      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section class="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
      
      <div class="bg-white shadow-lg rounded p-6 flex flex-col items-start hover:shadow-xl cursor-pointer transition">
        <div class="text-4xl mb-4 text-axisRed">🏦</div>
        <h3 class="text-2xl font-bold mb-2 text-axisRed">Personal Banking</h3>
        <p>Savings accounts, checking accounts, debit cards &amp; more.</p>
      </div>

      <div class="bg-white shadow-lg rounded p-6 flex flex-col items-start hover:shadow-xl cursor-pointer transition">
        <div class="text-4xl mb-4 text-axisRed">💳</div>
        <h3 class="text-2xl font-bold mb-2 text-axisRed">Loans &amp; Credit</h3>
        <p>Home loans, personal loans &amp; credit cards with low rates.</p>
      </div>

      <div class="bg-white shadow-lg rounded p-6 flex flex-col items-start hover:shadow-xl cursor-pointer transition">
        <div class="text-4xl mb-4 text-axisRed">📈</div>
        <h3 class="text-2xl font-bold mb-2 text-axisRed">Investments</h3>
        <p>Mutual funds, fixed deposits &amp; retirement plans tailored for you.</p>
      </div>

      <div class="bg-white shadow-lg rounded p-6 flex flex-col items-start hover:shadow-xl cursor-pointer transition">
        <div class="text-4xl mb-4 text-axisRed">📱</div>
        <h3 class="text-2xl font-bold mb-2 text-axisRed">Digital Banking</h3>
        <p>Manage your accounts &amp; payments on the go with Beardev mobile app.</p>
      </div>

    </section>

    <!-- OFFERS SECTION -->
    <section class="bg-gray-50 py-20 px-10">
      <div class="max-w-7xl mx-auto text-center space-y-8">
        <h2 class="text-4xl font-extrabold text-axisRed">Explore Our Latest Offers</h2>
        <p class="text-lg max-w-3xl mx-auto">
          Discover exciting products and services to help you achieve your financial goals faster.
        </p>

        <div class="mt-12 grid md:grid-cols-3 gap-12">

          <div class="bg-white rounded shadow hover:shadow-lg cursor-pointer overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=60" alt="Zero Processing Fee on Home Loans" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-2 text-axisRed">Zero Processing Fee on Home Loans</h3>
              <p>Apply now &amp; save up to ₹10,000.</p>
            </div>
          </div>

          <div class="bg-white rounded shadow hover:shadow-lg cursor-pointer overflow-hidden">
            <img src="https://images.unsplash.com/photo-1495121605193-b116b5b09e21?auto=format&fit=crop&w=400&q=60" alt="Earn More with Fixed Deposits" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-2 text-axisRed">Earn More with Fixed Deposits</h3>
              <p>Attractively higher interest rates on FD.</p>
            </div>
          </div>

          <div class="bg-white rounded shadow hover:shadow-lg cursor-pointer overflow-hidden">
            <img src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=400&q=60" alt="Instant Personal Loans" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-2 text-axisRed">Instant Personal Loans</h3>
              <p>Get funds within 24 hours at competitive rates.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="bg-gray-50 py-20 px-10">
      <div class="max-w-5xl mx-auto text-center space-y-10">
        <h2 class="text-4xl font-extrabold text-axisRed">What Our Customers Say</h2>

        <div class="space-y-10">

          <div class="bg-white p-8 rounded shadow-lg max-w-xl mx-auto text-left">
            <div class="flex items-center mb-4 space-x-4">
              <img src="https://randomuser.me/api/portraits/men/32


    <!-- TESTIMONIALS SECTION -->
    <section class="bg-rose-50 py-20 px-10">
      <div class="max-w-5xl mx-auto text-center space-y-10">
        <h2 class="text-4xl font-extrabold text-royalMaroon">What Our Customers Say</h2>

        <div class="space-y-10">

          <div class="bg-white p-8 rounded shadow-lg max-w-xl mx-auto text-left">
            <div class="flex items-center mb-4 space-x-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rajesh Kumar" class="w-16 h-16 rounded-full object-cover" />
              <h3 class="text-xl font-semibold text-royalMaroon">Rajesh Kumar</h3>
            </div>
            <p class="italic text-black">"Beardev-Bank has transformed how I manage my finances. Their app is super easy and customer support is fantastic!"</p>
          </div>

          <div class="bg-white p-8 rounded shadow-lg max-w-xl mx-auto text-left">
            <div class="flex items-center mb-4 space-x-4">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sneha Patil" class="w-16 h-16 rounded-full object-cover" />
              <h3 class="text-xl font-semibold text-royalMaroon">Sneha Patil</h3>
            </div>
            <p class="italic text-black">"The loan process was smooth and quick. I got my funds in less than 24 hours!"</p>
          </div>

          <div class="bg-white p-8 rounded shadow-lg max-w-xl mx-auto text-left">
            <div class="flex items-center mb-4 space-x-4">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Aditya Sharma" class="w-16 h-16 rounded-full object-cover" />
              <h3 class="text-xl font-semibold text-royalMaroon">Aditya Sharma</h3>
            </div>
            <p class="italic text-black">"Investments made simple! The advice and tools helped me grow my portfolio confidently."</p>
          </div>

        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-rose-900 text-white py-12 mt-24">
      <div class="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Beardev-Bank</h3>
          <p>
            Empowering your financial journey with innovative banking solutions designed for the modern world.
          </p>
        </div>
        <div>
          <h4 class="font-semibold mb-3">Quick Links</h4>
          <ul>
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">Accounts</a></li>
            <li><a href="#" class="hover:underline">Loans</a></li>
            <li><a href="#" class="hover:underline">Investments</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-3">Services</h4>
          <ul>
            <li><a href="#" class="hover:underline">Savings Account</a></li>
            <li><a href="#" class="hover:underline">Credit Cards</a></li>
            <li><a href="#" class="hover:underline">Personal Loans</a></li>
            <li><a href="#" class="hover:underline">Fixed Deposits</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-3">Contact</h4>
          <p>Email: support@beardevbank.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Address: 123 Hightech City, Mancherial</p>
        </div>
      </div>
      <div class="mt-12 text-center text-sm text-gray-300">
        © 2025 Beardev-Bank. All rights reserved.
      </div>
    </footer>

  </div>

</body>
</html>
