import React from 'react';
import ReactApexChart from 'react-apexcharts'


class ApexTreeChart extends React.Component {
    constructor(props) {
        super(props);
const term=[  '#31C48D',
'#E8386A',
'#3F83F8',
'#3F83F8',
'#E5386A',]
const national=[
    '#31C48D',
      '#E5386A',
                    '#E5386A',
                    
                    '#3F83F8',

                    '#3F83F8',
                    '#E5386A',

]
        this.state = {

            series: [
                {
                    data: this.props.Data
                }
            ],
            options: {
                legend: {
                    show: false
                },
                chart: {
                    height: 350,
                    type: 'treemap'
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    formatter: function (text, op) {
                        console.log('op ============',op.value)
                        return [text, (op.value).toFixed(2)+'%']
                    },
                    offsetY: -4
                },
                tooltip: {
                 
                        
                          y: {
                            formatter: function(y) {
                                console.log( y)
                                if(typeof y !== "undefined") {
                                    return  y.toFixed(0) + " %";
                                  }
                                  return y;
                                  
                            }}
                },
                colors: this.state?.series?.length>5?national:term,
                  plotOptions: {
                    treemap: {
                      distributed: true,
                      enableShades: false
                    }
                  }
            },


        };
    }

    componentDidUpdate(prevProps) {
console.log("seeeeeeeeeeeeerrrrrrrrrrrrrreeeeeee",this.props.Data )
        if (this.props.Data != prevProps.Data) {

            let seriesData = [
                {
                    data: this.props.Data
                }
            ]
            this.setState({
                series: seriesData
            })
        }

    }


    render() {
        return (

            <div id="Barchart">

                <ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={550} />
            </div>
        )
    }
}

export default ApexTreeChart;