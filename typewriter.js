const sentence = "hello there from lighthouse labs";

const typewriter = function(str) {

  let stringArray = str.split("");
  if (stringArray[0] !== undefined) {

    setTimeout(() => {

      let firstNum = stringArray.shift();
      process.stdout.write(firstNum);
      return typewriter(stringArray.join(''));


    }, 50);

    
  } else {

    setTimeout(() => process.stdout.write("\n"), 200);

  }

  
};

typewriter(sentence);