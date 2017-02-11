'use strict';

module.exports = function(Owner) {
  Owner.validatesLengthOf('username', { min: 5, message: { min: 'Name should have at least 5 characters' } });
  Owner.validatesUniquenessOf('username', {message: 'username is not unique'});
};
