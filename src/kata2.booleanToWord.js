const booleanToWord = boolean => {
    if (boolean === true) {
        return "Yes";
    } else {
        return "No";
    }
};

module.exports = booleanToWord;

// this misses some edge cases but I think for now will do.