Posts = new Mongo.Collection(COLLECTION.POSTS);

PostSchema = new SimpleSchema({
    _pageId: {
        type: String,
        autoform: {
            type: 'hidden'
        }
    },

    _userId: {
        type: String,
        autoform: {
            type: 'hidden',
            value: () => Meteor.userId() || 'no-user'
        }
    },

    postType: {
        type: String,
        autoform: {
            options: () => _.values(OPTIONS.POSTS.POST_TYPES)            
        }
    },

    content: {
        type: String
    },

    imgSrc: {
        type: String,
        max: 600,
        optional: true,
        autoform: {
            type: 'fileUpload',
            label: 'Choose File'
        }
    },

    columnWidth: {
        type: String,
        defaultValue: OPTIONS.POSTS.COLUMNS_DEFAULT,
        autoform: {
            options: () => _.values(OPTIONS.POSTS.COLUMNS)
        }
    }

});

Posts.attachSchema(PostSchema);