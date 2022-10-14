import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTransactionContext } from '../../context/globalState';
import { drawCenterText } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ filteredTransactions }) => {
  const {
    incomeCategories,
    expenseCategories,
    filters,
  } = useTransactionContext();

  const incomeColors = ['#00955B', '#007865','#D5FB00', '#00B14C', '#00CC3A','#85E521'];

  const expenseColors = ['#AD48A3', '#882380', '#5f195a', '#FFB4FF',  '#F98FEC', '#D36CC7'];

  let categories = filters.category === 'All'
    ? (filters.type === 'Income' ? incomeCategories : expenseCategories)
    : [filters.category];
  const colors = filters.type === 'Income' ? incomeColors : expenseColors;

  const categoryAmounts = {};
  const total = filteredTransactions.reduce((sum, item) => sum += item.amount, 0).toFixed(2);

  categories.forEach(category => {
    const amount = filteredTransactions
      .reduce((sum, item) => sum += (item.category === category ? item.amount : 0), 0);
    amount && (categoryAmounts[category] = amount);
  });

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
      centerText: {
        display: true,
        text: '$' + total,
      },
    },
  };

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

  return <Doughnut data={data} options={options} plugins={[centerText]} />;
};

export default DoughnutChart;
