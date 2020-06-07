// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector(".header-container");

function Header() {
    const div = document.createElement("div");
    div.className = "header";
    const span = document.createElement("span");
    span.className = "date";
    const h1 = document.createElement("h1");

    const span2 = document.createElement("span2");
    span2.className = "temp";

    // found a typo and changed 'SMARCH' to 'MARCH" in HTML and function code

    span.textContent = "MARCH 28, 2019"
    h1.textContent = "Lambda Times";
    span2.textContent = "98° ";

    headerContainer.appendChild(div);
    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span2);

    return div;

}
Header();