FlowRouter.route('/', {
    name: 'home',
    action: (params,) => {
        BlazeLayout.render("MainLayout", {
            header: "Header", 
            content: "MainContent",
            footer: "Footer"
        });
    }
});

FlowRouter.route('/:page-slug', {
    name: 'page'

})

