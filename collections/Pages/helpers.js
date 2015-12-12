Pages.helpers({
    getUrl() {
        return `/${this.slug}`;
    },
    getPosts() {
        return Posts.find({_pageId: this._id }).fetch()
    }

});