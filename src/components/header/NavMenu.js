import React, { Component } from 'react'

class NavMenu extends Component {


	render() {

		return (
			<div {...this.props}>
				<div className="lines u-pointer">
					<div className="caret"></div>
				</div>

			</div>
		)
	}
}

export default NavMenu