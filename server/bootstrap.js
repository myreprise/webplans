Meteor.startup(function(){
	if(Meteor.users.find().count() < 1){
		var users = [
			{
				name: "Superuser",
				email: "admin@example.com",
				roles: ['admin']
			}
		];

		_.each(users, function(user){
			var id;

			id = Accounts.createUser({
				email: user.email,
				password: "password",
				profile: {
					name: user.name
				}
			});

			if(user.roles.length > 0){
				Roles.addUsersToRoles(id, user.roles);
			}
		});
	}
});