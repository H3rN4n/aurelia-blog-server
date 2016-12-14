'use strict';

module.exports = function (Group) {

    Group.observe('loaded', function setDefaultUsername(ctx, next) {
        if (!ctx.instance) {
            next();
            return;
        }
        var promise = new Promise(function (res, rej) {
            var groupUsers = ctx.instance.users ? ctx.instance.users() : [];
            var query = { where: { or: [] } };
            if (!groupUsers || !groupUsers.length) res();

            groupUsers.forEach(function (user) {
                query.where.or.push({ id: user.userId });
            });

            ctx.Model.app.models.user.find(query, function (err, users) {
                groupUsers.forEach(function (groupUser) {
                    users.forEach(function (user) {
                        if(groupUser.userId && user.id && groupUser.userId.id === user.id.id){
                            Object.assign(groupUser, user);
                        }
                    });
                });
                res();
            });
        });
        promise.then(next);
    });

};