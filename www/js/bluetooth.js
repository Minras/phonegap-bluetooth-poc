var bt_config = {

};

var bt = {

    initialize: function(logger) {
        this.initializeLogger(logger);

        var paramsObj = {request:true};
        if (undefined === bluetoothle) {
            if (undefined === window.bluetoothle) {
                this.logger("BT plugin no found");
                return false;
            }
            bluetoothle = window.bluetoothle;
        }
        this.logger("Initialize : " + JSON.stringify(paramsObj));
        bluetoothle.initialize(this.initializeSuccess, this.initializeError, paramsObj);
        return false;
    },

    initializeLogger: function(logger) {
        this.logger = undefined === logger ? console.log : logger;
    },

    initializeSuccess: function(obj) {
        this.logger("Initialize Success : " + JSON.stringify(obj));
        this.logger(obj.status == "enabled" ? "Enabled" : "Unexpected Initialize Status");
    },

    initializeError: function(obj) {
        this.logger("Initialize Error : " + JSON.stringify(obj));
    }
};