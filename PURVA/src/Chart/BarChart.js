import React from 'react'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from "chart.js";
import { ChartJS } from 'react'
ChartJS.register(CategoryScale);
    const BarChart = () => {
        const state = {
            labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
            }]
        }
  return (
     <div>
    <Bar data={state}/>
    <p>Bar chart</p>
  </div> 
  )
}

export default BarChart;