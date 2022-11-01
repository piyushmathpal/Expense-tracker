import React from "react";
import Chartbar from'./ChartBar';
import'./Chart.css';
const Chart=(props)=>{
    const array =props.dataPoints.map((dataPoint)=>(dataPoint.value));
    const maximum =Math.max(...array);
    console.log(maximum)

    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>(
                <Chartbar
                key={dataPoint.label}
                value={dataPoint.value}
                max={maximum}
                
                label={dataPoint.label}/>
            ))

            }
        </div>
    )
}
export default Chart