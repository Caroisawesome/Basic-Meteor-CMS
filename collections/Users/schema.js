const UserSchema = new SimpleSchema({
    emails: {
        type: [ Object ],
        optional: true
    },
    'emails.$.address': {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    'emails.$.verified': {
        type: Boolean,
        defaultValue: false
    },

    profile: {
        type: Object,
        optional: true
    },

    'profile.displayName': {
        type: Object,
        optional: true
    }
});

Meteor.users.attachSchema(UserSchema);