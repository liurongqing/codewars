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

 const s = 'The quick brown fox jumps over The lazy dog'

 function checkPangram(s) {
   const letter = Array.from({ length: 26 }, (v, index) => String.fromCharCode(65 + index))
   console.log('lette1r')
 }
 
 checkPangram(s)
 
 console.log('2..1231231121.')
 
 