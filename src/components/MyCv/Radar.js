import React, {useState} from "react";
import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

function RadarPage() {
    const[state] = useState({
        dataRadar: {
            labels: ["Html", "Css", "Javascript", "React", "Node", "Php","Mysql"],
            datasets: [
                {
                label: "",
                backgroundColor: "rgba(257, 127, 0, 0.5)",
                boderColor: "rgba(257, 127, 0)",
                data: [75, 75, 70, 70, 60, 50,50],
                }
            ],
            },
            options: {
                scale: {
                    ticks: {max: 100, min:0, display:false}
                },
                responsive: false,
                legend: { display: false },
                tooltips:{
                    enabled:false
                }
            }
    })
    
    return (
        <MDBContainer className="d-flex justify-content-center align-items-center">
            <Radar data={state.dataRadar} options={state.options} width={300} height={300}/>
        </MDBContainer>
    )
}

export default RadarPage
