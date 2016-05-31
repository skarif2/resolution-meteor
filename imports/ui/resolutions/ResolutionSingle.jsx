import React, { Component } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import { ResolutionCollection } from '../../collections/resolution_collection.js'

export default class ResolutionSingle extends TrackerReact(Component) {
  constructor() {
    super();
    let id = FlowRouter.getParam('id');
    this.state = {
      subscription: {
        resolution: Meteor.subscribe('singleResolution', id)
      }
    }
  }
  
  componentWillUnmount() {
      this.state.subscription.resolution.stop();  
  }

  resolution() {
    return ResolutionCollection.findOne(this.props.id);
  }

  render() {
    let res = this.resolution();
    if(!res) {
      return(
        <div>
          <h1>Resolution</h1>
          <p>Loading...</p>
        </div>
      )
    }
    return(
      <div>
        <h1>Resolution</h1>
        {res.text}
      </div>
    )
  }
}
