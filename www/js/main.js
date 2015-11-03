var root = $('body');
var routes = {
    'bt_list': /^#list\//
};

var app = {
    registerEvents: function() {
        $(window).on('hashchange', $.proxy(this.route, this));

        // main menu routing
        //$(root).on('click', '#menu-bt-list', this.addLocation);

        // some css management
        $(root).on('mousedown', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $(root).on('mouseup', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(
                message,
                null, // callback
                title,
                'OK' // Button label
            );
        } else {
            alert(title + ": " + message);
        }
    },

    route: function() {
        var hash = window.location.hash;
        this.showAlert(hash, 'route');
        if (!hash) {
            $(root).html(new HomeView(this.store).render().el);
            return;
        }
        if (hash.match(routes['bt_list'])) {
            $(root).html(new ListView(employee).render().el);
        }
    },

    initialize: function() {
        var self = this;
        this.registerEvents();
        this.menu_tpl = Handlebars.compile($("#tpl-main-menu").html());
        this.store = new MemoryStore(function() {
            self.route();
        });
    }

};

app.initialize();