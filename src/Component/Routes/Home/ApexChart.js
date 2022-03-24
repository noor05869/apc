import React from 'react';
import ReactApexChart from 'react-apexcharts'
import $ from "jquery";


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Abl',
                data: []
            }],
            labels: ['ABL Stock Fund', 'Second Label'],
          
            
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    labels: {
                        formatter: function (value, timestamp) {
                           
                            let dte =new Date(timestamp)
                          
                            const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
                            const month = monthNames[dte.getMonth()];
                            const day = String(dte.getDate()).padStart(2, '0');
                            const year = dte.getFullYear();
                            const output = day  + '\n'+ month + '\n' + year;
                           
                          return  output// The formatter function overrides format property
                        }, 
                      }, 
                    categories: []
                },
                legend: {
                    show: true,
                    position: "bottom",
                    showForSingleSeries:true,
                   
                  },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                  
                },
                colors: ["#FF1654", "#247BA0"],
                fill: false,
                grid: {
                    show: true,
                },
                chart: {
                    zoom: {
                        enabled: false,
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
        };
    }
    componentDidUpdate(prevProps) {

        if (this.props.seriesResult != prevProps.seriesResult) {
            let seriesData = []
            let seriesLabels = []
            let categories = this.props.seriesResult[0].firstData
           
            this.props.seriesResult.forEach((element, index) => {
                let temp = {
                    data: element.secondData,
                    name: element.title
                }
                // console.log(categories.length)
                // console.log(element.firstData.length)
                if (categories.length < element.firstData.length) {
                    // alert(1)
                    categories = element.firstData
                }


                // debugger
                seriesData.push(temp)
                seriesLabels.push(element.title)
                if (index == this.props.seriesResult.length - 1) {
                    // console.log('seriesData', this.props)


                    var b = {
                        ...this.state.options,
                        xaxis: {
                            ...this.state.options.xaxis,
                            categories: categories
                        }
                    }
               
                    this.setState({
                        series: seriesData,
                        options: b
                    })
                }

            });


            // this.setState({  })
            // console.log(this.props)
            // this.setState({
            //     sD: this.props.ScndData
            // });
        }
    }

    componentDidMount() {
    }

    // getWidth(){
    //     let width = document.getElementById('chart').offsetWidth;
    //     this.setState({
    //         width : `${width}px`
    //     })
    // }



    render() {
        
        return (
            <div id="LineChart" >
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350}
                />
            </div>


        );
    }
}


export default ApexChart;