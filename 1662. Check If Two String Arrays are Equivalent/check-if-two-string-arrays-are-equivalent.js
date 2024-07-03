/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let word1Data = word1;
    let word2Data = word2;
    let string1 = "";
    let string2 = "";
    for (const singleRecord of word1Data) {
        string1 += singleRecord;
    }
    for (const singleRecord of word2Data) {
        string2 += singleRecord;
    }
    if (string1 === string2) {
        return true;
    } else {
        return false;
    }
};