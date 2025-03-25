export const calculatePayment = (amount, term) => {
  if (!amount || !term) {
    return 0;
  }

  const monthlyPayment = amount / term;
  return Math.round(monthlyPayment);
};

export const getCalculatedPayment = (amount, term, paymentPeriod) => {
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount <= 0 || !term) {
    return 0;
  }
  const monthlyPayment = calculatePayment(parsedAmount, Number(term));
  return paymentPeriod === 'monthly' ? monthlyPayment : monthlyPayment * 12;
};

export const getIsPaymentSectionVisible = (isCalculated, calculatedPayment) => {
  return isCalculated && calculatedPayment > 0;
};

export const handleCalc = (data, setValue) => {
  if (!data.amount || !data.term) {
    return;
  }
  setValue('isCalculated', true);
};
