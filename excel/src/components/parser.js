const readXlsxFile = require('read-excel-file/node');
const csv = require('csv-parser');
const fs = require('fs');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class ExcelParse {
    constructor(excel_file_path = './calls.csv'){
        this.excel_file_path = excel_file_path;
        this.parsed = {};
        this.startParse();
    }

    startParse = () => {
        let _this = this;
        // let me = this;
        fs.createReadStream('./calls.csv')
        .pipe(csv())
        .on('data',(data) =>{
            if(data.direction == 'outbound'){ 
                let d = new Date(data.startTime);
                _this.newExMonthBill(data.endpointName,
                monthNames[d.getMonth()],
                data.price);
            }
        })
        .on('end',() => {
            fs.writeFileSync('./res.json',JSON.stringify(_this.parsed))
        });
    }

    parseRows = (rows) => {
        let _this = this;
        rows.forEach((rows) => {
            _this._parseRow(rows)
        });
    }
  
    newExMonthBill = (extansion,month,price) => {      
        if(this.parsed[extansion]){
            if(this.parsed[extansion][month]){
                this.parsed[extansion][month] = parseFloat(price) + this.parsed[extansion][month];
            } else{
                this.parsed[extansion][month] = parseFloat(price);
            }
        } else {
            this.parsed[extansion] = {};
            this.parsed[extansion][month] = parseFloat(price)
        }
    }
}

new ExcelParse()

