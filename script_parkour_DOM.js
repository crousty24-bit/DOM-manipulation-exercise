// 1. How many <p> elements does HTML contains ?
const allP = document.getElementsByTagName("p");
console.log("This is the list of all <p> elements :");
console.log(allP)

// 2. What's the text content of id "coucou" ?
const idContent = document.getElementById("coucou");
console.log("The content of id coucou : '2. Historique et contexte'");
console.log(idContent)

// 3. Where does third <a> redirect ?
const findUrl = document.getElementsByTagName("a");
console.log("The third URL redirect to OpenClassRoom :");
console.log(findUrl[2])

// 4. How many elements have class "compte-moi" ?
const findClass = document.getElementsByClassName("compte-moi");
console.log(`${findClass.length} elements have class 'compte-moi'`);
console.log(findClass)

// 5. How many <li> elements have class "compte-moi" ?
const findClassLi = document.querySelectorAll("li.compte-moi");
console.log(`${findClassLi.length} <li> elements have class 'compte-moi'`);
console.log(findClassLi)

// 6. How many <li> elements in ordered lists have class "compte-moi" ?
const findClassLiOrdered = document.querySelectorAll("ol > li.compte-moi"); // find parent element of li.compte-moi using '>'
console.log(`${findClassLiOrdered.length} <li> elements in ordered lists (ol) have class 'compte-moi'`);
console.log(findClassLiOrdered)

// 7. Find hidden tag content from a <div> element : 
const findHiddenTag = document.querySelector("div").lastElementChild.getElementsByTagName("li")[0];
console.log(`Found the hidden content in Div > ul > li :`);
console.log(findHiddenTag)