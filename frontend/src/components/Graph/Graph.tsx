import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

type Data = {
    label: string;
    status?: number;
};

const Api: React.FC = () => {

    const [data, setData] = useState({
        label: "Line Chart",
    });

    useEffect( () => {
        fetch("/random_forest").then((res) =>
            res.json().then( (points: Data) => {
                setData({
                    label: points.label,
                });
            })
        );
    }, []);
    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="py-3 px-5 bg-gray-50">{data.label} </div>
            <div>
                <Plot
                className="md:left-12 md:mx-80"
                data={[
                    {
                        x: [2018, 2017, 2016, 2015, 2014, 2013, 2012],
                        y: [
                            95600, 90600, 86400, 87700,
                            86700, 91400, 88100, 83300,
                            85600, 82300, 82300
                        ],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                ]}
                layout={ {
                    width: 700, 
                    height: 500, 
                    title: "Toronto Average Income Growth",
                    yaxis: {
                        title: {
                            text: "Average Income", 
                            font: {
                                family:"Courier New, monospace", 
                                size:18, 
                                color: '#7f7f7f'
                            }
                        }
                    },
                    xaxis: {
                        title: {
                            text: "Year", 
                            font: {
                                family:"Courier New, monospace", 
                                size:18, 
                                color: '#7f7f7f'
                            }
                        }
                    }
                  } 
                }
                />
            </div>
        </div>  
    )
}

export default Api;