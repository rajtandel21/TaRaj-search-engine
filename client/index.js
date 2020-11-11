const form = document.getElementById("myForm");
const result = document.getElementById("result");
const searchInput = document.getElementById("searchField");

const data = document.createElement("div");
const personData = document.createElement("p");
const restaLink = document.createElement("a");

function enterElement(resData) {
  if (result.childNodes.length === 0) {
    //result.removeChild(result.firstChild);
    result.append(data);
    data.append(personData);
    data.append(restaLink);
  }

  personData.textContent = `${resData.firstName} likes to eat ${resData.favFood}.`;
  restaLink.textContent = `If you like ${resData.favFood} too, check out this link.`;
  restaLink.setAttribute("href", `${resData.link}`);
}

function enterManyElement(resData) {
  const data = document.createElement("div");
  const personData = document.createElement("p");
  const restaLink = document.createElement("a");
  result.append(data);
  data.append(personData);
  data.append(restaLink);
  personData.textContent = `${resData.firstName} likes to eat ${resData.favFood}.`;
  restaLink.textContent = `If you like ${resData.favFood} too, check out this link.`;
  restaLink.setAttribute("href", `${resData.link}`);
}

async function getRandomData() {
  //check the result div is empty
  const fetchData = await fetch("http://localhost:3000/weiland/random");
  const resData = await fetchData.json();
  enterElement(resData);
}

function removeData(length) {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

async function getSpecificData(name) {
  try {
    const fetchData = await fetch(`http://localhost:3000/weiland/${name}`);
    const resData = await fetchData.json();
    if (resData.length > 0) {
      if (!(result.childNodes.length === 0)) {
        removeData(resData.length);
      }
      //every user
      resData.forEach((person) => {
        enterManyElement(person);
      });
    } else {
      if (!(result.childNodes.length === 0)) {
        removeData(resData.length);
      }
      //single user
      enterElement(resData);
    }
  } catch (err) {
    console.log("This member does not exist in the Weiland cohort!");
    searchInput.setAttribute("placeholder", "This user does not exist");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.submitter.name === "searchBtn") {
    //searching for specific stuff'
    getSpecificData(e.target.searchField.value);
  } else {
    //random data
    getRandomData();
  }
});
