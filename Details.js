var productData = {
	id: "1",
	name: "Men Navy Blue Solid Sweatshirt",
	preview:
		"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
	photos: [
		"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
		"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
		"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
		"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
		"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
	],
	description:
		"Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
	size: [1, 1, 0, 1, 0],
	isAccessory: false,
	brand: "United Colors of Benetton",
	price: 2599,
};

// Left-section Image Container

var bgContainer = document.getElementById("Main-Container");
var leftSectionContainer = document.createElement("div");
leftSectionContainer.classList.add("leftSectionContainer");

var imgContainer = document.createElement("img");
imgContainer.textContent = "img";
imgContainer.src = productData["preview"];
imgContainer.classList.add("imgContainer");
leftSectionContainer.appendChild(imgContainer);

bgContainer.appendChild(leftSectionContainer);

// Right section content container

var rightSectionContainer = document.createElement("div");
var headSec = document.createElement("h1");
headSec.textContent = "Men Navy Blue Solid Sweatshirt";
headSec.classList.add("headSec");
rightSectionContainer.appendChild(headSec);

var headSec1 = document.createElement("h4");
headSec1.textContent = "United color of Benetton";
headSec1.classList.add("headSec1");
rightSectionContainer.appendChild(headSec1);

var headSec2 = document.createElement("div");
var spanId = document.createElement("span");
spanId.textContent = " Price: Rs";
spanId.classList.add("spanId");
headSec2.appendChild(spanId);
var headSec3 = document.createElement("h3");
headSec3.textContent = "2599";
headSec2.appendChild(headSec3);
headSec3.classList.add("headSec3");
headSec2.classList.add("headSec2");
rightSectionContainer.appendChild(headSec2);

var productDescription = document.createElement("p");
productDescription.textContent = "Description";
productDescription.classList.add("productDescription");
rightSectionContainer.appendChild(productDescription);

var paragraph = document.createElement("p");
paragraph.textContent =
	"Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem";
paragraph.classList.add("paragraph");
rightSectionContainer.appendChild(paragraph);

var productPreview = document.createElement("p");
productPreview.textContent = "Product Preview";
productPreview.classList.add("productPreview");
rightSectionContainer.appendChild(productPreview);
var cardSection = document.createElement("div");
cardSection.classList.add("cardSection");
rightSectionContainer.appendChild(cardSection);

function changePicture(event) {
	for (let i = 0; i < productData.photos.length; i++) {
		if (productData.photos[i] == event.target.src) {
			imgContainer.src = productData.photos[i];
		}
	}
}

for (let i = 0; i <= productData.photos.length; i++) {
	var imgCard = document.createElement("div");
	imgCard.classList.add("imgCard");
	cardSection.appendChild(imgCard);
	let cardImg = document.createElement("img");
	cardImg.src = productData.photos[i];
	cardImg.classList.add("cardImg");
	cardImg.addEventListener("click", changePicture);
	imgCard.appendChild(cardImg);
}

var button = document.createElement("button");
button.textContent = "Add to Cart";
button.classList.add("btn");
rightSectionContainer.appendChild(button);

rightSectionContainer.classList.add("rightSectionContainer");
bgContainer.appendChild(rightSectionContainer);
console.log(bgContainer);
