const container = document.getElementById("container");

for(let count = 1; count <= 20; count ++){
    const div = document.createElement("div")
    div.className = "circle";
    div.style.setProperty("--i", i);
    container.appendChild(div);


}

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 25;
    let y = (window.innerHeight / 2 - e.clientY) / 25;

    container.style.transform = `rotateX(${70 + y}deg) rotateY(${x}deg)`;
})