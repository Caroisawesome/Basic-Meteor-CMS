Template.MainContent.onCreated(function() {
    this.pageSlug = new ReactiveVar();
    this.autorun(() => {
        this.pageSlug.set(FlowRouter.getParam("pageSlug"));
    });
});

Template.MainContent.helpers({
    getPageTitle() {
        const pageSlug = Template.instance().pageSlug.get();
        const page = Pages.findOne({slug: pageSlug});
        return page ? page.title : 'ERROR: NO PAGE FOUND';
    },

    pagePosts() {
        const pageSlug = Template.instance().pageSlug.get();
        const page = Pages.findOne({slug: pageSlug});
        return page.getPosts()
    }
})