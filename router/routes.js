FlowRouter.route('/', {
    name: 'home',
    action: (params) => {
        BlazeLayout.render("MainLayout", {
            header: "Header", 
            content: "MainContent",
            footer: "Footer"
        });
    }
});


FlowRouter.route('/admin', {
    name: 'admin',
    action: (params) => {
	BlazeLayout.render("signIn");
    }
});

FlowRouter.route('/:pageSlug', {
    name: 'page',
    action: (params) => {
        const page = Pages.findOne({ slug: params.pageSlug });

        if (page) {
            BlazeLayout.render("MainLayout", {
                header: "Header", 
                content: "MainContent",
                footer: "Footer"
            });
        } else {
            BlazeLayout.render('notFound');
        }
    }

})

