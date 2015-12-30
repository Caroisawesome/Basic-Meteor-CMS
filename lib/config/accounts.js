Accounts.ui.config();

Accounts.onCreateUser(function(options, user) {
    Sites.insert({})
    return user;
});
