import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const ResolutionCollection = new Mongo.Collection('resolutions');

Meteor.methods({
	addResolution(resolution) {
		check(resolution, String);
		if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    } else if(resolution === ''){
    	throw new Meteor.Error('blank-resolution');
    }
		ResolutionCollection.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      owner: Meteor.userId(),
    });
	},
	toggleChecked(resolution) {
		check(resolution, Object);
		if( Meteor.userId() !== resolution.owner) {
      throw new Meteor.Error('not-authorized');
    }
		ResolutionCollection.update(resolution._id, {
			$set: { complete: !resolution.complete	}
		});
	},
	deleteResolution(resolution) {
		check(resolution, Object);
		if( Meteor.userId() !== resolution.owner) {
      throw new Meteor.Error('not-authorized');
    }
		ResolutionCollection.remove(resolution._id);
	}
})
