function minDoses(hurdlesArr, natural_Jump) {
  var potionsNeeded = 0;
  hurdlesArr.map(function (el) {
    if (el > natural_Jump + potionsNeeded)
      potionsNeeded += el - (natural_Jump + potionsNeeded);
  });
  console.log(potionsNeeded);
}

minDoses([1, 6, 3, 5, 2], 4);
minDoses([2, 5, 4, 5, 2], 7);
