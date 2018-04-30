class Driver{
	constructor(name, startDate){
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(date){
		return date - this.startDate.getFullYear(); 
	}

}

class Route{
	constructor(beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled(){
		let eastWest = ['1st Avenue', '2nd Avenue', 
						'3rd Avenue', 'Lexington Avenue', 
						'Park', 'Madison Avenue', '5th Avenue'];
		let vertical = Math.abs(parseInt(this.endingLocation.vertical) - 
								parseInt(this.beginningLocation.vertical));

		let horizontal = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - 
						 eastWest.indexOf(this.beginningLocation.horizontal));
		return vertical + horizontal;
	}

	estimatedTime(isPeak = false){
		return(isPeak ? this.blocksTravelled()/2 : this.blocksTravelled()/3);
	}

}