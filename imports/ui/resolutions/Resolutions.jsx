import React, { Component } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { ResolutionCollection } from '../../collections/resolution_collection.js'

import Resolution from './Resolution.jsx'
import ResolutionForm from './ResolutionForm.jsx'

export default class Resolutions extends TrackerReact(Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe('userResolutions')
      }
    }
  }

  componentWillUnmount() {
      this.state.subscription.resolutions.stop();  
  }

  resolutions() {
    return ResolutionCollection.find().fetch();
  }

  render() {
    return (
      <div>
        <h1>My Resolutions - {Session.get('test')}</h1>
        <ResolutionForm />
        <ul className="resolutions">
          <ReactCSSTransitionGroup
            transitionName='resolutionLoad'
            transitionEnterTimeout={600}
            transitionLeaveTimeout={400}
          >
            {this.resolutions().map((resolution) => {
            return <Resolution key={resolution._id} resolution={resolution} />;
          })}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
}
