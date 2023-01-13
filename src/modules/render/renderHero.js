export const renderHero = (gender) => {
    const hero = document.querySelector ('.hero');
 

if(!gender){
  hero.style.display = 'none'; 
     return;
}
hero.style.display = ""; 

hero.className = `hero hero__${gender}`;


    hero.innerHTML = `
     <div class="container">
    <div class="hero__content">
      <h2 class="hero__title">Новая коллекция Бюстгальтер-балконет</h2>
      <a href="#" class="hero__link">Перейти</a>
    </div>
  </div>
    `;
};
