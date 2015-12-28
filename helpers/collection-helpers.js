get = {
    pageList: () => {
        return Pages.find().fetch();
    },
    currentPageId: () => {
        const slug = FlowRouter.getParam("pageSlug");
        const page = Pages.findOne({slug: slug});
        return page ? page._id : 'NO PAGE FOUND';
    }
};


set = {

};

remove = {
    page(id) {
	Pages.remove({_id: id});
    }
}


if (Meteor.isClient) {
    show = {
        form: { 
            for: {
                new: {
                    page() {
                        slidePanel.showPanel('newPageForm')
                    },

                    post() {
                        slidePanel.showPanel('newPostForm')
                    }
                },

                edit: {
                    siteTitle() {
                        slidePanel.showPanel('editSiteTitleForm');
                    },

                    page() {
                        slidePanel.showPanel('newPageForm', {page: this});
                    },

		    post() {
			console.log('THISHIS', this);
			slidePanel.showPanel('newPostForm', {post: this});
		    },
                }
            }

        },

        confirmation: {
            remove: {
		page() {
		    console.log('this', this);
		    const pageId = this._id;
		    console.log('PAGEID', pageId);

		    new Confirmation({
			message: "Are you sure you would like to remove this page?",
			title: "Remove Page",
			cancelText: "Cancel",
			okText: "Ok",
			success: true
		    }, function (ok) {
			remove.page(pageId);
			slidePanel.closePanel();			
		    });
		},

		post() {
		},
	    }
        }
    };

    hide = {
        form: {},
        confirmation: {}
    }
}
