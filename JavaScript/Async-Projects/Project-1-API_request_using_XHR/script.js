const card = document.querySelector(".card");
const url = "https://randomuser.me/api/";

const imgContainer = document.querySelector(".image-container");
const detailsContainer = document.querySelector(".details-container");

let userDetails = {};

const xhr = new XMLHttpRequest();   //new instance of the XMLHttpRequest Object

xhr.open('GET',url);
xhr.onreadystatechange = function(){

    //console.log(xhr.readyState);

    if(xhr.readyState==4){

         //console.log(this.responseText);
        
         const data = JSON.parse(this.responseText);
         
         const imgUrl = `${data.results[0].picture['large']}`;
         const name = `${data.results[0].name['first']} ${data.results[0].name['last']}`;
         const gender = `${data.results[0].gender}`;
         const email = `${data.results[0].email}`;
         const cell = `${data.results[0].cell}`;
         const location =`${data.results[0].location['city']} ${data.results[0].location['country']}`;
         
         //console.log(data);
         userDetails = {
            img: imgUrl,
            userName: name,
            gender: gender,
            email: email,
            cell: cell,
            location: location
         }
         //console.log(userDetails);
         const entries = Object.entries(userDetails);

         const imgElement = document.createElement('img');

         //setting image attributes
         imgElement.classList.add("profile-pic");
         imgElement.setAttribute("src", userDetails["img"]);
         imgElement.setAttribute("alt", "user image");

         //image stylying
         imgElement.style.fontSize = "1.5rem";
         imgElement.style.width ="100%";
         imgElement.style.height ="100%";
         imgElement.style.backgroundSize ="cover";

         // console.log(imgElement);
         imgContainer.appendChild(imgElement);


         for (const [key, value] of entries) {

            if(key==='img') continue;
            
           // create a new paragraph element object for each iteration of the loop
           const pElement = document.createElement('p');
         
           // setting paragraph attributes
           pElement.classList.add("profile-details");
         
           // paragraph stylying
           pElement.style.display = "block";
           pElement.style.fontSize = '1.5rem';
           pElement.style.padding = '1rem';
         
           // setting paragraph content
           pElement.innerHTML = `<b style="color: black;">${key.toUpperCase()}:</b> ${value}`;
         
           detailsContainer.appendChild(pElement);
         }
    }
}
xhr.send();
