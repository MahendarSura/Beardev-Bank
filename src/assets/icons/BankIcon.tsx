import React from 'react';

const BankIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 10L12 3l9 7v11H3V10z" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

export default BankIcon;
