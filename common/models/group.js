'use strict';

module.exports = function (Group) {

    Group.observe('loaded', function setDefaultUsername(ctx, next) {
        if(!ctx.instance){
            next();
            return;
        }
        var promise = new Promise(function (res, rej) {
            var groupUsers = ctx.instance.users ? ctx.instance.users() : [];

            if (!groupUsers || !groupUsers.length) res();

            for (var i = 0; i < groupUsers.length; i++) {
                var userId = groupUsers[i].userId;
                (function (counter) {
                    ctx.Model.app.models.user.findById(userId, function (err, user) {
                        if (err) return;
                        Object.assign(groupUsers[counter], user)
                        if (counter === groupUsers.length - 1) res();
                    });
                })(i);
            }
        });
        promise.then(next);
    });

};