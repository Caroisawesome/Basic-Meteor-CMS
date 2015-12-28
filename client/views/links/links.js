Template.getLinkAdd.events({
    'click icon': function(e, instance) {
        e.preventDefault();
        if (this.callback) this.callback.bind(this.doc)(e, instance);
    }

});

Template.getLinkEdit.events({
    'click icon': function(e, instance) {
        e.preventDefault();
        if (this.callback) this.callback.bind(this.doc)(e, instance);
    }
});


Template.getLinkRemove.events({
    'click icon': function(e, instance) {
        e.preventDefault();
        if (this.callback) this.callback.bind(this.doc)(e, instance);
    }
});			    
