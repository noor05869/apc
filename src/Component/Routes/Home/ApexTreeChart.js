import React from 'react';
import ReactApexChart from 'react-apexcharts'


class ApexTreeChart extends React.Component {
    constructor(props) {
        super(props);

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
                        return [text, (op.value).toFixed(2)+' %']
                    },
                    offsetY: -4
                },
                colors: [
                    '#E5386A',
                    '#E5386A',
                    '#E5386A',
                    '#E5386A',
                    '#3F83F8',
                    '#3F83F8',
                    '#3F83F8',
                    '#31C48D',
                  ],
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

                <ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={350} />
            </div>
        )
    }
}

export default ApexTreeChart;