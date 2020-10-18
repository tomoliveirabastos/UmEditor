const ioHook = require('iohook');

const mapKeys = require("./src/MapKeys");

ioHook.on('keydown', e =>{
    
    mapKeys.getKeyName(e.rawcode);

});

ioHook.start();