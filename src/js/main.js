import { refreshButton, movies } from './dom-loader.js';
import { getMovies } from './provider';
import "../../assets/index.css";
import img from '../img/netflix_logo.svg';

refreshButton.addEventListener("click", createTemplate);

createTemplate();
async function createTemplate() {
    let currentCard = "";
    const container = document.createElement('div');
    container.classList.add('container');
    let myMovies = await getMovies();
    myMovies.forEach(movie => {

        container.append(createMovieCard(movie));

    });
    let myCard = movies.appendChild(container);

}

function createMovieCard(card) {
    const item = document.createElement('div');
    item.classList.add('card-item');
    // const img=document.createElement('img');
    item.innerHTML = `<img style="text-align:'center';" src="${card.Poster}" alt="">
    <p>${card.Title}</p>`;
    return item;





};