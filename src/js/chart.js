const colorSetPosit = ['#699ff1', '#dadada', '#fb6761'];
const colorSet = [
  '#699ff1',
  '#fb6761',
  '#f0f040',
  '#ffcb51',
  '#81e778',
  '#a384eb',
  '#69ecec',
  '#ffaab8',
  '#83af5a',
  '#586bd1',
  '#4dc457',
  '#bb5b5b',
  '#c559bc',
  '#ff9c2a',
  '#dadada',
];

const chartSentimentData = {
  labels: ['긍정', '중립', '부정'],
  datasets: [
    {
      label: 'SENTIMENT',
      data: [300, 50, 100],
      backgroundColor: [colorSetPosit[0], colorSetPosit[1], colorSetPosit[2]],
      hoverOffset: 4,
      datalabels: {
        color: '#fff',
      },
    },
    // {
    //   label: 'SENTIMENT',
    //   data: [300, 50, 100],
    //   backgroundColor: [colorSetPosit[0], colorSetPosit[1], colorSetPosit[2]],
    //   hoverOffset: 4,
    //   datalabels: {
    //     color: '#fff',
    //   },
    // },
    // {
    //   label: 'SENTIMENT',
    //   data: [300, 50, 100],
    //   backgroundColor: [colorSetPosit[0], colorSetPosit[1], colorSetPosit[2]],
    //   hoverOffset: 4,
    //   datalabels: {
    //     color: '#aaa',
    //   },
    // },
  ],
};

const chartSentimentConfig = {
  plugins: [ChartDataLabels],
  type: 'pie',
  data: chartSentimentData,
  options: {
    layout: {
      padding: 4,
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: function (value, context) {
          let idx = context.dataIndex;
          return `${context.chart.data.labels[idx]} ${value} 건`;
        },
        align: 'top',
      },
    },
    elements: {
      arc: {
        borderWidth: 6,
      },
    },
  },
};

const chartSentiment = new Chart(
  document.getElementById('chartSentiment'),
  chartSentimentConfig
);
