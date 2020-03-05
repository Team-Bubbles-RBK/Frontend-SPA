import React from 'react';
import Chart from 'chart.js';
import { Polar } from 'react-chartjs-2';
import HttpRequest2 from '../helpers/httpHelperForSentiments'



class PolarArea extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState =  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    this.backgroundColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ];
    this.borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ];
    this.labels = ["Excited”, “Cheerful”, “Good”, “Satisfied”, “Tender”, “Neutral”, “Dissatisfied”, “Unhappy”, “Distressed”,”Sorrowful”, “Hurt" ];
    this.options = {scales: {yAxes: [{ticks: {beginAtZero: true}}]}}
    this.state = {
        data: {
            labels: this.labels,
            datasets: [{
                label: 'Long-term Average Sentimental State',
                data: this.defaultState,
                backgroundColor: this.backgroundColor ,
                borderColor: this.borderColor,
                borderWidth: 1
            }]
        },
        options: this.options
    }
  }

  update = () => {
    return HttpRequest('POST', "/getStatus", {})
  }

  componentDidMount() {
    this.update().then((results) => {
      let obj = {};
      ["5","4","3","2","1","0","-1","-2", "-3", "-4", "-5"].forEach((val) => {
        if (!results[0][val]) {
          results[0][val] = 0;
        }
        obj[val] = results[0][val]
      })
      let arr = Object.values(obj)
      var current = Object.create(this.state);
      current.data.datasets[0].data = arr
      this.setState(current)
    });
  }

  render() {
    return ( <Polar data={this.state.data} options={{maintainAspectRatio: false }} /> );
  }

}

export default PolarArea


// componentDidMount() {
//       var node = this.element;
// this.chartInstance = new Chart(node, {
    //   type: 'polarArea',
    //   data: this.state
    //   options: this.options,
    //   plugins
    // });
//
//   }
//   render() {
//       return (
//           <canvas  ref={this.ref} height={100} width={100}id={"polar"}></canvas>
//       );
//   }
