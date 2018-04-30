class Driver{
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date);
  }
  yearsExperienceFromBeginningOf(endYear){
    return endYear - this.startDate.getFullYear();
  }

}//end Driver Class
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
    if(this.endingLocation.vertical > this.beginningLocation.vertical){
      let vert =  this.endingLocation.vertical - this.beginningLocation.vertical;
        let oneHor = 0;
        let twoHor = 0;
        for(const el in eastWest){
          if(eastWest[el] === this.beginningLocation.horizontal)
          {
            oneHor = el
          }
          if(eastWest[el] === this.endingLocation.horizontal)
          {
            twoHor = el
          }
        }
      let hor = twoHor - oneHor
      return vert + hor;
    }
    else{
      let vert =  this.beginningLocation.vertical - this.endingLocation.vertical;
        let oneHor = 0;
        let twoHor = 0;
        for(const el in eastWest){
          if(eastWest[el] === this.beginningLocation.horizontal)
          {
            oneHor = el
          }
          if(eastWest[el] === this.endingLocation.horizontal)
          {
            twoHor = el
          }
        }
      let hor = twoHor - oneHor
      return vert + hor;
    }
  }
  estimatedTime(peak = false){
    if(peak){
      return this.blocksTravelled() / 2;
    }
    else{
      return this.blocksTravelled() / 3;
    }
  }
}
