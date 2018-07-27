// 给定一个字符串，找出不含有重复字符的最长子串的长度。

// 示例：

// 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

// 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

// 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。

/**
 * @param {string}
 * @return {number}
 */
// 暴力解决,无法通过测试(遇到复杂的时间太长)
var lengthOfLongestSubstring = function(s) {
  if(!s) return 0
  // let startIndex = 0 // 起始位置
  let uniqueStrLength = 1 // 字串长度
  const len = s.length
  let temArr = []
  let tempStr
  const isUnique = (str) => {
    temArr = str.split('')
    return temArr.length === new Set(temArr).size // 字符串的长度等于 Set 的长度则是唯一
  }
  
  for (let startLength=2; startLength <= len; startLength++) { // startLength: 每次字串的长度
    for (let i=0;i<=len-startLength;i++) { // 依次取出一定长度的数据
      tempStr = s.substr(i, startLength)
      if(isUnique(tempStr)) {
        uniqueStrLength = startLength
        break
      }
    }
  }
  
  return uniqueStrLength
};

// 看了下别人的思路
// https://github.com/chihungyu1116/leetcode-javascript/blob/master/3%20Longest%20Substring%20Without%20Repeating%20Characters.js
/**
 * @param {string} s
 * @return {number}
 */
// 思路:
// 循环一次,每次循环获取最大的长度,如果没有重复,长度加一,并与旧的max对比,取大的为max
// 遇到重复则去掉前一个重复字段的长度,重新计算长度,再进行比较
var lengthOfLongestSubstring = function(s) {
  if(s == null) return 0
  let len = 0
  let max = len
  let start = 0
  s = s.split('')
  const map = new Map()
  for(let i = 0; i < s.length; i++) {
    let val = s[i]
    if(map.has(val) && map.get(val) >= start) { // 存在重复的字符,且在正在处理的长度之内
      start = map.get(val) + 1
      len = i - start
    }
    len++
    max = Math.max(max, len)
    map.set(val, i)
  }
  return max
}