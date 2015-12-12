get = {
    pageList: () => {
        return Pages.find().fetch();
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

                    post: () => {}
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