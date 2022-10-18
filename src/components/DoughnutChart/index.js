import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTransactionContext } from '../../context/globalState';
import { drawCenterText, gatherGraphData } from './utils';
import { useTheme } from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ filteredTransactions }) => {
  const {
    incomeCategories,
    expenseCategories,
    filters,
  } = useTransactionContext();

  const theme = useTheme();

  const categories = filters.category === 'All'
    ? (filters.type === 'Income' ? incomeCategories : expenseCategories)
    : [filters.category];

  let colors = filters.type === 'Income' ? theme.incomeColors : theme.expenseColors;
  if (filters.category !== 'All') {
    colors = [colors[3]];
  }

  const total = filteredTransactions.reduce((sum, item) => sum += item.amount, 0).toFixed(2);
  const categoryAmounts = gatherGraphData(filteredTransactions, categories);

  const data = {
    labels: categoryAmounts.map((item) => item.category),
    datasets: [{
      data: categoryAmounts.map((item) => item.amount),
      backgroundColor: colors,
      hoverBackgroundColor: colors,
      borderColor: theme.backgroundColor,
      hoverBorderColor: theme.backgroundColor,
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
        fontFamily: 'Rosa Sans Regular, sans-serif',
        textColor: theme.textColor,
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
