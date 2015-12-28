
Template.registerHelper('getPageList', function() {
    return get.pageList();
});

Template.registerHelper('showFormForNewPage', function() {
    return show.form.for.new.page;
});


Template.registerHelper('showFormForNewPost', function() {
    return show.form.for.new.post;
});

Template.registerHelper('showFormForEditPost', function() {
    return show.form.for.edit.post;
});

Template.registerHelper('showFormForEditSiteTitle', function() {
    return show.form.for.edit.siteTitle.bind(this);
});

Template.registerHelper('showFormForEditPage', function() {
    return show.form.for.edit.page.bind(this);
});

Template.registerHelper('showConfirmationRemovePage', function() {
    console.log('UI HELPER THIS', this);
    return show.confirmation.remove.page.bind(this);
});

Template.registerHelper('showConfirmationRemovePost', function() {
    return show.confirmation.remove.post.bind(this);
});
