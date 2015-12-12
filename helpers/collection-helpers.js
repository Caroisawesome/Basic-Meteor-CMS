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


if (Meteor.isClient) {
    show = {
        form: { 
            for: {
                new: {
                    page: () => {
                        slidePanel.showPanel('newPageForm')
                    },

                    post: () => {
                        slidePanel.showPanel('newPostForm')
                    }
                },

                edit: {
                    siteTitle: () => {
                        slidePanel.showPanel('template', data);
                    },

                    navigationLinks: () => {
                        slidePanel.showPanel(template, data);
                    }
                }
            }

        },

        confirmation: {
            remove: {}
        }
    };

    hide = {
        form: {},
        confirmation: {}
    }
}