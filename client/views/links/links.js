const linkEvents = {
    'click icon': function(e, instance) {
        e.preventDefault();
        if (this.callback) this.callback(e, instance);
    }
}

Template.getLinkAdd.events(_.extend({

},linkEvents));

Template.getLinkEdit.events(_.extend({

},linkEvents));