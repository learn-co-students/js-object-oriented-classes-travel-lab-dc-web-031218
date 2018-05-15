class Driver {
	constructor(name, date){
		this.name = name
		this.startDate = new Date(date);
	}

	yearsExperienceFromBeginningOf(endDate){
		let startYear = this.startDate.getFullYear();
		let years = endDate - startYear;
		return years;
	}
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route{
	constructor(beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}

	blocksTravelled(){
		let blocksTravelledVertical = this.endingLocation.vertical - this.beginningLocation.vertical;
		let blocksTravelledHorizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
		let blocksTravelled = blocksTravelledHorizontal + blocksTravelledVertical
		return blocksTravelled;
	}

	estimatedTime(boolean){
		if(boolean){
			let minutes = this.blocksTravelled()/2;
			return minutes;
		} else {
			let minutes = this.blocksTravelled() / 3;
			return minutes;
		}
	}
}
