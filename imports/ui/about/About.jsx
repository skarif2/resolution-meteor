import React, { Component } from 'react'

export default class About extends Component {
	setVar() {
		Session.set('Meteor.loginButtons.dropdownVisible', 'true')
	}
	render() {
		return(
			<div>
				<h1>This is about page</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id</p>
				<button onClick={this.setVar}>Click Me</button>
			</div>
		)
	}
}