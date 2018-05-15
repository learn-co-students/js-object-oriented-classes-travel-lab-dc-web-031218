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

class Route{
	constructor(beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}

	blocksTravelled(){
		let blocksTravelled = this.endingLocation.vertical -this.beginningLocation.vertical;
		return blocksTravelled;
	}

	estimatedTime(){
		let minutes = this.blocksTravelled() / 3;
		return minutes;
	}
}
