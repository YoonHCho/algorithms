function solution(inputString) {
    var stringReversed = '';
    for (var i = inputString.length - 1; i >= 0; i--) {
        stringReversed += inputString[i];
    }
    if (inputString === stringReversed) {
        return true;
    } else {
        return false;
    }
    // return (inputString.split('').reverse().join('') === inputString);
}