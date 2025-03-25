export const getCalculatedPayment = (amount, term) => {
  const parsedAmount = parseFloat(amount);
  const parsedTerm = parseFloat(term);

  if (isNaN(parsedAmount) || isNaN(parsedTerm) || parsedAmount <= 0 || parsedTerm <= 0) {
    return {
      monthly: 0,
      yearly: 0,
    };
  }

  const monthlyPayment = parsedAmount / parsedTerm;

  return {
    monthly: monthlyPayment,
    yearly: monthlyPayment * 12,
  };
};

export const formatAmount = (amount) => {
  return amount.toFixed(2).toLocaleString('ru-RU');
}
