// Grade Calculator – Ask the user for their marks (0-100).
// Assign grades based on the range:

// 90-100: A

// 80-89: B

// 70-79: C

// 60-69: D

// Below 60: F

function gradeCalculator(grade){
    if(grade>=90 && grade<=100){
        console.log("A")
    }else if(grade>=80 && grade < 90){
        console.log("B")
    }else if(grade>=70 && grade < 80){
        console.log("C")
    }else if(grade>=60 && grade < 70){
        console.log("D")
    }else{
        console.log("F")
    }
}

let grade = parseInt(prompt("Enter your grades: "));
gradeCalculator(grade);