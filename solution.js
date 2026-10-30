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
