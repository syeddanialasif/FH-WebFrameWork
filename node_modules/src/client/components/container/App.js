import React from "react"
import NavigationContainer from "./NavigationContainer"

const App = React.createClass({
	render: function() {
		return(
			<div>
				<NavigationContainer />				
				{this.props.children}
				<hr/>
				<h5>					


				</h5>

			</div>	
		)	
	}
})

export default App