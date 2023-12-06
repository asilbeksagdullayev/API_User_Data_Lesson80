import axios from "axios";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const imges: HTMLDivElement = document.querySelector(".images")!;
const second: HTMLDivElement = document.querySelector(".hidden_elem")!;
const input: HTMLInputElement = document.querySelector(".group")!;
const loader: HTMLDivElement = document.querySelector(".spinner")!;
const back: HTMLButtonElement = document.querySelector(".back")!;
const backed: HTMLDivElement = document.createElement("div");
const hOne:HTMLParagraphElement = document.createElement("h1");
const pink: HTMLDivElement = document.querySelector(".big_pink");
const home: HTMLParagraphElement = document.querySelector(".home");


const URL = "https://course-api.com/react-store-products";

async function fetchData() {
    try {
        const response = await axios.get(URL);
        displayUserData(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// const index = document.createElement("h6");
// index.className = "count_index";
// index.innerText = "We currently have 22 products";
// imges.append(index);

function displayUserData(data: any[]) {
    data.forEach((elem) => {
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

        // Add click event listener to the boxdiv
        boxdiv.addEventListener("click", () => handleProductClick(elem));
    });
}
    // console.log("imges:", imges);
    // console.log("input:", input);
function handleProductClick(product: any) {
    imges.style.display = "none";
    input.style.display = "none";
    // imges.style.display = "none";
    // input.style.display = "none";
    second.style.marginTop = "50px";
    const main = document.createElement("h6");
    main.className = "second_me";
    second.innerHTML = "";
    second.append(main);

    const newCreate: HTMLDivElement = document.createElement("div");
    // backed.className = "back";
    // backed.innerText = "👈🏼";
    hOne.innerText = "Product";
    pink.appendChild(hOne);
    newCreate.innerHTML = `

    <div class="all">
        <div class="secondyou">
            <img src="${product.image}">
            <div class="left">
                <p>👉🏼 Name : ${product.name}</p>
                <p>👉🏼 Price :  ${product.price}$</p>
                <p>👉🏼 Description : ${product.description}</p>
                <p>👉🏼 category : ${product.category}</p>
                <p>👉🏼 Company: ${product.company}</p>
            </div>
        </div>

        <div class=""></div>
        </div>`;
    second.appendChild(newCreate);
    second.appendChild(backed);


    console.log("Product clicked:", product);
    home.addEventListener("click", () => {
    // Show the product list and input, hide details view
    second.style.display = "none";
    imges.style.display = "block";
    hOne.style.display = "none";
    // boxdiv.innerHTML = "";
    input.style.display = "block";
    // displayUserData(); // Use the 'data' variable
});
}


fetchData();
