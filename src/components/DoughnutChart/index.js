import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTransactionContext } from '../../context/globalState';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ filteredTransactions }) => {
  const {
    incomeCategories,
    expenseCategories,
    filters,
  } = useTransactionContext();

  const incomeColors = ['#00955B', '#007865','#D5FB00', '#00B14C', '#00CC3A','#85E521'];

  const expenseColors = ['#AD48A3', '#882380', '#5f195a', '#FFB4FF',  '#F98FEC', '#D36CC7'];

  const categories = filters.type === 'Income' ? incomeCategories : expenseCategories;
  const colors = filters.type === 'Income' ? incomeColors : expenseColors;

  const categoryAmounts = {};
  const total = filteredTransactions.reduce((sum, item) => sum += item.amount, 0).toFixed(2);

  if (filters.category === 'All') {
    categories.forEach(category => {
      const amount = filteredTransactions.reduce((sum, item) => sum += (item.category === category ? item.amount : 0), 0);
      amount && (categoryAmounts[category] = amount);
    });
  } else {
    const amount = filteredTransactions.reduce((sum, item) => sum += (item.category === filters.category ? item.amount : 0), 0);
    categoryAmounts[filters.category] = amount;
  }

  const data = {
    labels: Object.keys(categoryAmounts),
    datasets: [{
      data: Object.values(categoryAmounts),
      backgroundColor: colors,
      hoverBackgroundColor: colors,
      cutout: '55%',
    }],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      centerText: {
        display: true,
        text: '$' + total,
      },
    },
  };

  const drawCenterText = (chart) => {
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
  }

  const centerText = {
    id: 'centerText',
    beforeDraw(chart) {
      const {options: {plugins: {centerText}}} = chart;
      if (centerText.display !== null &&
        typeof centerText.display !== 'undefined' &&
        centerText.display) {
          drawCenterText(chart);
      }
    },
  };

  const plugins = [centerText];

  return <Doughnut data={data} options={options} plugins={plugins} />;
};

export default DoughnutChart;
