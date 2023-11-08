const products = [
  { title: 'high-back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  ];
const companies = products.map((product)=> product.company);
const uniquecompanies = new Set(companies);
console.log(uniquecompanies);
const newcomp = ['abc', ...uniquecompanies];
console.log(newcomp);

