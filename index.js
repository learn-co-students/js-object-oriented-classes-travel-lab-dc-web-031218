class Driver{
  constructor(name, day ){
    this.name = name;
    this.startDate  = new Date(`${day.split(/[ |,]+/)[2]}`,'01','01');
  }
  yearsExperienceFromBeginningOf(year){
    console.log(this.startDate);
    return year - this.startDate.getFullYear();
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    console.log(arguments);
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let lateral = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    console.log(lateral);
    let medial = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical);
    return lateral + medial;
  }

  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }

  }
}
