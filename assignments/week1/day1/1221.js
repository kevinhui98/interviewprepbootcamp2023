var balancedStringSplit = function (s) {
    let left = 0;
    let right = 0;
    let SplitCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "R") {
            right += 1;
        } else {
            left += 1;
        }
        if (left == right) {
            SplitCount += 1
            left = 0
            right = 0
        }
    }
    return SplitCount
};