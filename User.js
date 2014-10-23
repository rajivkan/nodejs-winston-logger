var user;
function setUser(userObj) {
	user = userObj;
}

function getUserName() {
	return user.name;
}

module.exports = function() {
  return {
    setUser: setUser,
    getUserName: getUserName
  }
}