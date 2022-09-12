import getData from "../utils/getData";

const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="characters">
            ${characters.results.map(character => `
                <article class="character-item">
                    <a href="#/${character.id}/">
                        <div>
                            <img src="${character.image}" alt="${character.name}" />
                        </div>
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;

    // document.querySelector('footer').style.position = 'static';
    return view;
};

export default Home;

