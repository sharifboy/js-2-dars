// let num = prompt("Son kiriting");

if (num % 2 == 1) {
    alert("Siz toq son kiritdingiz");
} else if (num == 0) {
    alert("iltimos natural son kiriting");
} else {
    alert("Siz juft sonkiritdingiz");
}

// let result = prompt("enter text");

// alert(result.split(""));

// let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum amet alias ratione, veritatis laborum dolorum provident facilis quos molestiae possimus labore magni, nobis quis voluptates praesentium totam mollitia abs.";

console.log(text.split("."));

let text = prompt("Enter text");

alert(text.split("").reverse().join(""));

Palindrom

let foo = prompt("Enter Text");
if (foo == foo.split("").reverse().join("")) {
    alert("polidrom");
} else {
    alert("polidrom emas");
}