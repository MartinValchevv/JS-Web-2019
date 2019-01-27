const mongoose = require('mongoose');

module.exports = function initData() {
    mongoose.connect('mongodb://admin:admin223344@ds213665.mlab.com:13665/workout');
};

