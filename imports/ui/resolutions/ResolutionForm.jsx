import React, { Component } from 'react'

import { ResolutionCollection } from '../../collections/resolution_collection.js'

export default class ResolutionForm extends Component {
  addResolution(event) {
    event.preventDefault();
    let text = this.refs.resolution.value.trim();

    Meteor.call('addResolution', text, (error, data) => {
      if(error && error.error === 'not-authorized') {
        Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
      } else if (error && error.error === 'blank-resolution') {        
        Bert.alert('Please write something in resolution', 'danger', 'fixed-top', 'fa-frown-o');
      } else {
        this.refs.resolution.value = '';        
      }
    });    
  }

  render() {
    return(
      <form className='new-resolution' onSubmit={this.addResolution.bind(this)}>
        <input
          type='text'
          ref='resolution'
          placeholder='Add new resolution'
        />
      </form>
    )
  }
}
