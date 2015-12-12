const linkEvents = {
    'click a': function(e, instance) {
        if (this.callback) this.callback(e, instance);
    }
}

Template.getLinkAdd.events(_.extend({

},linkEvents));

Template.getLinkEdit.events(_.entend({
    
},linkEvents));