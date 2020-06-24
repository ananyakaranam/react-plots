import React from "react";
import {LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid} from "recharts";
import ReactDOM from 'react-dom';
import data from "./website_Maharashtra_est.json";


export default class App extends React.Component {
  render(){
    return (
    	<LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Rt" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    );
   }
}


ReactDOM.render(
  <App />,
  document.getElementById('container')
);

