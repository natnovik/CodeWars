// first method
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
    };

// second method
/* var isAnagram = function(test, original) {
    let result;
    if (test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("")){
      result = true;
    }else{
      result=false;
    }
    return result;
  }; */

// third method

/* String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
  }
  
  var isAnagram = function(test, original) {
    
    return test.sortLetters() == original.sortLetters();
  }; */