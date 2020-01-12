import React from 'react';
import Chart from 'chart.js';
import { Polar } from 'react-chartjs-2';
import axios from 'axios';



class PolarArea extends React.Component {
  constructor(props) {
    super(props);
    this.chartInstance = undefined;
    this.state = {
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [21, 13, 8, 5, 3, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {scales: {yAxes: [{ticks: {beginAtZero: true}}]}}
    }
  }


  update = () => {
    return axios({
      method: 'POST',
      url: 'http://localhost:1234/getStatus',
      data: {
        id : this.state.id
      }
    });
  }

  componentDidMount() {
    // this.update().then((results) => {
    // var current = Object.create(this.state);
    // var filteredResults = current.data.datasets.data
    //   Alert(results)
    //   //this.setState(current)
    // });
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
