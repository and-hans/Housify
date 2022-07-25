import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

type Data = {
    label: string;
    status?: number;
};

const Api: React.FC = () => {

    const [data, setData] = useState({
        label: "Graph",
    });

    useEffect( () => {
        fetch("/linereg").then((res) =>
            res.json().then( (points: Data) => {
                setData({
                    label: points.label,
                });
            })
        );
    }, []);

    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="py-3 px-5 bg-gray-50">Line Chart</div>
            <div>
                <Plot
                className="md:left-12 md:mx-80"
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {
                        x: [1, 2, 3], 
                        y: [2, 5, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'blue'}
                    }
                ]}
                layout={ {width: 700, height: 500, title: data.label } }
                />
            </div>
        </div>  
    )
}

export default Api;