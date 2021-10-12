// hexadecimal converter
function hex(numberInt) {
    return numberInt.toString(16);
}

// Scope of variables and functions, hoisting, closures
// Functions along with the entire body of the function
// Variables declaration
// Variables assignation
// It is important to remember that the collection of references that is stored in the function’s briefcase is a collection of references to the variables, not the variables themselves
function closures() {
    function sayPet() {
        let pet = 'parrot';	    // variable is declared inside local scope of function sayPet();
        return function() {	    // inner scope is created for anonymous function
            console.log(pet);	// this inner scope call can reference pet because the closure 
        }						// for this function includes a reference to the pet variable
    }

    let bestBuddy = sayPet();	// a new variable is declared outside of either function's scope
                                // but its value is assigned to the return of sayPet(), which
                                // returns a function whose closure includes a reference to pet

    bestBuddy();	// bestBuddy() is called; even though pet is out of scope at the point of call, it is in scope for the definition
    sayPet();       // It will not show anything
}

//Example:
//console.log(someVariable); 		// will raise exception
//let someVariable = 'hello';

// because when hoisted...
// **hoisted code below**
//let someVariable
//console.log(someVariable); 		// this references an unset variable
//someVariable = 'hello' 			// the assignment is actually made here

// EXAMPLES
// **Basics**
// Example 1
function example1() {
    let a = 5;
    let b = 6;

    function addThem() {
        console.log(a + b);
    }

    addThem();
}
// logs 11 to the console; the function's local scope can access variables in the outer scope.

// Example 1.1
function example1_1() {
    let dessert = 'cake';
    if (dessert.length < 6) console.log(dessert);
}
// The if keyword creates a local execution scope for its block; this scope can access the global

// Example 2
function example2() {
    let dessert = 'ice cream';

    if (dessert) {
        if (dessert.length < 5) {
            console.log('quick snack');
        } else {
            console.log('lengthy treat');
        }
    }
}
// The blocks nested within the outer if block can still access the global scope.
// Result 'lengthy treat'

// Example 3
function example3() {
    let dessert = 'tart';

    if (dessert) {
        let dessert = 'cannoli';
        if (dessert.length < 5) {
            console.log('quick snack');
        } else {
            console.log('lengthy treat');
        }
    } else {
        console.log('no dessert...');
    }
}
// The inner blocks have access to the global scoped variable dessert, but a new local variable 
// named dessert is declared in the local scope of the first if block. This variable shadows (blocks)
// the inner if blocks from accessing the global scoped variable.
// Result 'lengthy treat'

// Example 4
function example4() {
    let tea = 'sweet';

    if (true) {
        let tea = 'iced';
        tea = 'sour';
    }

    console.log(tea);
}
// A new local variable is declared inside the block, so the reassignment that takes place is acting
// on the local variable within the block, not the outer scoped global block.
// Result 'sweet'

// Example 5
function example5() {
    let tea = 'sweet';

    if (true) {
        tea = 'sour';
        let tea = 'iced';
    }

    console.log(tea);
}
// The variable declaration inside the block is hoisted above the reassignment, but when let 
// assignments are hoisted, the value is not initialized, so an error is thrown.

// Example 6
// function example6() {
//     let tea = 'sweet';

//     if (true) {
//         tea = 'sour';
//         var tea = 'iced';
//     }
    
//     console.log(tea);
// }
// the var variable declaration is hoisted out of the block scope, as it does not have block scoping.
// This means that both declarations for tea exist in the global scope, and the var, coming after
// the let, will raise an exception as a redundant initialization.

// Example 7
function example7() {
    let numberOfBagels = 5;

    function eatBagel() {
        numberOfBagels -= 1;
        if (numberOfBagels === 0) {
            console.log('Oh nO, Out Of bagles!');
        } else {
            console.log(`Yummy. There are ${numberOfBagels} left!`);
        }
    }

    eatBagel();
    eatBagel();
    console.log(numberOfBagels);
}
// The function eatBagel creates an execution context that creates a local scope; it looks inside 
// this scope first to resolve the variable numberOfBagels, but doesn't find one therein, so it 
// searches the next scope out, which in this case is the global scope containing the variable
// numberOfBagels. This method acts on this variable directly and reassigns a new primitive value
// with each function call.
// Result:
// Yummy. There are 4 left!
// Yummy. There are 3 left!
// 3

