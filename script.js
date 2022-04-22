
const btnSubmit = document.querySelector(".btn-Submit");
const inputUsername = document.querySelector(".username");
const inputApikey = document.querySelector(".apikey");
const inputApisecret = document.querySelector(".apisecret");
const ApiListitems = document.querySelector(".Api__list--items");


btnSubmit.addEventListener("click", addSubmit);

function addSubmit(event) {
    event.preventDefault()

     // console.log({ input: inputSearch.value });

  let searchUsername = inputUsername.value;

  if (!searchUsername) {
    alert("Please enter username");
    return;
  }

  let searchApikey = inputApikey.value;

  if (!searchApikey) {
    alert("Please enter Api Key");
    return;
  }

  let searchApisecret = inputApisecret.value;

  if (!searchApisecret) {
    alert("Please enter Api Secret");
    return;
  }

    const apiDiv = document.createElement("div");
    apiDiv.classList.add("api");

    const apiNum = document.createElement("li");
    apiNum.innerHTML = "1";
    apiNum.classList.add("api__item--num");
    apiDiv.appendChild(apiNum);


    const newUsername = document.createElement("li");
    newUsername.innerText = inputUsername.value;

    saveLocalTodo(inputUsername.value);

    newUsername.classList.add("api__item--username");
    apiDiv.appendChild(newUsername);
    inputUsername.value = "";


    const newApikey = document.createElement("li");
    newApikey.innerText = inputApikey.value;

    saveLocalTodo(inputApikey.value);

    newApikey.classList.add("api__item--apikey");
    apiDiv.appendChild(newApikey);
    inputApikey.value = "";


    const newApisecret = document.createElement("li");
    newApisecret.innerText = inputApisecret.value;

    saveLocalTodo(inputApisecret.value);

    newApisecret.classList.add("api__item--apisecret");
    apiDiv.appendChild(newApisecret);
    inputApisecret.value = "";

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("btn btn-primary delete-btn");
    apiDiv.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("btn btn-primary edit-btn");
    apiDiv.appendChild(editButton);

    ApiListitems.appendChild(apiDiv);
} 