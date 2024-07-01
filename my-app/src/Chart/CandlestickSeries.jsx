import { useEffect, useRef } from "react";
import {ColorType,createChart,LineStyle} from "lightweight-charts"
import Data from "../csvjson.json"
import "../App.css"
function CandlestickSeries() {
    const chartContainerRef = useRef();
    console.log(Data)

    useEffect(()=>{
           
        const initialData = [
             { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
             { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, 
             { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, 
             { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, 
             { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, 
             { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, 
             { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, 
             { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, 
             { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, 
             { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }
            ];


        const lineData= initialData.map(item => ({
            time:item.time ,
             value:(item.high+item.close)/2,
        }))
  
            const chart = createChart(chartContainerRef.current);

            chart.applyOptions(
                {
               
                    layout: {
                        background: { color: '#222' },
                        textColor: '#DDD',
                    },
                    grid: {
                        vertLines: { color: '#444' },
                        horzLines: { color: '#444' },
                    },
                    crosshair: {
                        // Change mode from default 'magnet' to 'normal'.
                        // Allows the crosshair to move freely without snapping to datapoints
                       
                        //mode: LightweightCharts.CrosshairMode.Normal,
                
                        // Vertical crosshair line (showing Date in Label)
                        vertLine: {
                            width: 8,
                            color: '#C3BCDB44',
                            style: LineStyle.Solid,
                            labelBackgroundColor: '#9B7DFF',
                        },
                
                        // Horizontal crosshair line (showing Price in Label)
                        horzLine: {
                            color: '#9B7DFF',
                            labelBackgroundColor: '#9B7DFF',
                        },
                    },
                  width: chartContainerRef.current.clientwidth,
                  height:500,
                }
            )
 
           // chart.timeScale().fitContent();
             
            const newSeries = chart.addCandlestickSeries()
            const lineseries = chart.addLineSeries();

            newSeries.setData(initialData)
            lineseries.setData(lineData)

            newSeries.applyOptions(
                {
                    upColor: '#26a69a',
                     downColor: '#ef5350',
                      borderVisible: true, 
                      wickUpColor: '#26a69a', 
                      wickDownColor: '#ef5350',
                      priceScaleId:"right" 
      
                  }
            )

            lineseries.applyOptions({
                lineWidth:1,
                priceScaleId:"left"
            })

            chart.timeScale().applyOptions({
                borderColor: 'red',
                barSpacing:15,
                minBarSpacing:5,
                //fixLeftEdge:true,
                timeVisible:true,
            });

            chart.priceScale("right").applyOptions({
                borderColor: '#71649C',
                visible:true ,
            });
                
            chart.priceScale("left").applyOptions({
                borderColor: '#71649C',
                visible:true,
               //invertScale:true,
                //autoScale:false
            })
            const handleResize = () =>{
                chart.applyOptions({
                    width:chartContainerRef.current.clientwidth,
                })
            }
               
            window.addEventListener("resize",handleResize)
  
            return () => {
                chart.remove();
                window.removeEventListener("resize",handleResize)
            }
    },[])

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mt-20" ref={chartContainerRef} >

        <div>

        </div>
    </div>
  )
      
  

}

export default CandlestickSeries
