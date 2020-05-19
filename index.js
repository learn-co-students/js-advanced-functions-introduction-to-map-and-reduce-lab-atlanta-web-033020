// Your code here
function mapToNegativize(sourceArray) {
  const newArray = [];
  for (const element of sourceArray) {
    newArray.push(element * -1);
  }
  return newArray;
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  const newArray = [];
  for (const element of sourceArray) {
    newArray.push(element * 2);
  }
  return newArray;
}

function mapToSquare(sourceArray) {
  const newArray = [];
  for (const element of sourceArray) {
    newArray.push(element ** 2);
  }
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint;
  for (const element of sourceArray) {
    total += element;
  }
  return total;
}

function reduceToAllTrue(sourceArray) {
  let result = true;
  for (const element of sourceArray) {
    result = result && !!element;
  }
  return result;
}

function reduceToAnyTrue(sourceArray) {
  for (const element of sourceArray) {
    if (!!element)
      return true;
  }
  return false;
}