// JavaScript source code
window.addEventListener("load", function () {
    // 2. Swap title and text content
    const p2 = document.querySelector("#p2");
    p2.addEventListener("click", function () {
        const temp = p2.textContent;
        p2.textContent = p2.title;
        p2.title = temp;
    });

    // 3. Swap image src
    const img3 = document.querySelector("#img3");
    const imgSrc1 = "image1.jpg";  // replace with your image path
    const imgSrc2 = "image2.jpg";  // replace with your image path

    img3.addEventListener("click", function () {
        img3.src = img3.src.includes("image1.jpg") ? imgSrc2 : imgSrc1;
    });

    // 4. Generate unordered list
    const list_content = ["Apple", "Banana", "Orange", "Mango", "Papaya"];
    const btn4 = document.querySelector("#btn4");
    const div4 = document.querySelector("#div4");

    btn4.addEventListener("click", function () {
        const ul = document.createElement("ul");
        list_content.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });
        div4.innerHTML = "";  // clear existing content
        div4.appendChild(ul);
    });

    // 5. Generate table
    const table_content = [
        ["Tom", 20, "BSc (Hons) Computer Science"],
        ["Mary", 19, "BSc (Hons) Computer Science (Games)"],
        ["Jerry", 21, "BSc (Hons) Digital Games Production"],
        ["Jane", 19, "BSc (Hons) Digital Media"],
        ["Olivia", 22, "BSc (Hons) Digital Media Development"],
        ["Jack", 20, "BSc (Hons) Software Engineering"]
    ];

    const btn5 = document.querySelector("#btn5");
    const div5 = document.querySelector("#div5");

    btn5.addEventListener("click", function () {
        const table = document.createElement("table");
        table.border = 1;
        table_content.forEach(rowData => {
            const row = document.createElement("tr");
            rowData.forEach(cellData => {
                const cell = document.createElement("td");
                cell.textContent = cellData;
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
        div5.innerHTML = "";
        div5.appendChild(table);
    });

    // 6. Generate 10 paragraphs
    const btn6 = document.querySelector("#btn6");
    const div6 = document.querySelector("#div6");

    btn6.addEventListener("click", function () {
        for (let i = 1; i <= 10; i++) {
            const p = document.createElement("p");
            p.textContent = `This is paragraph ${i}`;
            div6.appendChild(p);
        }
    });

    // 7. Remove all paragraphs from div6
    const btn7 = document.querySelector("#btn7");

    btn7.addEventListener("click", function () {
        while (div6.firstChild) {
            div6.removeChild(div6.firstChild);
        }
    });
});









