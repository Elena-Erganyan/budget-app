export const gatherGraphData = (filteredTransactions, categories) => {
  const categoryAmounts = [];
  categories.forEach(category => {
    const amount = filteredTransactions
      .reduce((sum, item) => sum += (item.category === category ? item.amount : 0), 0);
    amount && categoryAmounts.push({category, amount});
  });
  categoryAmounts.sort((a, b) => a.amount - b.amount);
  return categoryAmounts;
};

export const drawCenterText = (chart) => {
  const {ctx, chartArea: {top, width, height}, options: {plugins: {centerText}}} = chart;
  ctx.save();
  const fontSize = (height / 180).toFixed(2);
  ctx.font = fontSize + "em sans-serif";
  ctx.textBaseline = "middle";
 
  const text = centerText.text;
  const textX = (width - ctx.measureText(text).width) / 2;
  const textY = top + (height / 2);
 
  ctx.fillText(text, textX, textY);
  ctx.restore();
};
