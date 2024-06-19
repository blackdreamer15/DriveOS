const path = require('path');

module.exports = {
    externals: {
        config: JSON.stringify({
           apiUrl: 'http://localhost:5000/api/v1'
        })
    }
}
