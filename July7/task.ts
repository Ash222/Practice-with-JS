class Task {
  // method to count the number of occurences of particular character in the given string
  countNumberOfOccurence(str: string, strToSearch: string): number {
    let numberOfOccurence: number[] = [];

    for (
      let index = str.indexOf(strToSearch);
      index !== -1;
      index = str.indexOf(strToSearch, index + 1)
    ) {
      numberOfOccurence.push(index);
    }

    return numberOfOccurence.length;
  }

  // method to extract duplicate letters from string
  extractDuplicateLetter(fromString: string): string {
    const str: string = fromString;
    let result = "";

    for (let i = 0; i < str.length; i++) {
      if (result.indexOf(str.charAt(i)) == -1) {
        result = result + str[i];
      }
    }
    console.log(str);
    return result;
  }

  // method check if the string is balanced paranthesis
  checkBalancedParanthesis(str: string): boolean {
    let stack: string[] = [];

    const rank = {
      "(": 1,
      ")": 1.2,
      "{": 2,
      "}": 2.2,
      "[": 3,
      "]": 3.2,
      openingClosing: function (stackStr: string, checkStr: string): boolean {
        if (
          rank[stackStr] === parseInt(rank[checkStr]) &&
          rank[stackStr] < rank[checkStr]
        )
          return true;
        return false;
      },
    };

    stack.push(str[0]);

    for (let index = 1; index < str.length; index++) {
      if (rank.openingClosing(stack[stack.length - 1], str[index])) {
        stack.pop();
      } else {
        stack.push(str[index]);
      }
    }

    return stack.length == 0 ? true : false;
  }
}

console.log(new Task().countNumberOfOccurence("w3resource.com", "o"));

console.log(
  new Task().extractDuplicateLetter("thequickbrownfoxjumpsoverthelazydog")
);

console.log(new Task().checkBalancedParanthesis("((({}())))"));
