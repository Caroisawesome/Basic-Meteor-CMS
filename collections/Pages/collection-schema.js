Pages = new Mongo.Collection(COLLECTION.PAGES);

PageSchema = new SimpleSchema({
    _userId: {
        type: String
    },

    title: {
        type: String
    },

    slug: {
        type: String
    },

    _order: {
        type: Number
    },

    containerWidth: {
        type: String,
        optional: true
    }

});

Pages.attachSchema(PageSchema);