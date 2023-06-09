var detailsForm = document.querySelector(`#destination_details_form`);

detailsForm.addEventListener(`submit`, handleFormSubmit);

var nameList = [];
var locationList = [];
var photoList = [];
var descriptionList = [];

function handleFormSubmit(event) {
    event.preventDefault();

    var destName = event.target.elements["name"].value;
    var destLocation = event.target.elements["location"].value;
    var destPhoto = event.target.elements["photo"].value;
    var destDesc = event.target.elements["description"].value;

      // Add the values to the respective arrays

      nameList.push(destName);
      locationList.push(destLocation);
      photoList.push(destPhoto);
      descriptionList.push(destDesc);
  

    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    }




// create card //

var desttCard = createDestinationCard(destName, destLocation,destPhoto,destDesc);

var wishLishContainer = document.getElementById("destination_container");
    if (wishLishContainer.children.length === 0) {
        document.querySelector("#title").innerHTML = "My Wish List";
    }

    // add the card //
    document.querySelector(`#destination_container`).appendChild(desttCard);


    function createDestinationCard(name, location,photoURL,description) {

        var card = document.createElement(`div`);
        card.className = "card";

        var img = document.createElement(`img`);
        img.setAttribute(`alt`, name);

        var constantPhotoURL = "images/signpost.jpg";

        if (photoURL.length === 0) {
            img.setAttribute(`src`, constantPhotoURL);   
        }
        else {
            img.setAttribute(`src`, photoURL);    
        }

        card.appendChild(img);

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        var cardSubtitle = document.createElement("h4");
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if (description.length !== 0) {
            var cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        var cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerText = "Remove";

        cardDeleteBtn.addEventListener("click", removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;

    }

    function removeDestination(event) {
        var card = event.target.parentElement.parentElement;
        card.remove();
    }

}

    console.log('Name List:', nameList);
    console.log('Location List:', locationList);
    console.log('Photo List:', photoList);
    console.log('Description List:', descriptionList);
