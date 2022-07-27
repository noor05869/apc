import React from 'react';
import ReactApexChart from 'react-apexcharts'


class ApexBarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: '',
                data: this.props.ScndData
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            // console.log(chart, w, e)
                        }
                    }
                },
                fill: {
                    colors: ['#ef628b', '#ef628b', '#ef628b'],
                    opacity: 0.9,
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: "vertical",
                        shadeIntensity: 0.5,
                        gradientToColors: ['#E5386A', '#E5386A', '#E5386A'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 0.7,
                        stops: [0, 95, 100],
                        colorStops: []
                    },
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '14px',
                        colors: ["#304758",],
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
                    }
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: this.props.Firstdata,
                    labels: {
                        style: {
                            fontSize: '14px',
                            fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
                        }
                    }
                }
            },

        };
    }

    componentDidUpdate(prevProps) {

        if (this.props.Firstdata != prevProps.Firstdata) {

            let seriesData = []
            let categories = this.props.Firstdata
            let temp = {
                data: this.props.ScndData
            }
            seriesData.push(temp)

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
    }


    render() {
        return (

            <div id="Barchart">

                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        )
    }
}

export default ApexBarChart;