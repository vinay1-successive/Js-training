// 3. Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
//  *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *
const Pattern = () => {
  let lines = 1;
  let space = 4;
  let end = 1; 
  while (lines < 10) {
    let start = end;

    let sp = 0;
    let ans = "";
    while (sp < space) {
      ans += " ";
      sp++;
    }
    let curr = 1;

    while (curr <= start) {
      ans += "* ";
      curr++;
    }

    if (lines >= 5) {
      end--;
      space++;
    } else {
      end++;
      space--;
    }
    console.log(ans);
    lines++;
  }
};

Pattern();
