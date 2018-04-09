/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(lol) {
    message = "";
    for(var i=1; i <= lol; i++) {
      message += "ha";
    }
        return message + "!";
}
console.log(laugh(10));
