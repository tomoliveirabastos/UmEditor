const jsonCode = require('./keycodes.json');

const FileMap = require('./FileMap');

class MapKeys extends FileMap{
    
    constructor(){
        super();
    }
    
    getKeyName(code){
        
        const keyword = jsonCode[code];

        this.file_data(keyword);

        return keyword;

    }

}

module.exports = new MapKeys();