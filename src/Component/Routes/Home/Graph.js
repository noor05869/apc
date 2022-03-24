import React, { useEffect, useState } from 'react';
import getData from '../../Api/GetGraph';
import ApexChart from './ApexChart';
import StockTypes from '../Data/StockType';
import TestApexChart from './TestApexChart';
import ApexBarChart from './ApexColumnChart';
import BarChartData from '../Data/BarChartData';

const Graph = (props) => {

    const initialstate = {
        FinalFirstData: [],
        FinalScndData: [],
        Series: []
    }
    const [FormData, setFormData] = useState(initialstate);
    const { FinalFirstData, FinalScndData, Series } = FormData;

    useEffect(async () => {
        let tempResult = []
        if (props.graphDate) {


            // series.length = 0;
            // myArray.splice(0, myArray.length);
            await props.graphDate.forEach((element, index) => {

                let Firstdata = []
                let ScndData = []
                // debugger
                let dataValues = Object.values(element)[0]
                let dataKey = Object.keys(element)[0]
                if (dataKey == "kibor" || dataKey == "nationalSavings") {
                    // const date = new Date()

                    ScndData = [BarChartData.stocks[props.time], BarChartData.mutualFunds[props.time], BarChartData.deposit[props.time], BarChartData.nationalSavings[props.time]]
                    Firstdata = ['stocks', 'mutualFunds', 'deposit', 'nationalSavings']
                }
                else {

                    dataValues.map((item, index) => {

                        if (props.type == "mutualFunds") {
                            // const date = new Date(item.date)
                            Firstdata.push(
                                item.date
                            )
                            ScndData.push(parseFloat(item.nav))
                        }
                        else if (props.type == "stocks") {
                            const date = new Date(item.time)
                            const formated=new Date(item.time* 1e3).toISOString()

                            Firstdata.push(
                                formated
                            )
                            ScndData.push(parseFloat(item.close))
                        }
                        else if (props.type == "forex") {
                            // const date = new Date(item.date)

                            Firstdata.push(
                                item.date
                            )
                            ScndData.push(parseFloat(item.sell))
                        }


                        if (index == dataValues.length - 1) {
                            setFormData({
                                ...FormData,
                                FinalFirstData: Firstdata,
                                FinalScndData: ScndData
                            })
                        }

                    })
                }

                let ritem = StockTypes[props.type].find(o => o.abbr == dataKey)

                let result = {
                    firstData: Firstdata,
                    secondData: ScndData,
                    name: dataKey,
                    title: ritem ? ritem.title : dataKey
                }


                // temp.push(result)
                tempResult.push(result)
                // console.log('tempResult', tempResult)
                if (index == props.graphDate.length - 1) {

                    setFormData({
                        ...FormData,
                        Series: tempResult
                    })
                }
                // series.push(result);
            });
        }

        // // eslint-disable-next-line
    }, [props.graphDate]);


    return (
        <>
        {console.log('data is ===========>>>>>>>>>',FinalFirstData)}
        
            <ApexChart
                Firstdata={FinalFirstData}
                ScndData={FinalScndData}
                subType={props.subType}
                seriesResult={Series} />
        </>
    );
}

export default Graph;