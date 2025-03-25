export const calculatePayment = (amount, term) => {
  if (!amount || !term) {
    return 0;
  }

  const monthlyPayment = amount / term;
  return Math.round(monthlyPayment);
};

export const getCalculatedPayment = (amount, term) => {
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount <= 0 || !term) {
    return 0;
  }
  const monthlyPayment = calculatePayment(parsedAmount, Number(term));
  return {
    monthly: monthlyPayment,
    yearly: monthlyPayment * 12,
  };
};
