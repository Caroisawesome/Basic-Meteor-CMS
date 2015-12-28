const linkEvents = {
}

Template.getLinkAdd.events(_.extend({
    'click icon': function(e, instance) {
        e.preventDefault();
        if (this.callback) this.callback.bind(this.doc)(e, instance);
    }

},linkEvents));

Template.getLinkEdit.events(_.extend({
    'click icon': function(e, instance) {
        e.preventDefault();
	console.log('get link edit', this);

        if (this.callback) this.callback.bind(this.doc)(e, instance);
    }
},linkEvents));
