

var createDotRow = function(){
  var dotsContainer = document.getElementById('dots-container')
  for (var i=29; i>0; i--){
    var newDot = document.createElement('div');
    newDot.className = 'dot'
    dotsContainer.appendChild(newDot)
  }
}

var createWhiteDotRow = function(){
  var dotsContainer = document.getElementById('dots-container')
  for (var i=29; i>0; i--){
    if (i == 15){
      var newDot = document.createElement('div');
      newDot.className = 'tear'
      dotsContainer.appendChild(newDot)
    } else {
      var newDot = document.createElement('div');
      newDot.className = 'dot'
      dotsContainer.appendChild(newDot)
    }
  }
}

var fillDotContainer = function(){
  for (var j=25; j>0; j--){
    if (j == 16 || j == 18 || j == 20){
      createWhiteDotRow();
    } else {
      createDotRow();
    }
  }
}



fillDotContainer()
