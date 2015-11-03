var bt_config = {

};

var bt = {
    logger: function(msg) {
        //
    },

    initialize: function(logger) {
        this.logger = logger;

        var paramsObj = {request:true};
        this.logger("Initialize : " + JSON.stringify(paramsObj));
        bluetoothle.initialize(this.initializeSuccess, this.initializeError, paramsObj);
        return false;
    },

    initializeSuccess: function(obj) {
        this.logger("Initialize Success : " + JSON.stringify(obj));
        this.logger(obj.status == "enabled" ? "Enabled" : "Unexpected Initialize Status");
    },

    initializeError: function(obj) {
        this.logger("Initialize Error : " + JSON.stringify(obj));
    }
};