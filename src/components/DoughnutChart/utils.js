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
