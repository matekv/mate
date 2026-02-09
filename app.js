let nav = document.querySelector('nav')
function toggleNav(){
    nav.classList.toggle('openedNav')
}

let api_url = 'https://6988a2c4780e8375a688cba3.mockapi.io/'

const container = document.querySelector('.containerapi')



let data = []




async function getbiomes() {
    try {
        const resp = await fetch(`${api_url}/biomes`)
        data = await resp.json();
        generate(data)
    } catch (error) {
        console.error(error);
    }
}


getbiomes()

function generate(arr) {
    arr.forEach(biomes => {
        container.innerHTML += `
        <div class="apinster">
            <h2>Name: ${biomes.name}</h2>
            <p>Dimension: ${biomes.dimension}</p>
            <p>Terrain: ${biomes.terrain}</p>
            <p>Type: ${biomes.type}</p>
        </div>
        `;
    });
}
