Pages = new Mongo.Collection(COLLECTION.PAGES);

PageSchema = new SimpleSchema({
    _userId: {
        type: String,
        defaultValue: 'temporary-no-user'
    },

    title: {
        type: String
    },

    slug: {
        type: String
    },

    _order: {
        type: Number,
        defaultValue: 1
    },

    containerWidth: {
        type: String,
        optional: true
    }

});

Pages.attachSchema(PageSchema);