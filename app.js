const wrapper = document.getElementById("tiles");

let rows = 0,
    columns = 0,
    toggled = false;

const toggle = () => {
    toggled = !toggled;
    document.body.classList.toggle("toggled");
}
    
const handleOnClick = index => {
    toggle();

    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50,{
            grid:[columns,rows],
            from: index
        })
    })
}

const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");
    tile.style.opacity = toggled ? 0 : 1;
    tile.addEventListener("click", () => handleOnClick(index));
    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) =>{
        wrapper.appendChild(createTile(index));
    })
}

const createGrid = () => {
    wrapper.innerHTML = "";

    const size = document.body.clientWidth > 800 ? 100 : 50;

    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);

    wrapper.style.setProperty("--columns",columns);
    wrapper.style.setProperty("--rows",rows);

    createTiles(columns * rows);
}

window.onresize = () => createGrid();

createGrid();

document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
        window.open('https://kktheomniscient.github.io/Spotify-replica/', '_blank'); 
    }
    else if (event.key === '2') {
        window.open('https://kktheomniscient.github.io/calc/', '_blank'); 
    }
    else if (event.key === '3') {
        window.open('https://kktheomniscient.github.io/Simon-says/', '_blank'); 
    }
    else if (event.key === 'l') {
        window.open('https://www.linkedin.com/in/krishnakant-singh-5754a628b/', '_blank'); 
    }
    else if (event.key === 'g') {
        window.open('https://github.com/kktheomniscient', '_blank'); 
    }
    else if (event.key === 'e') {
        openEmail();
    }

});

function openEmail() {
    const emailAddress = "kk.the.omniscient@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
}