var root = $('body');
var routes = {
    'bt_list': /^#list/
};

var app = {
    registerEvents: function() {
        $(window).on('hashchange', $.proxy(this.route, this));

        // main menu routing
        $(root).on('click', '#menu-bt-list', this.route);

        // some css management
        $(root).on('mousedown', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $(root).on('mouseup', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
    },

    showAlert: function (message, title) {
        if (undefined === title) {
            title = '';
        }
        if (navigator.notification) {
            navigator.notification.alert(
                message,
                null, // callback
                title,
                'OK' // Button label
            );
        } else {
            var prefix = '' === title ? '' : title + ': ';
            alert(prefix + message);
        }
    },

    route: function() {
        var hash = window.location.hash;
        if (!hash) {
            $(root).html(new HomeView().render().el);
            return;
        }
        if (hash.match(routes['bt_list'])) {
            $(root).html(new ListView().render().el);
        } else {
            $(root).html(new HomeView().render().el);
        }
    },

    initialize: function() {
        var self = this;
        this.registerEvents();
        this.menu_tpl = $("#tpl-main-menu").html();
        //this.store = new MemoryStore(function() {
        //    self.route();
        //});
        this.route();

        // bluetooth related stuff
        bt.initialize(this.showAlert);
    }

};

$(document).ready(function() {
    app.showAlert('app init');
    app.initialize();
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("console.log works well");
    }
});
