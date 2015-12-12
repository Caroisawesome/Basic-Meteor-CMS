const linkEvents = {
    'click icon': function(e, instance) {
        FN.halt(e);
        if (this.callback) this.callback(e, instance);
    }
}

Template.getLinkAdd.events(_.extend({

},linkEvents));

Template.getLinkEdit.events(_.extend({

},linkEvents));