
// -- alert banner -- //
let primaryColorTraffic = '#6900004d';
let primaryColor = '#690000';
let tabletColor = '#78CF82';
let phoneColor = '#ff6600cc';


// -- charts 

let trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
  labels: [' ', '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
  datasets: [{
    data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000,1500],
    backgroundColor: primaryColorTraffic,
    borderWidth: 1,
    lineTension: 0,
  }]
}

let trafficOptions = {
  aspectRation: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend: {
    display: false
  }
}

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

// -- Bar Graph -- //

const dailyCanvas = document.getElementById('daily-chart');

// -- data for daily traffic bar graph -- //
const dailyData = { 
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: primaryColor,
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
}

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// -- doughnut chart -- //

const mobileCanvas = document.getElementById('mobile-chart')

const mobileData = {
  labels: ['Desktop', 'Tablet', 'Phones'],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      primaryColor,
      tabletColor,
      phoneColor
    ]
  }]
};

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

