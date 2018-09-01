const data = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  datasets: [
    {
      label: '수익',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(72,166,242,0.6)',
      borderColor: 'rgba(72,166,242,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(72,166,242,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(72,166,242,1)',
      pointHoverBorderColor: 'rgba(72,166,242,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [60,60,70,75,75,75,75,80,80,0,0,0]
    },
    {
      label: '지출',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(239, 141, 67,0.6)',
      borderColor: 'rgba(239, 141, 67,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(239, 141, 67,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(239, 141, 67,1)',
      pointHoverBorderColor: 'rgba(239, 141, 67,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20,30,80,70,50,50,75,30,60,0,0,0]
    }
  ]
};

export {
  data,
}
