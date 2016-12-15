module.exports = function (user) {

  // Set the username to the users email address by default.

  // Hooks
  // access
  // before save
  // after save
  // before delete
  // after delete
  // loaded
  // persist

  user.observe('loaded', function setDefaultUsername(ctx, next) {
        console.log(ctx.instance);
        if (!ctx.instance) {
            next();
            return;
        }
        var promise = new Promise(function (res, rej) {
            var userGroups = ctx.instance.groups ? ctx.instance.groups() : [];
            var query = { where: { or: [] } };
            if (!userGroups || !userGroups.length) res();

            userGroups.forEach(function (group) {
                query.where.or.push({ id: group.groupId });
            });
            console.log('query.where.or');
            console.log(query.where.or);
            
            console.log('userGroups');
            console.log(userGroups);

            ctx.Model.app.models.group.find(query, function (err, groups) {
              console.log('GROUPS');
                console.log(groups);

                userGroups.forEach(function (userGroup) {
                    groups.forEach(function (group) {
                      console.log('VALIDATION');
                      console.log(userGroup.groupId && group.id && userGroup.groupId.id === group.id.id);

                        if(userGroup.groupId && group.id && userGroup.groupId.id === group.id.id){
                            group.relationId = userGroup.id;
                            console.log(userGroup, group);
                            Object.assign(userGroup, group);
                        }
                    });
                });
                res();
            });
        });
        promise.then(next);
    });

  user.observe('before save', function setDefaultUsername(ctx, next) {
    if (ctx.instance) {
      if(ctx.isNewInstance) {
        ctx.instance.username = ctx.instance.email;
      }
      if(ctx.instance.firstName && ctx.instance.lastName){
        ctx.instance.fullName = ctx.instance.firstName + ' ' + ctx.instance.lastName;
      }
      ctx.instance.status = 'created';
      ctx.instance.created = Date.now();
    }
    next();
  });

};
