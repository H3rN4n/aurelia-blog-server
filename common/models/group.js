'use strict';

module.exports = function(Group) {

    Group.embedsMany(User, {
        as: 'user', // default to the relation name - address
        property: 'users' // default to addressItem
    });

};
