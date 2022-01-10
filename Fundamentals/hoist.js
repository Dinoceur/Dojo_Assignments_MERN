// 1.
console.log(hello);                                   
var hello = 'world';    
// AFTER HOIST
var hello ;
console.log(hello); // output: undefined
hello = 'world';

// 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOIST
var needle;
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle); // output: magnet
}
needle = 'haystack';
test();

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOIST
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); // output: super cool

// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOIST
var food;
food = 'chicken';
console.log(food); // output: chicken
function eat(){
    food = 'half chicken';
    console.log(food); // output: half-chicken
    food = 'gone';
}
eat();

// 5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOIST
// mean is not a function

// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOIST
var genre;
console.log(genre); // output: undefined
genre = 'disco';
function rewind() {
    genre = 'rock';
    console.log(genre); // output: rock
    genre = 'r&b';
    console.log(genre); // output: r&b
}
rewind();
console.log(genre); // output: disco

// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOIST
dojo = 'san jose';
console.log(dojo); // output: san jose
function learn() {
    var dojo;
    dojo = 'seattle'; 
    console.log(dojo); // output: seattle
    dojo = 'burbank';
    console.log(dojo); // output: burbank
}
learn();
console.log(dojo); // output: san jose
