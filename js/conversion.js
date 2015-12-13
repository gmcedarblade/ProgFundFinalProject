
function CalculateLeavening(eggs) {
  var output;
  var leaveningOptions = [
    {
      dryIngredient: "baking soda",
      dryMeasuringUnit: "tsp",
      dryIngredientAmt: 2,
      wetIngredient: "warm water",
      wetMeasuringUnit: "tbsp",
      wetIngredientAmt: 2
      
    },
    {
      dryIngredient: "baking powder",
      dryMeasuringUnit: "tsp",
      dryIngredientAmt: 1,
      wetIngredient: "vinegar",
      wetMeasuringUnit: "tsp",
      wetIngredientAmt: 1
    },
    {
      dryIngredient: "baker's yeast",
      dryMeasuringUnit: "tsp",
      dryIngredientAmt: 1,
      wetIngredient: "warm water",
      wetMeasuringUnit: "C",
      wetIngredientAmt: 0.25
    },
    {
      dryIngredient: "ground flaxseeds",
      dryMeasuringUnit: "tbsp",
      dryIngredientAmt: 1,
      wetIngredient: "warm water",
      wetMeasuringUnit: "tbsp",
      wetIngredientAmt: 3
    }
  
  ]; 
  
  output = "You will need to pick from one of the following: <br>";
  for(var index = 0; index < leaveningOptions.length; index++) {
    output += (eggs * leaveningOptions[index]["dryIngredientAmt"]) +
                " " + leaveningOptions[index]["dryMeasuringUnit"] + " of " + 
                leaveningOptions[index]["dryIngredient"] + " plus ";
    output += (eggs * leaveningOptions[index]["wetIngredientAmt"]) +
                " " + leaveningOptions[index]["wetMeasuringUnit"] +
                " " + leaveningOptions[index]["wetIngredient"] + "<br>";
  }
  
  return(output);
}

function CalculateBinding(eggs) {
  var bindingOptions = [
    {
      dryIngredient: "corn starch",
      dryMeasuringUnit: "tbsp",
      dryIngredientAmt: 2,
      wetIngredient: "water",
      wetMeasuringUnit: "tbsp",
      wetIngredientAmt: 2
    },
    {
      dryIngredient: "potato starch",
      dryMeasuringUnit: "tbsp",
      dryIngredientAmt: 2,
      wetIngredient: "water",
      wetMeasuringUnit: "tbsp",
      wetIngredientAmt: 2
    }
  ];
  var output = "You will need to pick from one of the following: <br>";
  for(var index = 0; index < bindingOptions.length; index++) {
    output += (eggs * bindingOptions[index]["dryIngredientAmt"]) +
                " " + bindingOptions[index]["dryMeasuringUnit"] + " of " + 
                bindingOptions[index]["dryIngredient"] + " plus ";
    output += (eggs * bindingOptions[index]["wetIngredientAmt"]) +
                " " + bindingOptions[index]["wetMeasuringUnit"] +
                " " + bindingOptions[index]["wetIngredient"] + "<br>";
  }
  
  return(output);
}

function CalculateCustardAndQuiche(eggs) {
  var custardAndQuicheOptions = [
    {
      ingredient: "pureed soft tofu",
      measuringUnit: "C",
      ingredientAmt: 0.25
    }
  ];
  
  var output = "You will need: <br>";
  for(var index = 0; index < custardAndQuicheOptions.length; index++) {
    output += (eggs * custardAndQuicheOptions[index]["ingredientAmt"]) +
                " " + custardAndQuicheOptions[index]["measuringUnit"] + 
                " of " + custardAndQuicheOptions[index]["ingredient"] + 
                "<br>";
  }
  
  return(output);
}

function CalculateMilk(milk, measuringUnit) {
  var milkOptions = [
    {
      milkType: "Soy",
      milkAmt: 1
    },
    {
      milkType: "Coconut",
      milkAmt: 1
    },
    {
      milkType: "Almond",
      milkAmt: 1
    },
    {
      milkType: "Rice",
      milkAmt: 1
    },
    {
      milkType: "Hemp",
      milkAmt: 1
    },
    {
      milkType: "Hazelnut",
      milkAmt: 1
    }
  ];
  
  var output = "You will need to pick from one of the following: <br>";
  for(var index = 0; index < milkOptions.length; index++) {
    output += (milk * milkOptions[index]["milkAmt"]) +
                " " + measuringUnit + " of " + 
                milkOptions[index]["milkType"] + " milk. <br>";
  }
  
  return(output);
}

function CalculateButter(butter, measuringUnit) {
  var butterOptions = [
    {
      ingredient: "Coconut Oil",
      ingredientAmt: 1,
      measuringUnit: measuringUnit
    },
    {
      ingredient: "Earth Balance Buttery Spread",
      ingredientAmt: 1,
      measuringUnit: measuringUnit
    },
    {
      ingredient: "Earth Balance Vegan Buttery Sticks",
      ingredientAmt: 1,
      measuringUnit: measuringUnit
    },
    {
      ingredient: "Smart Balance Light Original Buttery Spread",
      ingredientAmt: 1,
      measuringUnit: measuringUnit
    }
  ];
  
  var output = "You will need to pick from one of the following: <br>";
  for(var index = 0; index < butterOptions.length; index++) {
    output += (butter * butterOptions[index]["ingredientAmt"]) +
                " " + butterOptions[index]["measuringUnit"] + " of " + 
                butterOptions[index]["ingredient"] + ". <br>";
  }
  
  return(output);
}

