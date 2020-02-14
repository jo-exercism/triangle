//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1,
    this.side2 = side2,
    this.side3 = side3
  }

  isEquilateral() {
    let triangleSides = new Array(this.side1, this.side2, this.side3);

    let duplicates = triangleSides.filter((side, index) => triangleSides.indexOf(side) == index);
    return duplicates[0] && duplicates.length === 1 ? true : false;
  }

  isIsosceles() {
    let triangleSides = new Array(this.side1, this.side2, this.side3);

    let duplicates = triangleSides.filter((side, index) => triangleSides.indexOf(side) == index);
    if(duplicates.length === 2) {
      var validateTriangle = duplicates[0] * 2 >= duplicates[1] && duplicates[1] * 2 >= duplicates[0] ? true : false;
    }
    return duplicates.length === 1 || duplicates.length === 2 && validateTriangle ? true : false;
  }

  isScalene() {
    let triangleSides = new Array(this.side1, this.side2, this.side3);

    let duplicates = triangleSides.filter((side, index) => triangleSides.indexOf(side) == index);
    if(duplicates.length === 3) {
      let sortedArray = duplicates.sort((a, b) => b - a);
      var validateTriangle = sortedArray[1] + sortedArray[2] >= sortedArray[0] ? true : false;
    }
    return duplicates.length === 3 && validateTriangle ? true : false;
  }
}
