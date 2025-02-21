// Traffic Light System – Ask the user for a traffic light color (red,yellow, green). Print appropriate messages:
//Red: "Stop!"
//Yellow: "Get Ready!"
//Green: "Go!"

let color = prompt("Enter a color (Red, Yellow, Green):");

switch (color.toLowerCase()) { // Convert input to lowercase
  case "red":
    console.log(`Red: "Stop!"`);
    break;
  case "yellow":
    console.log(`Yellow: "Get Ready!"`);
    break;
  case "green":
    console.log(`Green: "Go!"`);
    break;
  default:
    console.log("Invalid color! Please enter Red, Yellow, or Green.");
}