function example8() {
    let numberOfBagels = 5;

    function eatBagel(bagels) {
        bagels -= 1;
        if (bagels === 0) {
            console.log('Oh nO, Out Of bagles!');
        } else {
            console.log(`Yummy. There are ${bagels} left!`);
        }
    }

    eatBagel(numberOfBagels);
    eatBagel(numberOfBagels);
    console.log(numberOfBagels);
}
// In this case, the parameter bagels creates a new local variable named bagels that is assigned the
// value of the argument passed in to the call, which in this case is 5 from numberOfBagels. This
// local variable is created anew with each call and the variable passed in as an argument to the 
// function is not modified.
// Yummy. There are 4 left!
// Yummy. There are 4 left!
// 5

function example9() {
    let numberOfBagels = 5;

    function eatBagel(numberOfBagels) {
        numberOfBagels -= 1;
        if (numberOfBagels === 0) {
            console.log('Oh nO, Out Of bagles!');
        } else {
            console.log(`Yummy. There are ${numberOfBagels} left!`);
        }
    }

    eatBagel(numberOfBagels);
    eatBagel(numberOfBagels);
    console.log(numberOfBagels);
}
// The parameter in this function still creates a new local variable when the function eatBagel is
// called. It has the same name as the outer scoped variable, but this new local scoped variable 
// shadows the outer variable, so the only changes made are to the local variable.
// Yummy. There are 4 left!
// Yummy. There are 4 left!
// 5

function example10() {
    var a = 5;
    const b = 6;

    function addThem() {
        console.log(a + b);
    }

    addThem();
}
// The keyword used to declare the variables in the global scope has no impact at this point. 
// The function addThem can still access the outer scope variables.
// Result: 11

function example11() {
    var a = 'ham';
    const b = ' spam';
    
    function addThem() {
        console.log(a + b);
    }

    addThem();
}
// The scoping rules for functions accessing outer scope variables is still the same. addThem can
// access both a and b in its inner scope, so the values are concatenated and the result logged.
// Result: ham spam

function example12() {
    if (true) {
        let pecan = 'sandie';
    };
    console.log(pecan);
}
// The variable pecan is declared in the block scope of if; the global scope has no way to access
// this variable so it throws an error.

function example13() {
    if (true) {
        var pecan = 'sandie';
    };
    console.log(pecan);
}
// The variable pecan is declared in the block scope of if, but the keyword var is used to do so
// the variable pecan is scoped globally. This is the case when var is used to declare variables
// outside of any function.
// Result: sandie

function example14() {
    function chopIt() {
        let pieces = 10;
    }
    
    chopIt();
    console.log(pieces);
}
// The global scope cannot access variable declared within the inner scope of a function.
// Raise an error

function example15() {
    let food = 'sushi';
    function eatEmUp() {
        let sauce = ' soy';
        
        function mixEmUp() {
            console.log(food + sauce);
        }

        mixEmUp();
    }

    eatEmUp();
}
// Functions can access their outer scope; this includes each scope outside of the function out to
// and including global scope.
// Result: sushi soy

function example16() {
    let food = 'sushi';
    function eatEmUp() {
        function sauceEmUp() {
            let sauce = ' garlic soy';
        }
        
        sauceEmUp();
        console.log(food + sauce)
    }
    
    eatEmUp();
}
// This will return an error because the variable that is declared in sauceEmUp's call, is 
// declared inside the scope of that function and thus, the scope of eatEmUp cannot "reach" 
// in to this scope to access the variable sauce.

