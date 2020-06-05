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
function Header() {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const h1 = document.createElement("h1");

    // found a typo and changed 'SMARCH' to 'MARCH" in HTML and function code

    span.textContent = "MARCH 28, 2019"
    h1.textContent = "Lambda Times";
    span2.textContent = "98° ";

    header.appendChild(div);
    header.appendChild(span);
    header.appendChild(h1);
    header.appendChild(span2);

    return header;
}