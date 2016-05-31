// import { Meteor } from 'meteor/meteor';
//
// Meteor.startup(() => {
//   // code to run on server at startup
// });
import { check } from 'meteor/check'
import { ResolutionCollection } from '../imports/collections/resolution_collection.js'

Meteor.publish('allResolutions', function(){
	return ResolutionCollection.find({});
})

Meteor.publish('userResolutions', function(){
	return ResolutionCollection.find({owner: this.userId});
})
Meteor.publish('singleResolution', function(id){
	check(id, String);
	return ResolutionCollection.find({_id:id});
})