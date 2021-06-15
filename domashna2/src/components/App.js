import React from 'react';
import {Movie} from './Movie';



let films = [
    {name: 'Perfetti sconosciuti', date: '11-02-2016', genre:'comedy', imdbLink: <a href ='https://www.imdb.com/title/tt4901306/?ref_=fn_al_tt_1' target='_blank'>Link</a>, imgUrl: <img src= 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7035388fb19c5e5fc64f970606b5a46a3968ed93a4c80a7d4ebf1106ada78d84._RI_V_TTW_.jpg' width='100px' height='100px'/>},
    {name: 'La vita è bella', date: '20-12-1997', genre:'comedy-drama', imdbLink: <a href= 'https://www.imdb.com/title/tt0118799/?ref_=fn_al_tt_1' target='_blank'>Link</a>, imgUrl: <img src= 'https://upload.wikimedia.org/wikipedia/en/7/7c/Vitaebella.jpg'  width='100px' height='100px'/>},
    {name: 'Suburra', date: '14-10-2015', genre:'gangster', imdbLink: <a href= 'https://www.imdb.com/title/tt4025514/?ref_=fn_al_tt_2' target='_blank'>Link</a>, imgUrl: <img src= 'https://m.media-amazon.com/images/M/MV5BYzhmZTViMzktNjE5MC00MjIxLTkzYjctNDZjNmQ5YWI5MGEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg' width='100px' height='100px'/>},
    {name: 'Ladri di biciclette', date: '24-11-1948',genre:'drama',imdbLink: <a href= 'https://www.imdb.com/title/tt0040522/?ref_=fn_al_tt_1' target='_blank'>Link</a>, imgUrl: <img src = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ladri_di_biciclette_%28film%29.jpg'  width='100px' height='100px'/>},
    {name: 'Mio fratello è figlio unico' , date:'20-04-2007', genre: 'drama' , imdbLink: <a href= 'https://www.imdb.com/title/tt0846040/?ref_=fn_al_tt_1' target='_blank'>Link</a>, imgUrl: <img src= 'https://images-na.ssl-images-amazon.com/images/I/51oYvRxcdKL._SX355_.jpg' width='100px' height='100px'/>}
]

export function App() {

    return(
        <div id = 'app'>
            <h2>App</h2>
            <Movie filmovi = {films}/>
        </div>
    )
}