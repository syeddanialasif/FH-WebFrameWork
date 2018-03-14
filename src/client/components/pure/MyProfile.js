import React from "react"

const MyProfile = React.createClass({
	render: function() {
		return(
			<div>
				<h2>My Profilew</h2>
				<p>You're seeing this page because you logged in successfully! Try logging out, clicking the MyProfile link and then completing the login. You wil notice that it redirects you to MyProfile page :)</p>
			<input type="text" value="" placeholder="name" /> <br>
			<input type="email" value="" placeholder="email" /> <br>
			<input type="password" value="" placeholder="password" /> <br>
			</div>
		)
	}
})

export default MyProfile