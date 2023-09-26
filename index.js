// code your solution here
// Implement a function saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Implement a function mondayWork
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Implement a function wrapAdjective
  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing")); // Output: "You are !!!amazing!!!"
  