import axios from 'axios'
import moment from 'moment';
class getData {
    constructor() {
        this.result = [];
        this.state = {
            url: `https://api.capitalstake.com/2.0/`,
            url2: `http://3.0.95.68:8000/`,
            url3: 'http://52.76.9.188:8000/2.0/',
            baseUrl: 'https://staticapis-staging.nextventures.com.pk/v1/'
        }
    }

    getIntervals = (intervalmonths) => {
        var currentMonth = (new Date()).getMonth()
        var moment = require('moment')
        var yyyy = (new Date()).getFullYear()
        console.log("yyyy",yyyy)
        var start = (Math.floor(currentMonth / 3) * 3) + 1;
        console.log("start",start)

        var end = start + 3;
        console.log("end",end)
        var startDate = new Date(start + '-01-' + yyyy);
        var endDate = end > 12 ? new Date('01-01-' + (yyyy + 1)) : new Date(end + '-01-' + (yyyy));
        var endDate = new Date((endDate.getTime()) - 1)
        console.log("StartDate",startDate,"endDate",endDate)

        let from = moment(startDate).subtract(intervalmonths, 'months').format('YYYY-MM-DD')
        let to = moment(startDate).utc().format('YYYY-MM-DD')
        console.log(to, ' to  ====>>>>>>>>>>>>>>>>>from', from)
        return {
            from: from,
            to: to
        }

    }

    getGraphData = (subType, mnths) => {
        let { from, to } = this.getIntervals(mnths)
        console.log(subType, 'cdddddddddddddfsdfsfs', mnths)

        console.log(from, 'data is=============>>>>>>>>>>>>', to)




        const res = async () => {
            // const resp = await axios.get(`${this.state.baseUrl}historical?symbol=${subType}&to=${to}&from=${from}`)
            const resp = await axios.get(`${this.state.baseUrl}historical?symbol=${subType}&to=2022-06-30&from=2022-01-01`)

                .catch(function (error) {
                    console.log(error);
                });

            console.log('response is ====>>>', resp)
            return resp;

        }
        // const res = async () => {
        //     const resp = await axios.post('http://52.76.9.188:8000/historicalvalues', {
        //         symbol:subType,
        //         from:PastDate,
        //         to:CurrentDate
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        //     return resp;

        // }

        return res();
    }

    getFunds = (payload, timeSpan) => {

        console.log(payload, 'payload is ===========>>>>>>>>>>>>>>>>', timeSpan)
        let { from, to } = this.getIntervals(timeSpan)



        const res = async () => {
            const resp = await axios.get(`${this.state.baseUrl}funds?fund_id=${payload?.fund_id}&to=${to}&from=${from}`)

                .catch(function (error) {
                    console.log(error);
                });

            console.log('response is getFunds ====>>>', resp)
            return resp;

        }
        // const res = async () => {
        //     const resp = await axios.post(`${this.state.url2}funds/${timeSpan}`, payload)
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        //     return resp;

        // }
        return res();
    }
    getForex = (PastDate, CurrentDate, Currency, month) => {

        let { from, to } = this.getIntervals(month)

        console.log(from, 'data is=============>>>>>>>>>>>>', to)



        const res = async () => {
            const resp = await axios.get(`${this.state.baseUrl}forex/graph?currency=${Currency}&to=${to}&from=${from}`)

                .catch(function (error) {
                    console.log(error);
                });

            console.log('response is ====>>>', resp)
            return resp;

        }

        // const res = async () => {
        //     const resp = await axios.post('http://3.0.95.68:8000/forexrange', {
        //         currency:Currency,
        //         from:PastDate,
        //         to:CurrentDate
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        //     return resp;

        // }
        return res();
    }

    getKibor = (value) => {
        console.log('values for kibor is ====>>>>>>>>>>>', value)
        const res = async () => {
            const resp = await axios.get(`${this.state.url2}kibor/${value}`)
                .catch(function (error) {
                    console.log(error);
                });
            return resp;

        }
        return res();
    }
    getKiborbid = () => {

        const res = async () => {
            const resp = await axios.get(`${this.state.baseUrl}kibro`)
                .catch(function (error) {
                    console.log(error);
                });
            return resp;

        }
        return res();
    }

    getStocks() {

    }

}
export default new getData();