exports.action = function (data, callback) {
	Avatar.speak('Je mapelle Avatar, je suis une intelligence artificielle conçu pour vous servir au mieux dans la vie de tout les jours.', data.client, function(){
		Avatar.Speech.end(data.client);
		});
	callback();
}