
Template.registerHelper('getPageList', () => {
    return get.pageList();
});

Template.registerHelper('showFormForNewPage', () => {
    return show.form.for.new.page;
});


Template.registerHelper('showFormForNewPost', () => {
    return show.form.for.new.post;
});