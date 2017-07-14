var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

    scores.sort(function(a,b){return b-a});

console.log(scores[0] + " is the highest grade.");

    scores.sort(function(a,b){return a-b});
console.log(scores[0] + " is the lowest grade.");

for (i = 0; i < scores.length; i++){
}
console.log("There are " + i + " grades");

var A = [];
var B = [];
var C = [];
var D = [];
var F = [];

var result = " ";

for (i = 0; i < scores.length; i++){

    if(scores[i] <= 60){
        scores[i] = "F";
        F.push("F");
    }else if (scores[i] <= 70){
        scores[i] = "D";
        D.push("D");
    }else if (scores[i] <= 80){
        scores[i] = "C";
        C.push("C");
    }else if (scores[i] <= 90){
        scores[i] = "B";
        B.push("B");
    }else {
        scores[i] = "A";
        A.push("A");
    }
    
}

console.log(F);
console.log(D);
console.log(C);
console.log(B);
console.log(A);
