// Problem 1: Staircase
function staircase(n) {
  if (typeof n !== "number" || n <= 0) return "";
  const lines = [];
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    lines.push(spaces + hashes);
  }
  return lines.join("\n");
}

// Problem 2: Grading Students
function gradingStudents(grades) {
  if (!Array.isArray(grades)) return [];
  return grades.map(grade => {
    if (grade < 38) {
      return grade;
    }
    const remainder = grade % 5;
    if (remainder >= 3) {
      return grade + (5 - remainder);
    }
    return grade;
  });
}

// Problem 3: Time Conversion
function timeConversion(s) {
  if (typeof s !== "string" || s.length < 10) return "";
  const modifier = s.slice(-2);
  const timeBody = s.slice(0, -2);
  const parts = timeBody.split(":");
  let hours = parseInt(parts[0], 10);
  const minutes = parts[1];
  const seconds = parts[2];

  if (modifier === "AM") {
    if (hours === 12) {
      hours = 0;
    }
  } else if (modifier === "PM") {
    if (hours !== 12) {
      hours += 12;
    }
  }

  const formattedHours = String(hours).padStart(2, "0");
  return `${formattedHours}:${minutes}:${seconds}`;
}

// Problem 4: String Repeat
function repeatStr(n, s) {
  if (typeof n !== "number" || n <= 0 || typeof s !== "string") return "";
  return s.repeat(n);
}

// Problem 5: Reversed Strings
function solution(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

// Problem 6: Sum of Positive
function positiveSum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Problem 7: Grasshopper — Summation
function summation(num) {
  if (typeof num !== "number" || num <= 0) return 0;
  return (num * (num + 1)) / 2;
}

// Problem 8: Convert a Boolean to a String
function booleanToString(b) {
  return b ? "true" : "false";
}

// Problem 9: Fizz Buzz
function fizzBuzz(n) {
  if (typeof n !== "number" || n <= 0) return [];
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  return result;
}

// Problem 10: Running Sum of 1D Array
function runningSum(nums) {
  if (!Array.isArray(nums)) return [];
  const result = new Array(nums.length);
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    result[i] = currentSum;
  }
  return result;
}

// Problem 11: Richest Customer Wealth
function maximumWealth(accounts) {
  if (!Array.isArray(accounts) || accounts.length === 0) return 0;
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    const row = accounts[i];
    let rowSum = 0;
    for (let j = 0; j < row.length; j++) {
      rowSum += row[j];
    }
    if (rowSum > maxWealth) {
      maxWealth = rowSum;
    }
  }
  return maxWealth;
}

// Problem 12: Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return 0;
  let write = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[write] = nums[i];
      write++;
    }
  }
  return write;
}

// Problem 13: Contains Duplicate
function containsDuplicate(nums) {
  if (!Array.isArray(nums) || nums.length <= 1) return false;
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }
  return false;
}

// Problem 14: Move Zeroes
function moveZeroes(nums) {
  if (!Array.isArray(nums) || nums.length <= 1) return;
  let write = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (write !== i) {
        const temp = nums[write];
        nums[write] = nums[i];
        nums[i] = temp;
      }
      write++;
    }
  }
}

// Problem 15: Merge Sorted Array
function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
}

// Problem 16: 3Sum
function threeSum(nums) {
  const result = [];
  if (!Array.isArray(nums) || nums.length < 3) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Problem 17: Plus One
function plusOne(digits) {
  if (!Array.isArray(digits) || digits.length === 0) return [1];
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0;
  }
  result.unshift(1);
  return result;
}

// Problem 18: Reverse String
function reverseString(s) {
  if (!Array.isArray(s) || s.length <= 1) return;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}

// Problem 19: Length of Last Word
function lengthOfLastWord(s) {
  if (typeof s !== "string") return 0;
  let length = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
}

// Problem 20: Longest Common Prefix
function longestCommonPrefix(strs) {
  if (!Array.isArray(strs) || strs.length === 0) return "";
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}
