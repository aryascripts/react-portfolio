import React, { Component } from 'react'
import Quotes from './Quotes'
import NavMenu from './NavMenu'

class Header extends Component {


	render() {

		return (
			<div>
				<div className='header-top'>

				</div>				
				<div className='header-bottom'>

					<Quotes className="quotes" />
					<NavMenu className="nav-button" />

				</div>

			</div>
		)
	}
}

export default Header