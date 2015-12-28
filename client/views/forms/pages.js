Template.newPageForm.onCreated(function() {
    
});

Template.newPageForm.helpers({

    formType() {
	return !!this.page ? 'update': 'insert';
    },
    doc() {
	return !!this.page ? Pages.findOne(this.page._id): {};
    }
});
