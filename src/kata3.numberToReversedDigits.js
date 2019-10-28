const numberToReversedDigits = number => {
    number = number + "";
    let reverseNumber = number.split("").reverse().join("");
    return Math.floor(reverseNumber);
};

module.exports = numberToReversedDigits;
