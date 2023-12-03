import axios from "axios";
import "./style.css";

const imges: HTMLDivElement = document.querySelector(".images")!;
const second: HTMLDivElement = document.querySelector(".hidden_elem")!;
const input: HTMLInputElement = document.querySelector(".group")!;
const loader: HTMLDivElement = document.querySelector(".spinner")!;
const back: HTMLButtonElement = document.querySelector(".back")!;

const URL = "https://course-api.com/react-store-products";

async function fetchData() {
	try {
		const response = await axios.get(URL);
		displayUserData(response.data);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

const index = document.createElement("h6");
index.className = "count_index";
index.innerText = "We currently have 22 products";
imges.append(index);

function displayUserData(data: any[]) {
	data.forEach((elem) => {
		elem.addEventListener("click", () => {
			console.log("hello");
		});
		// Create a new boxdiv for each product
		const boxdiv: HTMLDivElement = document.createElement("div");
		boxdiv.innerHTML = `
            <div class="boxes">
                <img src="${elem.image}">
                <div class="pies">
                    <p>${elem.name}</p>
                    <p>${elem.price}$</p>
                </div>
            </div>`;
		imges.appendChild(boxdiv);

		// Add click event listener
		boxdiv.addEventListener("click", () => handleProductClick(elem, boxdiv));
	});
}

function handleProductClick(product: any, boxdiv: HTMLDivElement) {
	imges.style.display = "none";
	input.style.display = "none";
	second.style.marginTop = "50px";
	const main = document.createElement("h6");
	main.className = "second_me";
	second.innerHTML = ""; // Clear existing content
	second.append(main);

	const newCreate: HTMLDivElement = document.createElement("div");
	const backed: HTMLDivElement = document.createElement("div");
	backed.className = "back";
	backed.innerText = "👈🏼";
	newCreate.innerHTML = `
    <div class="secondyou">
    <img src="${product.image}">
    <div class="left">
    <p>👉🏼 Name : ${product.name}</p>
    <p>👉🏼 Price :  ${product.price}$</p>
    <p>👉🏼 Description : ${product.description}</p>
    <p>👉🏼 category : ${product.category}</p>
    <p>👉🏼 Company: ${product.company}</p>
    </div>
    </div>`;
	second.appendChild(newCreate);
	second.appendChild(backed);

	backed.addEventListener("click", () => {
		second.style.display = "none";
		imges.style.display = "block";
		backed.style.display = "none";
		input.style.display = "block";
		// Remove the boxdiv from imges
		imges.removeChild(boxdiv);
	});

	console.log("Product clicked:", product);
}

fetchData();
