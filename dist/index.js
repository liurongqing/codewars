"use strict";
/**
 * 6 kyu
 * Detect Pangram
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */
/**
 * 全字母短句
 * 一个字符串的句子，包含26个字母则返回 true，否则返回 false
 */
var s = 'The quick brown fox jumps over The lazy dog';
function checkPangram(s) {
    var letter = Array.from({ length: 26 }, function (v, index) { return String.fromCharCode(65 + index); });
    var upString = s.toLocaleUpperCase();
    return letter.some(function (v) { return upString.indexOf(v) !== -1; });
}
checkPangram(s);
console.log('2.1.1231231121.');
//# sourceMappingURL=index.js.map