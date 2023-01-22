import { products } from "../const";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const getFavorite = () => 
JSON.parse(localStorage.getItem("favorite") || '[]');

const addFavorite = (id) => {
    const favoriteList = getFavorite();
    favoriteList.push(id);
    localStorage.setItem('favorite', JSON.stringify(favoriteList))
};

const removeFavorite = (id) => {
    const favoriteList = getFavorite();
    const index = favoriteList.findIndex(item => item === id);
    if(index=== -1) return;
    favoriteList.splice(index, 1)
    localStorage.setItem("favorite", JSON.stringify(favoriteList));
};

products.addEventListener('click', (e) =>{
    
    const target= e.target;

    if(target.closest('.favorite_active')){
        removeFavorite(target.dataset.id);
        target.classList.remove("favorite_active");
            console.log(getFavorite());
        return;
    };

        if (target.closest(".favorite")) {
        addFavorite(target.dataset.id)
        target.classList.add("favorite_active");
        console.log(getFavorite());
        return;
        
    }
})

export const  favoriteController = () => {
    renderNavigation("all");
    renderHero(false);
    renderProducts('Избранное', {list:getFavorite()});
    
};

