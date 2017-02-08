function mostFrequentItemCount(collection) {
    collection.sort();
    var currentCount = 1;
    var maxCount = 0;

    if(collection.length == 0) {
        return 0;
        }

    for (var i = 0; i < collection.length; i++) {
        if ((collection[i] !== collection[i+1])  && (maxCount < currentCount)) {
   
        maxCount = currentCount;
        currentCount = 1;
  
        } else if (collection[i] !== collection[i+1]) { 
        currentCount = 1;
  
        } else {
        currentCount++;
        }
  
    }
  return maxCount;
  }