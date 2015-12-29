Sites = new Mongo.Collection(COLLECTION.SITES);

SitesSchema = new SimpleSchema({
    title: {
        type: String,
    },

    socialMedia: {
	type: Object,
	optional:true
    }

});

Sites.attachSchema(SitesSchema);
