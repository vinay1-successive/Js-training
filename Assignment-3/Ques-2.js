// 2. Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10

const pattern1 = () => {
  let value = 1;
  let lines = 1;
  while (lines < 5) {
    let j = 0;
    let ans = "";
    while (j++ < lines) {
      ans = ans + value + " ";
      value++;
    }
    lines++;
    console.log(ans.trim());
  }
};

// 1
// 2 2
// 3 3 3
// 4 4 4 4

const pattern2 = () => {
  let value = 1;
  let lines = 1;
  while (lines < 5) {
    let j = 0;
    let ans = "";
    while (j++ < lines) {
      ans = ans + value + " ";
    }
    value++;
    lines++;
    console.log(ans.trim());
  }
};

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const pattern3 = () => {
  let lines = 1;
  let end = 5;
  while (lines < 10) {
    let start = end;
    let curr = 1;
    let ans = "";
    while (curr <= start) {
      ans += curr + " ";
      curr++;
    }

    if (lines >= 5) {
      end++;
    } else {
      end--;
    }
    console.log(ans);
    lines++;
  }
};

pattern1();
console.log();
pattern2();
console.log();
pattern3();
