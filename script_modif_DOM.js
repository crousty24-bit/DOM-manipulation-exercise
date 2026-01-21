let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

// 1. changeTitles
function changeTitles(){
  document.querySelector(".jumbotron-heading").textContent = "Ce que j'ai appris à THP"; // return first & only 1 element matching selector
  document.getElementsByClassName("lead text-muted")[0].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}
changeTitles();

// 2. changeCallToAction
function changeCallToAction(){
  const mainBtn = document.getElementsByClassName("btn btn-primary my-2"); // always return a HTMLCollection (even if there is 1 element)
  //console.log(mainBtn.length)
  mainBtn[0].textContent = "OK je veux tester!";
  mainBtn[0].setAttribute("href", "http://www.thehackingproject.org");
  const secondBtn = document.getElementsByClassName("btn btn-secondary my-2");
  secondBtn[0].textContent = "Non merci";
  secondBtn[0].setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}
changeCallToAction();

// 3. changeLogoName
function changeLogoName(){
  const newNav = document.getElementsByClassName("navbar-brand d-flex align-items-center");
  //console.log(newNav.length)
  newNav[0].textContent = "The THP Experience";
  //newNav[0].style.color = "yellow";
  //newNav[0].style.fontSize = "2em";
  newNav[0].setAttribute("style", "color: red; background: black; font-size: 2em;");
}
changeLogoName()

// 4. populateImages
function populateImages(){
  const cards = document.getElementsByClassName("col-md-4");
  //console.log(cards);
  for (let i = 0; i <= cards.length; i++){
    let img = cards[i].querySelector(".card-img-top");
    img.setAttribute("src", imagesArray[i]);
  }
}
populateImages()