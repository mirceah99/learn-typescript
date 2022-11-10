var myName = "mircea";
var myAge = 18;
var myBool = true;
// let foundMovie: string = null;
var iLoveYou = function (name) { return console.log("i love you ".concat(name, " !")); };
var iLoveYouDefault = function (name) {
    if (name === void 0) { name = "stranger"; }
    return console.log("i love you ".concat(name, " !"));
};
iLoveYou("mircea");
iLoveYouDefault();
var colors = ["red", "blue", "green"];
var upperColor = colors.map(function (color) {
    return color.toUpperCase();
});
console.log(upperColor);
// never type
function infiniteLoop() {
    while (1) {
        console.log("loading...");
    }
    throw "nope";
}
var x = infiniteLoop();
function test() {
    return undefined;
}
