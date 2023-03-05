import React, { useState } from 'react'
import AboutNavBar from './AboutNavBar.js'
import HomeNavBar from './HomeNavBar.js'
import SelectBikeNavBar from './SelectBikeNavBar.js'


const NavBar = () => {
	
	const [ isAbout, isAboutState ] = useState(false)
	const [ isSelectBike, isSelectBikeState ] = useState(false)

	const isAboutUpdated = () => {
		if(isSelectBike){
			isSelectBikeState(false)
		}
		return isAboutState(true)
	}

	const isSelectBikeUpdated = () => {
		if(isAbout){
			isAboutState(false)
		}
		return isSelectBikeState(true)
	}
		

	const useHomeNavBar = () => {
		isSelectBikeState(false)
		isAboutState(false)
	}
	
	if(isSelectBike) {
		return <SelectBikeNavBar 
		useHomeNavBar={useHomeNavBar}
		isAboutUpdated={isAboutUpdated}/>
	}
	if(isAbout) {
		return <AboutNavBar 
		useHomeNavBar={useHomeNavBar}
		isSelectBikeUpdated={isSelectBikeUpdated}/>
	}

	return <HomeNavBar 
		isAboutUpdated={isAboutUpdated}
		isSelectBikeUpdated={isSelectBikeUpdated}/>
}

export default NavBar