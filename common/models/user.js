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
