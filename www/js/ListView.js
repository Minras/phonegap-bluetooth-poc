var ListView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(ListView.template());
        return this;
    };

    this.initialize();
};

ListView.template = Handlebars.compile($("#tpl-list").html());