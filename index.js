function moveDodgerright() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var left = parseInt(rightNumbers, 10)
 
  if (right > 0) {
    dodger.style.right = '${right - 1}px'
  }
}