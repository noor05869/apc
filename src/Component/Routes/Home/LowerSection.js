import React from "react";
import Slider from "@mui/material/Slider";
import $ from "jquery";
import systems from "../../../Images/sys.png";
import Markets from "../Data/Markets";
import timeLap from "../Data/timeLap";
import InvestmentRange from "../Data/InvestmentRange";
import Graph from "./Graph";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import StockTypes from "../Data/StockType";
import getData from "../../Api/GetGraph";
import LinearProgress from "@mui/material/LinearProgress";
import Tooltip from "@mui/material/Tooltip";
// import Tooltip from
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import ApexBarChart from "./ApexColumnChart";
import BarChartData from "../Data/BarChartData";
import TreeGraphData from "../Data/TreeGraphData";
import ApexTreeChart from "./ApexTreeChart";
import { Link } from "react-router-dom";
import imag2 from "../../../Images/image 5.png";
import imag1 from "../../../Images/image 6.png";
import cdc from "../../../Images/cdc.png";
import secp from "../../../Images/secp1.png";
import nccp from "../../../Images/nccpl.png";
import psx from "../../../Images/psx.png";
import credit from "../../../Images/Credit-Ratings.png";

import logonc from "../../../Images/ncllogo.png";
import axios from "axios";
import ApexTreeChartNational from "./ApexTreeChartNational";

class LowerSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "stocks",
      typeCode: "mutualFunds",
      subType: ["SYS"],
      typeName: ["Systems Limited"],
      subTypeCode: ["SYS"],
      time: 1,
      amount: 2,
      dataSet: Markets,
      timeMarks: timeLap,
      amountMarks: InvestmentRange,
      subStockTypes: StockTypes,
      obtPerct: 0,
      AmountBecomed: 0,
      count: 0,
      price: 25000,
      graphDate: [],
      graphValueName: ["Systems Limited"],
      kiborBidAmount: {},
      loading: true,
    };
  }

  componentDidMount() {
    // alert('0')
    $(".stock-company > div:nth-child(1)").addClass("Active");
    // console.log('3st call')

    this.generateChart(this.state.type, this.state.subTypeCode);
  }


  generateChart = async (type, subtype) => {
    console.log('gC', type, subtype, this.state)
    // alert('1')
    this.setState({
      loading: true,
      subType: subtype,
    });
    let investedAmount = this.state.amountMarks[this.state.amount].scaledValue;
    let timePeriod = this.state.timeMarks[this.state.time].label;
    let amountBecomed = 0;
    let payLoad = {};
    let percentage = 0.0;
    let response;
    let graphDate = [];

    if (type == "kibor") {
      let bidAmount = 0;
      // console.log({ BarChartData })
      // console.log(this.state.kiborBidAmount)
      // console.log(this.state.time)


      let Data = [];
      const keys = Object.entries(this.state.kiborBidAmount);
      keys.forEach((x, index) => {
        if (this.state.time === index) {
          if (this.state.time ===0) {
            // console.log({ x, index })
            // bidAmount = x[1].offer / 100;
            
            percentage=8.02
     console.log("investedAmount",(1+(percentage/100))*investedAmount)
     amountBecomed=(1+(percentage/100))*investedAmount
    
          }
          if (this.state.time ===1 ) {
            // console.log({ x, index })
            // bidAmount = x[1].offer / 100;
            
            percentage=7.69
     
            amountBecomed=(1+(percentage/100))*investedAmount

          }
          else if( this.state.time ===2 ){
            percentage=7.45
            amountBecomed=(1+(percentage/100))*investedAmount


         

          }
          else if( this.state.time ===3 ){
            percentage=8.08
            amountBecomed=(1+(percentage/100))*investedAmount


    
          }else if( this.state.time ===4 ){
            percentage=32
            // bidAmount = (this.state.kiborBidAmount.y1.offer + 1) * (this.state.kiborBidAmount.y2.offer + 1) * (this.state.kiborBidAmount.y3.offer + 1) / 100;
           
            amountBecomed=(1+(percentage/100))*investedAmount


            
          }else if( this.state.time ===5 ){
            percentage=53.25
     console.log("investedAmount",(1+(percentage/100))*investedAmount)

      amountBecomed=(1+(percentage/100))*investedAmount
        
         
          }
          // else if (this.state.time === 4) {
          //   console.log("------------------>", this.state.kiborBidAmount)
          //   bidAmount = (this.state.kiborBidAmount.y1.offer + 1) * (this.state.kiborBidAmount.y2.offer + 1) * (this.state.kiborBidAmount.y3.offer + 1) / 100;
          // }
          // else if (this.state.time === 5) {
          //   console.log("------------------>", this.state.kiborBidAmount)

          //   bidAmount = (this.state.kiborBidAmount.y1.offer + 1) * (this.state.kiborBidAmount.y2.offer + 1) * (this.state.kiborBidAmount.y3.offer + 1) * (this.state.kiborBidAmount.y4.offer + 1) * (this.state.kiborBidAmount.y5.offer + 1) / 100;

          // }
          // amountBecomed += investedAmount * (bidAmount + 1);
          // // Present Vlaue = invedted amount * (bidAmount + 1)
          // percentage += bidAmount * 100;
          Data.push({
            x: 'TermDeposit',
            y: percentage
          });
        }
      })
      // keys.forEach((x, index) => {
      //   if (this.state.time === index) {
      //     if (this.state.time < 4) {
      //       // console.log({ x, index })
      //       bidAmount = x[1].offer / 100;
      //     }
      //     else if (this.state.time === 4) {
      //       console.log("------------------>", this.state.kiborBidAmount)
      //       bidAmount = (this.state.kiborBidAmount.y1.offer + 1) * (this.state.kiborBidAmount.y2.offer + 1) * (this.state.kiborBidAmount.y3.offer + 1) / 100;
      //     }
      //     else if (this.state.time === 5) {
      //       console.log("------------------>", this.state.kiborBidAmount)

      //       bidAmount = (this.state.kiborBidAmount.y1.offer + 1) * (this.state.kiborBidAmount.y2.offer + 1) * (this.state.kiborBidAmount.y3.offer + 1) * (this.state.kiborBidAmount.y4.offer + 1) * (this.state.kiborBidAmount.y5.offer + 1) / 100;

      //     }
      //     amountBecomed += investedAmount * (bidAmount + 1);
      //     // Present Vlaue = invedted amount * (bidAmount + 1)
      //     percentage += bidAmount * 100;
      //     Data.push({
      //       x: 'TermDeposit',
      //       y: percentage
      //     });
      //   }
      // })


      await this.getStocksdata('SYS').then((res) => {
        // console.log('>>>1',res)

        Data.push({
          x: 'System',
          y: ((res.data.data[0].close - res.data.data[res.data.data.length - 1].close) / res.data.data[res.data.data.length - 1].close) * 100,
        });

      })
      await this.getStocksdata('EPCL').then((res) => {
        // console.log('>>>2',res)

        Data.push({
          x: 'Engro',
          y: ((res.data.data[0].close - res.data.data[res.data.data.length - 1].close) / res.data.data[res.data.data.length - 1].close) * 100,
        });

      })
      await this.getStocksdata('MEBL').then((res) => {
        // console.log('>>>3',res)

        Data.push({
          x: 'MCB',
          y: ((res.data.data[0].close - res.data.data[res.data.data.length - 1].close) / res.data.data[res.data.data.length - 1].close) * 100,
        });

      })
      await this.getStocksdata('AVN').then((res) => {
        // console.log('>>>4',res)

        Data.push({
          x: 'AVN',
          y: ((res.data.data[0].close - res.data.data[res.data.data.length - 1].close) / res.data.data[res.data.data.length - 1].close) * 100,
        });    
    

      })
    


      // TreeGraphData.map((x) => {
      //   // console.log('s', Object.keys(x))
      //   if (Object.keys(x)[0] !== "NationalSavings") {
      //     Data.push({
      //       x: Object.keys(x)[0],
      //       y: x[Object.keys(x)][this.state.time],
      //     });
      //   }
      // });

      this.setState({
        AmountBecomed: parseInt(amountBecomed.toFixed(0)),
        obtPerct: percentage,
        graphDate: Data,
        loading: false,
        subTypeCode: this.state.subType,
        graphValueName: this.state.typeName,
        type: type,
      }, () => { console.log(this.state) });

      // let resultObj = response.find(o => o.tenor.toUpperCase() === timePeriod);
      // await getData.getKibor(21).then(res => {
      //     let obj = {}
      //     response = res.data.data;

      //     if (response.length > 0) {
      //         let resultObj = response.find(o => o.tenor.toUpperCase() === timePeriod);
      //         let bidAmount = 0;
      //         if (resultObj) {
      //             bidAmount = +resultObj.bid
      //         }
      //         else {
      //             // In case when value against year not avaiable
      //             resultObj = response[response.length - 1];
      //             // Multiple year value with last bid amount
      //             bidAmount = +resultObj.bid * (this.state.timeMarks[this.state.time].scaledValue)
      //         }
      //         console.log({bidAmount})
      //         amountBecomed += (investedAmount * (bidAmount + 1))
      //         // Present Vlaue = invedted amount * (bidAmount + 1)
      //         percentage += (bidAmount * 100)

      //         let Data = [
      //             [BarChartData.stocks[this.state.time], BarChartData.mutualFunds[this.state.time], percentage.toFixed(2)],
      //             ['Stocks', 'Mutual Funds', 'Term Deposit']]
      //         this.setState({
      //             AmountBecomed: parseInt(amountBecomed.toFixed(0)),
      //             obtPerct: percentage,
      //             graphDate: Data,
      //             loading: false,
      //             subTypeCode: this.state.subType,
      //             graphValueName: this.state.typeName,
      //             type: type
      //         })

      //     }
      // }, err => {
      //     console.log(err)
      // })
    } else if (type == "nationalSavings") {
      let obj = {};
      // Multiple invested Amount value with 9.3%

      let afterPercent =
        0.093 * this.state.timeMarks[this.state.time].state + 1;
      let percentage = 9.3 * this.state.timeMarks[this.state.time].state;
      if (this.state.timeMarks[this.state.time].state >= 1) {

        afterPercent = Math.pow(
          1.093,
          this.state.timeMarks[this.state.time].state
        );
        percentage = (afterPercent - 1) * 100;
      }
      let Data = [];

      TreeGraphData.map((x) => {
        // console.log('s',Object.keys(x))
        if (Object.keys(x)[0] !== "Deposit") {
          Data.push({
            x: Object.keys(x)[0],
            y: x[Object.keys(x)][this.state.time],
          });
        }
      });

      amountBecomed += investedAmount * afterPercent;
      // let Data = [
      //     [BarChartData.stocks[this.state.time], BarChartData.mutualFunds[this.state.time], percentage.toFixed(2)],
      //     ['Stocks', 'Mutual Funds', 'National Savings']]

      this.setState({
        AmountBecomed: parseInt(amountBecomed.toFixed(0)),
        obtPerct: percentage,
        graphDate: Data,
        loading: false,
        subTypeCode: this.state.subType,
        graphValueName: this.state.typeName,
        type: type,
        subType: subtype,
      });
    } else if (type == "forex") {
      let obj = {};
      // await this.getForexdata(subTypeId).then((res) => {
      //     response = res.data.data;
      //
      await this.getForexdata().then(
        (res) => {
          response = res?.data?.data;
          if (response.length > 0) {
            let lastPrice = res.data.data[0].sell;
            let currentPrice = res.data.data[res.data.data.length - 1].sell;

            amountBecomed += (investedAmount * currentPrice) / lastPrice;
            // percent = present value-investedamount * 100 / invested amount
            percentage =
              ((amountBecomed - investedAmount) * 100) / investedAmount;
            // amountBecomed = amountBecomed.toFixed(2)
            // percentage = percentage.toFixed(2)
            // graphDate = response
            obj["Forex"] = response;
            graphDate.push(obj);
            this.setState({
              AmountBecomed: +amountBecomed.toFixed(0),
              obtPerct: +percentage,
              graphDate: graphDate,
              loading: false,
              subTypeCode: this.state.subType,
              graphValueName: this.state.typeName,
              type: type,
            });
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }

    if (subtype) {
      subtype.forEach(async (subTypeId, index) => {
        let obj = {};
        if (type == "mutualFunds") {
          payLoad.fund_id = subTypeId;
          //
          await getData
            .getFunds(payLoad, this.state.timeMarks[this.state.time].months)
            .then(
              (res) => {
                // await getData.getFunds(payLoad, this.state.timeMarks[this.state.time].label).then(res => {

                console.log(
                  "response is lower section get mutual funds===============>>>>>>>>>>",
                  res
                );
                response = res.data.data;
                if (response.length > 0) {
                  let currentPrice = res.data.data[0].nav;
                  let lastPrice = res.data.data[res.data.data.length - 1].nav;
                  amountBecomed += (investedAmount * currentPrice) / lastPrice;
                  // percent = present value-investedamount * 100 / invested amount
                  percentage =
                    ((amountBecomed - investedAmount * subtype.length) * 100) /
                    (investedAmount * subtype.length) ;
                  // amountBecomed = amountBecomed.toFixed(2)
                  // percentage = percentage.toFixed(2)
                  // graphDate = response
                  obj[subTypeId] = response;
                  graphDate.push(obj);
                }
              },
              (err) => {
                console.log(err);
              }
            );
        } else if (type == "stocks") {
          await this.getStocksdata(subTypeId).then((res) => {
            response = res?.data?.data;
            console.log({ response });
            if (response?.length > 0) {
              res = response;
              let currentPrice = res[0].close;
              let lastPrice = res[res.length - 1].close;
              amountBecomed += (investedAmount * currentPrice) / lastPrice;
              // percent = present value-investedamount * 100 / invested amount
              percentage =
                ((amountBecomed - investedAmount * subtype.length) * 100) /
                (investedAmount * subtype.length);
              // amountBecomed+= amountBecomed.toFixed(2)
              // percentage += percentage.toFixed(2)
              // graphDate.push({subTypeId : response})
              obj[subTypeId] = response;
              graphDate.push(obj);
            }
          });
        }
        if (index + 1 == subtype.length) {
          this.setState({
            AmountBecomed: +amountBecomed.toFixed(0),
            obtPerct: +percentage,
            graphDate: graphDate,
            loading: false,
            subTypeCode: this.state.subType,
            graphValueName: this.state.typeName,
            type: type,
          });
        }
      });
    }
  };

  getStocksdata(subtype) {
    console.log("stcks000000000000000000000000",subtype)
    // alert('2')
    // let DayMinus = 0;
    // if (this.state.time == 0) {
    //   DayMinus = 92;
    // } else if (this.state.time == 1) {
    //   DayMinus = 184;
    // } else if (this.state.time == 2) {
    //   DayMinus = 272;
    // } else if (this.state.time == 3) {
    //   DayMinus = 365;
    // } else if (this.state.time == 4) {
    //   DayMinus = 1096;
    // } else if (this.state.time == 5) {
    //   DayMinus = 1460;
    // }

    // var myCurrentDate = new Date();

    // console.log("day minus ==========>>>", DayMinus);
    // var myCurrentDate = new Date('2021-09-30');
    // var myPastDate = new Date(myCurrentDate);
    // myPastDate.setDate(myPastDate.getDate() - DayMinus);

    // let currentDate = `${myCurrentDate.getFullYear()}-${this.leftPad(
    //   myCurrentDate.getMonth() + 1,
    //   2
    // )}-${this.leftPad(myCurrentDate.getDate(), 2)}`;
    // let pastDate = `${myPastDate.getFullYear()}-${this.leftPad(
    //   myPastDate.getMonth() + 1,
    //   2
    // )}-${this.leftPad(myPastDate.getDate(), 2)}`;
    let mnths = this.state.timeMarks[this.state.time].months;
    const res = getData.getGraphData(subtype, mnths);
    return res;
  }

  leftPad(number, targetLength) {
    // alert('3')
    var output = number + "";
    while (output.length < targetLength) {
      output = "0" + output;
    }
    return output;
  }

  handleAmountChange = (event, newValue) => {
    // alert('4')
    // Investment Change

    this.setState({
      amount: newValue,
    });
    this.generateChart(this.state.type, this.state.subTypeCode);
  };

  handleTimeChange = async (event, newValue) => {
    // alert('5')
    // Time change
    // console.log(this.state.timeMarks)
    this.setState({
      time: newValue,
    });
    // console.log('2nd call')

    this.generateChart(this.state.type, this.state.subTypeCode);
  };

  addActiveMarket = (e) => {
    // identify inner company
    let subStateAbbr =
      this.state.subStockTypes[e.target.value].length > 0
        ? [this.state.subStockTypes[e.target.value][0].abbr]
        : "";
    if (e.target.value === 'kibor') {
      getData.getKiborbid().then(res => {
        this.setState(
          {
            subType: subStateAbbr,
            typeName:
              this.state.subStockTypes[e.target.value].length > 0
                ? this.state.subStockTypes[e.target.value][0].title
                : "",
            kiborBidAmount: res.data.data
          },
          
          () => this.generateChart(e.target.value, subStateAbbr)
          );
      })
    }
    else {
      this.setState({
        subType: subStateAbbr,
        typeName: this.state.subStockTypes[e.target.value].length > 0 ? this.state.subStockTypes[e.target.value][0].title : '',
      }, () => this.generateChart(e.target.value, subStateAbbr));
    }
    // alert('6')
    $(".stock-company > div").removeClass("Active");
    let temp = $(".stock-company > div:nth-child(1)");
    if (temp) temp.addClass("Active");
  };


  addActiveComp = (e) => {
    // alert('8')
    // debugger
    if (!this.state.subType.includes(e.target.parentNode.dataset.val)) {
      let tempType = [];
      let tName = [];
      // If markets select greater than 2
      if (this.state.subType.length == 2) {
        tempType = [];
        tName = [];
        tempType.push(e.target.parentNode.dataset.val);
        tName.push(e.target.parentNode.dataset.className);
        $(".stock-company > div").removeClass("Active");
        $(e.target.parentNode).addClass("Active");
      } else {
        // If markets select less than 2
        $(e.target.parentNode).addClass("Active");

        tempType = this.state.subType;
        tName = [this.state.typeName];
        tempType.push(e.target.parentNode.dataset.val);
        tName.push(e.target.parentNode.dataset.name);
      }
      this.setState({
        typeName: tName,
        subType: tempType,
      });

      this.generateChart(this.state.type, tempType);
    } else {
      if (this.state.subType.length > 1) {
        let item = this.state.subType;
        const index = item.indexOf(e.target.parentNode.dataset.val);
        let itemType = this.state.typeName;
        const indexType = itemType.indexOf(e.target.parentNode.dataset.name);

        if (index > -1) {
          item.splice(index, 1);
        }
        if (indexType > -1) {
          itemType.splice(indexType, 1);
        }
        this.setState({
          typeName: itemType,
          subType: item,
        });
        // If markets select greater than 2
        $(e.target.parentNode).toggleClass("Active");

        this.generateChart(this.state.type, item);
      }
    }
  };

  getForexdata() {
    // alert('7')
    let DayMinus = 0;
    if (this.state.time == 0) {
      DayMinus = 92;
    } else if (this.state.time == 1) {
      DayMinus = 184;
    } else if (this.state.time == 2) {
      DayMinus = 272;
    } else if (this.state.time == 3) {
      DayMinus = 365;
    } else if (this.state.time == 4) {
      DayMinus = 1096;
    } else if (this.state.time == 5) {
      DayMinus = 1460;
    }

    var myCurrentDate = new Date("2021-09-30");
    var myPastDate = new Date(myCurrentDate);
    myPastDate.setDate(myPastDate.getDate() - DayMinus);

    let currentDate = `${myCurrentDate.getFullYear()}-${this.leftPad(
      myCurrentDate.getMonth() + 1,
      2
    )}-${this.leftPad(myCurrentDate.getDate(), 2)}`;
    let pastDate = `${myPastDate.getFullYear()}-${this.leftPad(
      myPastDate.getMonth() + 1,
      2
    )}-${this.leftPad(myPastDate.getDate(), 2)}`;
    let mnth = this.state.timeMarks[this.state.time].months;
    const res = getData.getForex(pastDate, currentDate, "USD", mnth);
    console.log("fprex data respons is ================>>>", res);
    return res;
  }


  updatGraphSTates() {
  }




  numFormatter(num) {
    // return this.state.amountMarks[num].label
  }

  timeFormatter(num) {
    // return this.state.timeMarks[num].label
  }

  valuetext(value) {
    return `${value}RS`;
  }

  render() {
    return (
      <>
        <div className="container-fluid  my-8 wrapper cardsdiv">
          <div className="row stock-amount upper-card ">
            <div className="col-lg-4 col-md-12 col-sm-12  selectassetdiv">
              <div className="stock-amount-main">
                <p className=" marginfourty text-left font-14 font-light">
                  <strong>Select Assets</strong>
                </p>

                <div className=" marginfourty">
                  <div className=" col-12    font-bold font-40 stock-amount-main-text">
                    {/* <select class="form-select" aria-label="Default select example"  
                    value={this.state.type}
                    onChange={this.addActiveMarket}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    id="market_select"
                    // className="font-bold font-40 select "
                    disabled={this.state.loading}
                  
                  >
  <option value={"stocks"}>Stocks</option>
  <option value={"mutualFunds"}>Mutual Funds</option>
  <option value={"forex"}>US Dollar</option>
  <option value={"kibor"}>Term Deposit</option>
  <option value={"nationalSavings"}>
                        National Saving</option>

</select> */}
                    {/* <strong>What if you invested in</strong> */}
                    <Select
                      value={this.state.type}
                      onChange={this.addActiveMarket}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      id="market_select"
                      // className="font-bold font-40 select "
                      disabled={this.state.loading}
                      style={{ border: " 1px solid #eaeef2", width: "100%" }}
                    >
                      <MenuItem value={"stocks"}>Stocks</MenuItem>
                      <MenuItem value={"mutualFunds"}>Mutual Funds</MenuItem>

                      <MenuItem value={"forex"}>US Dollar</MenuItem>
                      <MenuItem value={"kibor"}>Term Deposit</MenuItem>
                      <MenuItem value={"nationalSavings"}>
                        National Saving
                      </MenuItem>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="row mt-5 sliderrow">
                <div className="   col-lg-11 col-md-11 col-sm-8 ">
                  <div className=" displayflex d-flex align-items-baseline">
                    <p className="text-grey mb-0 font-medium font-14  ">
                      Investment Amount
                    </p>
                    <h3 className="font-32 font-bold flexbar">
                      {this.state.amountMarks[
                        this.state.amount
                      ].scaledValue.toLocaleString()}
                      <h3 className="font-32 font-bold flexbar">PKR</h3>

                      {/* <p className="font-16 font-bold pl-1  ">
                        <strong>PKR</strong>
                      </p>{" "} */}
                    </h3>
                  </div>
                  <div className="stock-amount-slider">
                    <Slider
                      aria-label="Always visible"
                      defaultValue={2}
                      getAriaValueText={this.valuetext}
                      step={null}
                      scale={this.state.amountMarks.scaledValue}
                      marks={this.state.amountMarks}
                      valueLabelFormat={this.numFormatter}
                      max={this.state.amountMarks.length - 1}
                      min={0}
                      valueLabelDisplay="auto"
                      onChangeCommitted={(event, newValue) =>
                        this.handleAmountChange(event, newValue)
                      }
                      disabled={this.state.loading}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3 sliderrow">
                <div className="   col-lg-11 col-md-12 col-sm-8">
                  <div className=" displayflex ">
                    <p className="text-grey font-medium font-14 mb-0">Term</p>

                    <h2 className="font-32 font-bold flexbar">
                      {this.state.timeMarks[this.state.time].scaledValue}
                      <h3 className="font-32 font-bold flexbar"> {this.state.timeMarks[this.state.time].span}</h3>


                      {/* <p className="font-16 font-bold month  ">
                        <strong>
                          {this.state.timeMarks[this.state.time].span}
                        </strong>
                      </p> */}
                    </h2>
                  </div>

                  {/* <h3 className="font-32 font-bold" >{this.state.timeMarks[this.state.time].name}</h3> */}

                  <div className="stock-amount-slider mb-5">
                    <Slider
                      aria-label="Always visible"
                      defaultValue={1}
                      getAriaValueText={this.valuetext}
                      step={null}
                      marks={this.state.timeMarks}
                      scale={this.state.timeMarks.scaledValue}
                      valueLabelFormat={this.timeFormatter}
                      max={this.state.timeMarks.length - 1}
                      min={0}
                      valueLabelDisplay="auto"
                      onChangeCommitted={(event, newValue) =>
                        this.handleTimeChange(event, newValue)
                      }
                      disabled={this.state.loading}
                    />
                  </div>
                </div>
              </div>
              <div className="row  ">
                <div className="text-center col-lg-5 col-md-5   col-sm-10 expectChngdiv">
                  <div className="helpicon">
                    {this.state.subTypeCode.length > 1 && (
                      <Tooltip
                        overlayStyle={{ maxWidth: "350px" }}
                        title="This percentage change is based on investment in two individual assets "
                        placement="bottom"
                        arrow
                      >
                        <span className="  ml10">
                          <HelpIcon />
                        </span>
                      </Tooltip>
                    )}
                  </div>
                  <span className="text-grey font-medium font-14">
                    Expected Change
                  </span>
                  <h3 className="graphPer font-bold font-33 amount">
                    {this.state.obtPerct.toFixed(2)} %
                  </h3>
                </div>
                {/* <div className="col-lg-2 col-md-1"></div> */}
                <div className="text-center col-lg-5 col-sm-10  col-md-5   expectRevdiv">
                  <div className="helpicon">
                    {this.state.subTypeCode.length > 1 && (
                      <Tooltip
                        overlayStyle={{ maxWidth: "350px" }}
                        title="This expected revenue is based on investment in two individual assets"
                        placement="bottom"
                        arrow
                      >
                        <span className="  ml10">
                          <HelpIcon />
                        </span>
                      </Tooltip>
                    )}
                  </div>
                  <span className="text-grey font-medium font-14">
                    Expected Revenue
                  </span>
                  <div className="d-flex align-items-baseline justify-content-center">
                    <h3 className="font-33 font-bold amount">
                      {this.state.AmountBecomed.toLocaleString()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-1"></div> */}
            <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12 mb-p-0  chardiv">
              <div className="graph-loader">
                {this.state.loading == true && <LinearProgress />}
              </div>
              <div className="chart-area">
                <div className="d-flex justify-content-between chart-area-numbers">
                  {/* <div className="text-center w-50">
                                        <span className="text-grey font-medium font-14">Expected Change

                                            {this.state.subTypeCode.length > 1 &&

                                                <Tooltip overlay le={{ maxWidth: '350px' }} title="This percentage change is based on investment in two individual assets " placement="bottom" arrow
                                                >
                                                    <span className="ml10">
                                                        <HelpIcon />
                                                    </span>
                                                </Tooltip>
                                            }

                                        </span>
                                        <h3 className="graphPer font-bold font-32">{(this.state.obtPerct).toFixed(2)} %</h3>
                                    </div> */}
                  {/* <div className="text-center w-50">
                                        <span className="text-grey font-medium font-14">Expected Revenue
                                            {this.state.subTypeCode.length > 1 &&

                                                <Tooltip overlayStyle={{ maxWidth: '350px' }} title="This expected revenue is based on investment in two individual assets" placement="bottom" arrow
                                                >
                                                    <span className="ml10">
                                                        <HelpIcon />
                                                    </span>
                                                </Tooltip>
                                            }


                                        </span>
                                        <div className="d-flex align-items-baseline justify-content-center"><h3 className="font-32 font-bold">{(this.state.AmountBecomed).toLocaleString()}</h3></div>
                                    </div> */}
                </div>
                <div>
                  <div className=" row d-flex stock-company sliding">
                    <div className="col companydiv">
                      {this.state.subStockTypes[this.state.type].map(
                        (value, index) => {
                          return (
                            <div
                              key={index}
                              data-val={value.abbr}
                              className={` border imagediv ${index == 0 ? "Active" : ""
                                }`}
                              data-name={value.title}
                            >
                              <img
                                style={{ height: "30px" }}
                                src={value.imgUrl ? value.imgUrl : systems}
                                alt=""
                                onClick={this.addActiveComp}
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-100">
                  {this.state.type == "nationalSavings" ?<ApexTreeChartNational Data={this.state.graphDate} />:this.state.type == "kibor"?  <ApexTreeChart Data={this.state.graphDate} />: <Graph
                      graphDate={this.state.graphDate}
                      subType={this.state.subTypeCode}
                      subTypeName={this.state.graphValueName}
                      type={this.state.type}
                      time={this.state.time}
                    />}
                    {/* this.state.type == "kibor" ? (
                    // <ApexBarChart
                    //     Firstdata={this.state.graphDate[1]}
                    //     ScndData={this.state.graphDate[0]} />

                    <ApexTreeChart Data={this.state.graphDate} />
                  ) : (
                    <Graph
                      graphDate={this.state.graphDate}
                      subType={this.state.subTypeCode}
                      subTypeName={this.state.graphValueName}
                      type={this.state.type}
                      time={this.state.time}
                    />
                  )} */}
                  {/* <ApexBarChart /> */}
                </div>
                {/* <a href="#" className="btn_secondary">Open Account</a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid   addressdiv">
          <div className="wrapper ">
            <div class="contactgrid ">
              <div id="w-node-a81c1f40-3422-3f95-53cc-fd9b17766516-17766513">
                <div>
                  <h2 class="h2 font-bold adresswrap ">
                    For further inquiries or assistance, <br />
                    please contact.
                  </h2>
                </div>
                <div class="buttoncontainer adresswrapd">
                  <a href="/contact" class="primarybutton w-button font-bold">
                    Contact
                  </a>
                </div>
              </div>
              <div
                id="w-node-a81c1f40-3422-3f95-53cc-fd9b1776651f-17766513"
                class="locations addessmargin"
              >
                <div class="locationkhi">
                  <p class="bt font-bold">
                    <span class="text-span font-bold">Karachi</span>
                    <br />
                    2nd Floor Imperial Court Building,
                    <br />
                    Dr. Ziauddin Ahmed Road,
                    <br />
                    Karachi, Pakistan
                    <br />
                    <br />
                    UAN: +92-21-111-639-825
                    <br />
                    Fax: +92-21-35632321
                    <br />
                  </p>
                </div>
                <div class="locationlhr adresswrapd">
                  <p class="bt font-bold">
                    <span class="text-span font-bold">
                      Lahore
                      <br />
                    </span>
                    63-A, Agora Eden City <br />
                    DHA Phase VIII, <br />
                    Lahore, Pakistan
                    <br />
                    <br />
                    Tel: +92-42-37135843-8 <br />
                    Fax: +92-42-37135840
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row    ">
              <div className="col-lg-6 col-md-4 msgcol">
                <h2 className="msg">
                  For further inquires or assistance, please contact us via
                  email.
                </h2>
                <a href="#" className="btn_secondary">
                  <strong>Contact Us</strong>
                </a>
              </div>
              <div className="col-2"></div>

              <div className="col-lg-3 col-md-4 msgcol ">
                <strong>Karachi</strong>
                <p className="address">
                  2nd Floor Imperial Court Building, Dr. Ziauddin Ahmed Road,
                  Karachi, Pakistan{" "}
                </p>
                <strong>Lahore</strong>
                <p className="address">
                  63-A, Agora Eden City DHA Phase VIII, Lahore, Pakistan
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="container-fluid  footerdiv">
          <div className="wrapper">
            <div class="footer">
              <div class="wrapper">
                <div class="divider">
                  <div class="dividerline"></div>
                </div>
                <div class="footergrid">
                  <div class="brand-symbol">
                    <div class="ncl-symbol">
                      <img src={logonc} loading="lazy" width="64" alt="" />
                    </div>
                  </div>
                  <div class="footernav font-bold">
                    <div class="bt font-bold">Capabilities</div>
                    <a href="#" class="blt">
                      Investment Banking
                    </a>
                    <a href="#" class="blt">
                      Institutional Brokerage
                    </a>
                    <a href="#" class="blt">
                      Retail Investing
                    </a>
                    <a href="#" class="blt">
                      Equity Research
                    </a>
                  </div>
                  <div class="footernav font-bold">
                    <div class="bt">Company</div>
                    <a href="#" class="blt">
                      About Us
                    </a>
                    <a href="#" class="blt">
                      Investor Relations
                    </a>
                    <a href="#" class="blt">
                      Downloads Center
                    </a>
                    <a href="#" class="blt">
                      Careers
                    </a>
                    <a href="#" class="blt">
                      Useful Links
                    </a>
                  </div>
                  <div class="footernav font-bold">
                    <div class="bt">Resources</div>
                    <a href="#" class="blt">
                      FAQ&#x27;s
                    </a>
                    <a href="#" class="blt">
                      Privacy Policy
                    </a>
                    <a href="#" class="blt">
                      Terms &amp; Conditions
                    </a>
                    <a
                      href="https://nextcapital.com.pk/uploads/files/CODE_OF_CONDUCT_1_.pdf"
                      class="blt"
                    >
                      Code of Conduct
                    </a>
                    <a
                      href="https://nextcapital.com.pk/uploads/files/THE-WHISTLEBLOWER-POLICY-Revised.pdf"
                      class="blt"
                    >
                      WB Policy
                    </a>
                    <a href="#" class="blt">
                      Media
                    </a>
                  </div>
                </div>
                <div class="divider">
                  <div class="dividerline"></div>
                </div>
                <div class="footernotes">
                  <div>
                    <p
                      style={{ color: "#6b7280 !important" }}
                      className="font-bold rights"
                    >
                      © 2022 Next Capital Limited. All Rights Reserved
                    </p>
                  </div>
                  <div class="sociallinks">
                    <a
                      href="https://www.facebook.com/NextCapitalLimitedPk"
                      class="socialblock w-inline-block"
                    >
                      <div class="socialicon w-embed">
                        <svg
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                            fill="CurrentColor"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/NextCapitalLtd"
                      class="socialblock w-inline-block"
                    >
                      <div class="socialicon w-embed">
                        <svg
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1180_2167)">
                            <path
                              d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                              fill="CurrentColor"
                            ></path>
                          </g>
                          <defs>
                            <clippath id="clip0_1180_2167">
                              <rect
                                width="24"
                                height="24"
                                fill="CurrentColor"
                              ></rect>
                            </clippath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://instagram.com/nextcapitallimited?utm_medium=copy_link"
                      class="socialblock w-inline-block"
                    >
                      <div class="socialicon w-embed">
                        <svg
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                            fill="CurrentColor"
                          ></path>
                          <path
                            d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                            fill="CurrentColor"
                          ></path>
                          <path
                            d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                            fill="CurrentColor"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/next-capital-limited-pakistan"
                      class="socialblock w-inline-block"
                    >
                      <div class="socialicon w-embed">
                        <svg
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                            fill="CurrentColor"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="divider">
                  <div class="dividerline"></div>
                </div>
                <div class="disclaimerr">
                  <div>
                    <p class="bt font-bold">Disclaimer</p>
                  </div>
                  <div>
                    <p class="p2grey">
                      “In case your complaint has not been properly redressed by
                      us, you may lodge your complaint with Securities and
                      Exchange Commission of Pakistan (the “SECP”). However,
                      please note that SECP will entertain only those complaints
                      which were at first directly requested to be redressed by
                      the Company and the company has failed to redress the
                      same. Further, the complaints that are not relevant to
                      SECP’s regulatory domain/competence shall not be
                      entertained.”
                    </p>
                  </div>
                  <div class="trec">
                    <p class="bt grey small ntn font-bold">
                      NTN Number: 3536119
                      <br />
                    </p>
                  </div>
                  <div class="footergist">
                    <div className="logosflex">
                      <a href="#" class="secp w-inline-block">
                        <img src={secp} loading="lazy" width="72" alt="" />
                      </a>
                      <a
                        href="https://www.psx.com.pk/"
                        class="secp _2 w-inline-block"
                      >
                        <img src={psx} loading="lazy" width="72" alt="" />
                      </a>
                      <a
                        href="https://www.cdcpakistan.com/"
                        class="secp _2 w-inline-block"
                      >
                        <img src={cdc} loading="lazy" width="72" alt="" />
                      </a>
                      <a
                        href="https://www.nccpl.com.pk/"
                        class="secp _2 w-inline-block"
                      >
                        <img src={nccp} loading="lazy" width="72" alt="" />
                      </a>
                    </div>
                    <div class="ratings">
                      <img src={credit} loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 

            <div className="row  no-gutter ">
              
              <div className="col-lg-4 col-md-2  logofooter">
                <APCLogo />
            
              </div>
              <div className="col-lg-2 col-md-1 "></div>

              <div className="col-lg-2 col-md-2 col-md-3   col-sm-3 msgcol1 ">
                <strong className="head">Company</strong>
                <Link className="Link">
                  <p className="address1">About Us </p>
                </Link>
                <Link className="Link">
                  <p className="address">Investors </p>
                </Link>{" "}
                <Link className="Link">
                  <p className="address">Media </p>
                </Link>{" "}
                <Link className="Link">
                  <p className="address">Careers </p>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3  col-sm-3 msgcol1 ">
                <strong className="head">Capabilities</strong>
                <Link className="Link">
                  <p className="address1">Investment Banking </p>
                </Link>
                <Link className="Link">
                  <p className="address">Institutional Brokerage </p>
                </Link>
                <Link className="Link">
                  <p className="address">Retail Investing </p>
                </Link>
                <Link className="Link">
                  <p className="address">Research </p>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3  col-sm-3 msgcol1 ">
                <strong>Resources</strong>
                <Link className="Link">
                  <p className="address1">Privacy Policy </p>
                </Link>
                <Link className="Link">
                  <p className="address">Terms & Conditions </p>
                </Link>
                <Link className="Link">
                  <p className="address">Download Center </p>
                </Link>
                <Link className="Link">
                  <p className="address">FAQ's </p>
                </Link>
              </div>
            </div> */}
          </div>

          {/* <div
            className="container-fluid 
          "
          >
            <div className="wrapper">
              <div className="row nogutter  ">
                <hr className="borderline" />
                <strong className="logos">
                  © 2022 Next Capital Limited. All Rights Reserved
                  <span>
                    {" "}
                    <Facebook className="space" /> <Twitter className="space" />{" "}
                    <Instagram className="space" />{" "}
                    <LinkedIn className="space" />{" "}
                  </span>
                </strong>
                <div className="row">
                  <label className="dis">Disclaimer</label>
                  <p className="disclaimer">
                    “In case your complaint has not been properly redressed by
                    us, you may lodge your complaint with Securities and
                    Exchange Commission of Pakistan (the “SECP”). However,
                    please note that SECP will entertain only those complaints
                    which were at first directly requested to be redressed by
                    the Company and the company has failed to redress the same.
                    Further, the complaints that are not relevant to SECP’s
                    regulatory domain/competence shall not be entertained.”
                  </p>
                </div>
                <div className="row lastfooter">
                  <div className="col-lg-2 col-md-1">
                    <img src={imag1} />
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <img src={imag2} />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-4"></div>
                  <div className="col-lg-4 col-md-6 ratingdiv">
                    <div className="tagdiv1">
                      <p className="rating">Credit Rating</p>
                      <p className="footertags">A-/A-2</p>
                    </div>
                    <div className="tagdiv">
                      <p className="rating">Management Rating</p>
                      <p className="footertags">BMR2++</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

// Update these stocks on APC:
// 1- Systems Limited (SYS)
// 2- Engro Polymer (EPCL)
// 3- Meezan Bank (MEBL)
// 4- TPL Properties (TPLP)
// 5- Avenceon (AVN)
// 6- TRG (TRG)

// For Funds:

// 1- ABL Stock Fund (F042)
// 2- UBL Stock Advantage Fund (F096)
// 3- Meezan Mutual Fund (F123)
// 4- ABL Islamic Cash Fund (217D)

export default LowerSection;

const HelpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z"
      fill="#D2D6DC"
    />
  </svg>
);

const APCLogo = () => (
  <svg
    width="133"
    height="49"
    viewBox="0 0 133 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 5.47717H35.6016V41.0788L17.8008 22.8329L0 5.47717Z"
      fill="url(#paint0_linear_1451_94)"
    />
    <path
      d="M0 11.563H29.5159V41.0788L14.7579 25.952L0 11.563Z"
      fill="url(#paint1_linear_1451_94)"
    />
    <path
      d="M52.1709 5.46277H47.5874V21.6207H52.1709V13.624C52.1709 11.6824 52.2037 8.62197 54.9211 8.62197C57.5075 8.62197 57.4093 11.123 57.4093 13.0646V21.6207H61.9929V11.7483C61.9929 7.99671 60.7935 5.46277 56.4718 5.46277C54.8348 5.46277 52.9725 5.78146 52.2364 6.94365H52.1709V5.46277Z"
      fill="#230B59"
    />
    <path
      d="M78.1621 14.2822V13.7228C78.1621 8.85233 75.8049 5.46277 70.5338 5.46277C65.3282 5.46277 62.7417 8.78651 62.7417 13.6898C62.7417 18.5932 65.8193 21.6207 70.7957 21.6207C74.1679 21.6207 77.0112 20.0829 78.0639 16.4212H73.8405C73.2184 17.7047 72.3017 18.4094 70.7957 18.4094C68.4057 18.4094 67.5872 16.3225 67.5872 14.2822H78.1621ZM67.7182 11.4192C67.9473 9.74085 68.9623 8.52004 70.7957 8.52004C72.5637 8.52004 73.6113 9.77376 73.8405 11.4192H67.7182Z"
      fill="#230B59"
    />
    <path
      d="M83.652 12.8342L76.7767 21.6207H82.4734L86.173 15.9934L90.2982 21.6207H95.9294L89.1523 12.8342L86.6643 9.34595L83.6848 5.46277H78.119L83.652 12.8342Z"
      fill="#230B59"
    />
    <path
      d="M101.481 9.34595H104.296V5.46277H101.481V0H96.8971V21.6207H101.481V9.34595Z"
      fill="#230B59"
    />
    <path
      d="M61.1883 26.0165C59.2104 24.6473 57.1401 24.343 55.8633 24.343C51.0178 24.343 47.4954 27.534 47.4954 32.3386C47.4954 36.9787 50.8117 40.4702 55.559 40.4702C56.9668 40.4702 59.272 40.0138 60.884 38.6445C60.884 38.6445 60.6437 38.4682 60.1233 37.4273C59.6668 36.5145 59.5763 35.4649 59.5763 35.4649C58.7578 36.3863 57.5638 36.8187 56.3197 36.8187C53.7005 36.8187 52.1444 34.9055 52.1444 32.3715C52.1444 30.0021 53.2768 27.7644 55.8633 27.7644C57.2711 27.7644 58.6018 27.9944 59.5147 28.9073C59.5147 28.9073 59.8002 27.9944 60.2933 27.2337C60.7864 26.473 61.1883 26.0165 61.1883 26.0165Z"
      fill="#230B59"
    />
    <path
      d="M77.2211 24.241H72.703V25.6221C71.5899 24.3058 69.8388 24.1084 68.169 24.1084C63.5527 24.1084 60.884 27.827 60.884 32.1051C60.884 36.4819 63.5032 40.3683 68.2177 40.3683C69.8874 40.3683 71.6554 40.0689 72.6376 38.7855H72.703V40.3683H77.2211V24.241ZM69.3308 36.7122C66.9736 36.7122 65.533 34.3428 65.533 32.1709C65.533 29.9989 66.9736 27.6625 69.3308 27.6625C71.6881 27.6625 73.1614 29.9989 73.1614 32.1709C73.1614 34.3428 71.6881 36.7122 69.3308 36.7122Z"
      fill="#230B59"
    />
    <path
      d="M83.5525 24.343H78.969V48.9902H83.5525V38.8545H83.618C84.6184 39.7095 86.3286 40.4702 87.9655 40.4702C92.7128 40.4702 95.3388 36.6167 95.3388 32.207C95.3388 27.9618 92.6685 24.343 88.1177 24.343C86.4152 24.343 84.6184 24.7994 83.5525 25.6912V24.343ZM86.892 36.8142C84.5347 36.8142 83.0942 34.4448 83.0942 32.2728C83.0942 30.1009 84.5347 27.7644 86.892 27.7644C89.2493 27.7644 90.6898 30.1009 90.6898 32.2728C90.6898 34.4448 89.2493 36.8142 86.892 36.8142Z"
      fill="#230B59"
    />
    <path d="M101.481 24.343H96.8971V40.3683H101.481V24.343Z" fill="#230B59" />
    <path
      d="M107.603 28.0935V24.343V21.6207H103.02V40.3683H107.603V28.0935Z"
      fill="#230B59"
    />
    <path
      d="M126.991 24.2103H122.473V25.7241C121.36 24.4077 119.76 24.2103 118.09 24.2103C113.474 24.2103 110.654 27.9289 110.654 32.207C110.654 36.5838 113.375 40.3683 118.09 40.3683C119.76 40.3683 121.425 40.1708 122.407 38.8874H122.473V40.3683H126.991V24.2103ZM119.1 36.8142C116.743 36.8142 115.303 34.4448 115.303 32.2728C115.303 30.1009 116.743 27.7644 119.1 27.7644C121.458 27.7644 122.931 30.1009 122.931 32.2728C122.931 34.4448 121.458 36.8142 119.1 36.8142Z"
      fill="#230B59"
    />
    <path d="M133 12.462H128.416V40.3683H133V12.462Z" fill="#230B59" />
    <path
      d="M94.9641 5.47717H90.1549L87.6612 8.78086L89.9768 11.5629L94.9641 5.47717Z"
      fill="url(#paint2_linear_1451_94)"
    />
    <path
      d="M108.657 24.3429H113.526C113.526 24.3429 112.004 25.2558 111.243 26.3208C110.483 27.3858 110.331 27.9943 110.331 27.9943H108.657V24.3429Z"
      fill="url(#paint3_linear_1451_94)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1451_94"
        x1="17.1922"
        y1="5.47717"
        x2="17.9529"
        y2="41.0788"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#230B59" />
        <stop offset="1" stop-color="#E92A5E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1451_94"
        x1="19.6265"
        y1="41.0788"
        x2="19.6265"
        y2="11.563"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#82297D" />
        <stop offset="1" stop-color="#E12C61" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1451_94"
        x1="91.3127"
        y1="5.47717"
        x2="91.3127"
        y2="11.5629"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#82297D" />
        <stop offset="1" stop-color="#E12C61" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1451_94"
        x1="111.091"
        y1="24.3429"
        x2="111.091"
        y2="27.9943"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#82297D" />
        <stop offset="1" stop-color="#E12C61" />
      </linearGradient>
    </defs>
  </svg>
);
