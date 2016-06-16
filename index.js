'use strict';
var ERR = 2;

module.exports = {
    extends: [
        'spt'
    ],

    rules: {
        'eqeqeq': [ERR, 'smart'],
        'no-use-before-define': [ERR, { functions: false }]
    }
};
