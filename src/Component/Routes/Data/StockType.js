
import trg from '../../../Images/trg.jpeg'
import tplp from '../../../Images/stocks/tplp.png'
import epcl from '../../../Images/stocks/image 15.svg'
import avn from '../../../Images/stocks/avnn.svg'
// import avn from '../../../Images/stocks/avc.png'

import meezan from '../../../Images/stocks/image 13.svg'
import systems from "../../../Images/stocks/images.svg"

import ablStockFund from '../../../Images/abl-stock-fund1.png'
import ublStock from '../../../Images/ubl-fund1.png'
import meezanFunds from '../../../Images/stocks/meezan1.png'
import ablCashFunds from '../../../Images/ABL_ICF1.png'


const StockTypes = {
    mutualFunds: [
        {
            title: 'ABL Stock Fund',
            abbr: 'F042',
            imgUrl: ablStockFund
        },
        {
            title: 'UBL Stock Advantage Fund',
            abbr: 'F096',
            imgUrl: ublStock
        },
        {
            title: 'Meezan Mutual Fund',
            abbr: 'F123',
            imgUrl: meezanFunds
        },

    ],
    stocks: [
        {
            title: 'Systems Limited',
            abbr: 'SYS',
            imgUrl: systems
        },
        {
            title: 'Engro Polymer',
            abbr: 'EPCL',
            imgUrl: epcl
        },
        {
            title: 'Meezan Bank',
            abbr: 'MEBL',
            imgUrl: meezan
        },
        {
            title: 'Avenceon',
            abbr: 'AVN',
            imgUrl: avn
        },
        // {
        //     title : 'TRG', 
        //     abbr : 'TRG', 
        //     imgUrl : trg
        // }
    ],
    forex: [],
    kibor: [],
    nationalSavings: [],
}

export default StockTypes