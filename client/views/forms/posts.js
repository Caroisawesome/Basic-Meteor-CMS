Template.newPostForm.onCreated(function() {
    
});

Template.newPostForm.helpers({

    formType() {
	return !!this.post ? 'update': 'insert';
    },
    doc() {
	return !!this.post ? Posts.findOne(this.post._id): {};
    }
});