function example17() {
    let bread = 'sourdough';

    function makeSandwich() {
        let meat = ' spam';

        if (meat === ' spam') {
            meat += ' and eggs';
        }

        function getCheese() {
            let cheese = ' swiss';
        
            function condiment() {
                let condiment = ' sriracha';
                return condiment;
            }
            
            return (cheese + condiment())
        }
        return bread + meat + getCheese();
    }
    
    console.log(makeSandwich());
}
// This will log 'sourdough spam and eggs swiss sriracha' to the console. Follow the rules for 
// variable and function scoping and it should all fit together into a recipe for a delicious,
// delicious sandwich. 

function example18() {
    let bread = 'sourdough';

    function makeSandwich() {
        let meat = ' spam';
        let condiment = 'mayo';
        
        function getCheese() {
            let cheese = ' swiss';
        
            function condiment() {
                let condiment = ' sriracha';
            }
        
            condiment(); 
            return (cheese + condiment)
        }
        
        return bread + meat + getCheese();
    }
    
    console.log(makeSandwich());
}
// The log here is unexpected; on line 15 when JS tries to resolve the variable name condiment, it 
// checks the local scope of the function getCheese first. It finds the variable condiment that
// is assigned to a function; not the variable condiment inside the function condiment(), or the 
// variable by the same name in the local scope of makeSandwich on line 5. As a result it logs
// the value associated, which is a function definition. 

function example19() {
    let bread = 'sourdough';

    function makeSandwich() {
        let meat = ' spam';
        let condiment = ' mayo';
        
        function getCheese() {
            let cheese = ' swiss';
        
            if (cheese) {
                let condiment = ' sriracha';
            }
        
            return (cheese + condiment)
        }
        
        return bread + meat + getCheese();
    }
    
    console.log(makeSandwich());
}
// The condiment variable declared within the if block is scoped only within that block, so when
// getCheese returns the variable cheese concatenated with the variable condiment, the only 
// condiment variable that it can find is the one defined in its outer scope (the inner scope of 
// makeSandwich). 
// Result: sourdough spam swiss mayo

function example20() {
    let bread = 'sourdough';

    function makeSandwich() {
        let meat = ' spam';
        let condiment = ' mayo';
        
        function getCheese() {
            let cheese = ' swiss';
        
            if (cheese) {
                var condiment = ' sriracha';
            }
        
            return (cheese + condiment)
        }
        
        return bread + meat + getCheese();
    }
    
    console.log(makeSandwich());
}
// Just as before the function getCheese checks its execution context for a resolution to the 
// variable condiment; this time however, the declaration on line 11 uses var, so it is scoped
// to the function, not the if block, and this is the value that is used. 
// Result: sourdough spam swiss sriracha

// **Hoisting and variable assignment**
// https://kaledoux.medium.com/javascript-exercises-scope-hoisting-and-closures-423893501195






// PRUEBAS
const citiesList = [
    "Valladolid",
    "Leon",
    "Zamora",
    "Valladolid",
    "Valladolid",
    "Leon"
]
const numCities = 2;

function ocurrencies(citiesList) {
    var result = {};

    // Contar las veces que se repite cada ciudad
    for (city of citiesList) {
        // Si la ciudad esta en la lista sumo 1
        // si no esta en la lista la anado con valor 1
        if (result[city]) {
            result[city] += 1;
        } else {
            result[city] = 1;
        }
    }

    // citiesList.forEach(city => {
    //     result[city] = result[city] ? result[city]+1 : 1;
    // });

    // Mostrar los X primeros puestos
    console.log(
        Object.keys(result)
        .map(city => ({name: city, times: result[city]}))
        .sort((a,b) => b.times - a.times)
        .map(city => city.name)
        .slice(0,numCities)
    );
}
//ocurrencies(citiesList, numCities);

function numberList() {
    for (i=1; i<100; i++) {
        if (i%3 === 0) {
            if (i%5 === 0) {
                console.log('both');
            } else {
                console.log('three');
            }
        } else if (i%5 === 0) {
            console.log('five');
        } else {
            console.log(i);
        }
    }
}
//numberList();