function CalculateYogurt(yogurt) {
  var yogurtOptions = [
    {
      ingredient: "Silken Tofu",
      measuringUnit: "C",
      ingredientAmt: 1
    },
    {
      ingredient: "Lemon Juice",
      measuringUnit: "tbsp",
      ingredientAmt: 2
    },
    {
      ingredient: "Salt",
      measuringUnit: "tsp",
      ingredientAmt: 0.25
    }
  ];
  
  var output = "You will need to blend together: <br>";
  for(var index = 0; index < yogurtOptions.length; index++) {
    output += (yogurt * yogurtOptions[index]["ingredientAmt"]) +
                " " + yogurtOptions[index]["measuringUnit"] + " of " + 
                yogurtOptions[index]["ingredient"] + ". <br>";
  }
  
  return(output);
}

function CalculateHoney(honey, measuringUnit) {
  var honeyOptions = [
    {
      ingredient: "Maple Syrup",
      ingredientAmt: 1,
      measuringUnit: measuringUnit
    },
    {
      ingredient: "Agave Nectar",
      ingredientAmt: 1,
      measuringUnit: measuringUnit
    }
  ];
  
  var output = "You will need to pick from one of the following: <br>";
  for(var index = 0; index < honeyOptions.length; index++) {
    output += (honey * honeyOptions[index]["ingredientAmt"]) +
                " " + honeyOptions[index]["measuringUnit"] + " of " + 
                honeyOptions[index]["ingredient"] + ". <br>";
  }
  
  return(output);
}

function Main() {
  var butter;
  var eggs;
  var honey;
  var keepLooping = true;
  var measuringUnit;
  var milk;
  var output;
  var userInput;
  var yogurt;

  
  while(keepLooping){
    userInput = prompt("What are you looking to replace?","Eggs, Milk, Butter, Yogurt, or Honey");
    userInput = userInput.toUpperCase();
    switch(userInput) {
      case "EGGS":
        userInput = prompt("Is it for leavening, binding, or custard/quiche?");
        userInput = userInput.toUpperCase();
        eggs = prompt("How many eggs are you looking to replace?", "1, 2, 3");
        if(isNaN(eggs)){
          alert("You did not enter in a number, please try again.");
        }else if (eggs <= 0) {
          alert("Please enter a number greater than zero.");
        }else {
        
          eggs = Number(eggs);
          
          switch(userInput) {
            case "LEAVENING":
              output = CalculateLeavening(eggs); 
              document.write(output);
              keepLooping = false;
              break;
            case "BINDING" :
              output = CalculateBinding(eggs);
              document.write(output);
              keepLooping = false;
              break;
            case "CUSTARD":
              output = CalculateCustardAndQuiche(eggs);
              document.write(output);
              keepLooping = false;
              break;
            case "QUICHE":
              output = CalculateCustardAndQuiche(eggs);
              document.write(output);
              keepLooping = false;
              break;
            default:
              alert("You did not enter the correct word, try again.");
          }
        }
        break;
      case "MILK":
        milk = prompt("What is the amount of milk to replace?");
        if(isNaN(milk)) {
          alert("You did not enter a number, please try again.");
        }else if (milk <= 0) {
          alert("Please enter a number greater than zero.");
        }else {
          milk = Number(milk);
          measuringUnit = prompt("What is the measuring for it?");
          output = CalculateMilk(milk, measuringUnit);
          document.write(output);
          keepLooping = false;
        }
        break;        
      case "BUTTER":
        butter = prompt("What is the amount of butter to replace?");
        if(isNaN(butter)) {
          alert("You did not enter a number, please try again.");
        }else if (butter <= 0) {
          alert("Please enter a number greater than zero.");
        }else {
          measuringUnit = prompt("What is the measuring for it?");
          butter = Number(butter);
          output = CalculateButter(butter, measuringUnit);
          document.write(output);
          keepLooping = false;
        }
        break;
      case "YOGURT":
        yogurt = prompt("How many cups of yogurt is to be replaced?");
        if(isNaN(yogurt)) {
          alert("You did not enter a number, please try again.");
        }else if (yogurt <= 0) {
          alert("Please enter a number greater than zero.");
        }else {
          yogurt = Number(yogurt);
          output = CalculateYogurt(yogurt);
          document.write(output);
          keepLooping = false;
        }
        break;
      case "HONEY":
        honey = prompt("What is the amount of honey to replace?");
        if(isNaN(honey)) {
          alert("You did not enter a number, please try again.");
        }else if (honey <= 0) {
          alert("Please enter a number greater than zero.");
        }else {
          measuringUnit = prompt("What is the measuring unit for it?");
          honey = Number(honey);
          output = CalculateHoney(honey, measuringUnit);
          document.write(output);
          keepLooping = false;
        }
        break;
      default:
        alert("You did not enter in the right word, please try again.");
    }
  }
}
Main();