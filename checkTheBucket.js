function checkTheBucket(bucket){
  for (var i = 0; i < bucket.length; i++) {
        if (bucket[i] === "gold") {
            return true;
        }
    }
    return false;
}