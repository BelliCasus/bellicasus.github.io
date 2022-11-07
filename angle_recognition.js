

let max_angle = 90;
let margin_of_error = 10;
let horizontal_guide = true;
let vertical_guide = true;

let current_angle = 0;
let correct = 0;
let total_guessed = 0;


function guessAngle(a)
{
  if((a < current_angle + margin_of_error) && (a > current_angle - margin_of_error))
  {
    correct++;
    total_guessed++;
    return true;
  } else {
    total_guessed++;
    return false;
  }
}

function randomizeAngle()
{
  return Math.floor(max_angle * Math.random());
}
