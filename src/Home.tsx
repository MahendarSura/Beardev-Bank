import React from 'react';
import './AxisBankOverride.css'

/* AxisBankOverride.css */

/* Fonts from Axis Bank (they use a custom font, fallback to similar) */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

:root {
  --axis-red: #c8102e;
  --axis-red-dark: #a00d27;
  --axis-grey-dark: #4b4b4b;
  --axis-grey-light: #f7f7f7;
  --axis-font-family: 'Open Sans', Arial, sans-serif;
}

/* Reset container max width similar to Axis Bank */
.max-w-7xl {
  max-width: 1280px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 40px !important;
  padding-right: 40px !important;
  font-family: var(--axis-font-family);
  color: var(--axis-grey-dark);
}

/* Axis Bank Red Text */
.text-axisRed {
  color: var(--axis-red) !important;
}

/* Axis Bank Red Background */
.bg-axisRed {
  background-color: var(--axis-red) !important;
}

/* Navbar styling */
nav {
  font-weight: 600;
  letter-spacing: 0.02em;
}

nav ul li:hover {
  color: var(--axis-red);
}

/* Buttons */
button {
  font-family: var(--axis-font-family);
  font-weight: 700;
  border-radius: 4px;
  transition: all 0.3s ease;
}

button.bg-white {
  color: var(--axis-red);
}

button.bg-white:hover {
  background-color: #f9f9f9;
}

button.border-2 {
  border-color: white;
}

button.border-2:hover {
  background-color: white;
  color: var(--axis-red);
}

/* Hero Section */
section.relative {
  font-family: var(--axis-font-family);
}

/* Cards / Services Section */
section.grid > div {
  border: 1px solid #e6e6e6;
  box-shadow: 0 0 10px rgb(200 200 200 / 0.15);
  border-radius: 8px;
  padding: 20px;
  transition: box-shadow 0.3s ease;
}

section.grid > div:hover {
  box-shadow: 0 0 20px rgb(200 0 0 / 0.4);
}

/* Footer */
footer {
  background-color: #c8102e;
  color: white;
  font-family: var(--axis-font-family);
}

footer a {
  color: white;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

/* Responsive tweaks if needed */
@media (max-width: 768px) {
  .max-w-7xl {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}

