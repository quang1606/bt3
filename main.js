const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");   
const btn3 = document.querySelector(".btn3");
const ull = document.createElement("ul");
document.body.appendChild(ull); 
async function getdata(apiUrl, btnClicked) {
    try {
        let res = await axios.get(apiUrl);
        render(res.data); 

        [btn1, btn2, btn3].forEach(btn => btn.classList.remove("a"));

     
        btnClicked.classList.add("a");

    } catch (error) {
        console.log(error);
    }
}

function render(res) {
    let html = "";
    res.forEach(element => {
        html += `<li>${element.title}</li>`; 
    });
    ull.innerHTML = html;
}

btn1.addEventListener("click", () => getdata("https://jsonplaceholder.typicode.com/posts", btn1));
btn2.addEventListener("click", () => getdata("https://jsonplaceholder.typicode.com/photos", btn2));
btn3.addEventListener("click", () => getdata("https://jsonplaceholder.typicode.com/albums", btn3));

getdata("https://jsonplaceholder.typicode.com/posts", btn1);
