export const renderProducts = () => {
    const products = document.querySelector('.goods');
    products.innerHTML = `
    <div class="container">
    <h2 class="goods__title">новинки</h2>
    <ul class="goods__list">
      <li class="goods__item">
        <article class="product">
          <a href="#" class="product__link">
            <img src="./img/product01.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">
            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
          </a>
          <div class="product__row">
            <p class="product__price">руб 2999</p>
            <button class="product__btn-favorite product__btn-favorite_active" aria-label="Добавить в избранное"></button>
          </div>

          <ul class="product__color-list">
            <li class="product__color-item">
              <div class="color color_red color_check"></div>
            </li>
              <li class="product__color-item">
              <div class="color color_white "></div>
            </li>
              <li class="product__color-item">
              <div class="color color_black "></div>
            </li>
          </ul>
        </article>
      </li>
      <li class="goods__item">
        <article class="product">
          <a href="#" class="product__link">
            <img src="./img/product02.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">
            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
          </a>
          <div class="product__row">
            <p class="product__price">руб 2999</p>
            <button class="product__btn-favorite " aria-label="Добавить в избранное"></button>
          </div>
          <ul class="product__color-list">
            <li class="product__color-item">
              <div class="color color_red color_check"></div>
            </li>
              <li class="product__color-item">
              <div class="color color_white "></div>
            </li>
              <li class="product__color-item">
              <div class="color color_black "></div>
            </li> 
          </ul>
        </article>
      </li>

       <li class="goods__item">
        <article class="product">
          <a href="#" class="product__link">
            <img src="./img/product01.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">
            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
          </a>
          <div class="product__row">
            <p class="product__price">руб 2999</p>
            <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
          </div>
          <ul class="product__color-list">
            <li class="product__color-item">
              <div class="color color_red color_check"></div>
            </li>
              <li class="product__color-item">
              <div class="color color_white "></div>
            </li>
              <li class="product__color-item">
              <div class="color color_black "></div>
            </li>
          </ul>
        </article>
      </li>
       <li class="goods__item">
        <article class="product">
          <a href="#" class="product__link">
            <img src="./img/product02.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">
            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
          </a>
          <div class="product__row">
            <p class="product__price">руб 2999</p>
            <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
          </div>
            <ul class="product__color-list">
            <li class="product__color-item">
              <div class="color color_red color_check"></div>
            </li>
              <li class="product__color-item">
              <div class="color color_white "></div>
            </li>
              <li class="product__color-item">
              <div class="color color_black "></div>
            </li>
          </ul>
        </article>
      </li>
       <li class="goods__item">
        <article class="product">
          <a href="#" class="product__link">
            <img src="./img/product01.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">
            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
          </a>
          <div class="product__row">
            <p class="product__price">руб 2999</p>
            <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
          </div>
          <ul class="product__color-list">
                  <li class="product__color-item">
              <div class="color color_red color_check"></div>
            </li>
              <li class="product__color-item">
              <div class="color color_white "></div>
            </li>
              <li class="product__color-item">
              <div class="color color_black "></div>
            </li>
            
          </ul>
        </article>
      </li>
       <li class="goods__item">
        <article class="product">
          <a href="#" class="product__link">
            <img src="./img/product02.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">
            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
          </a>
          <div class="product__row">
            <p class="product__price">руб 2999</p>
            <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
          </div>
          <ul class="product__color-list">
            
                  <li class="product__color-item">
              <div class="color color_red color_check"></div>
            </li>
              <li class="product__color-item">
              <div class="color color_white "></div>
            </li>
              <li class="product__color-item">
              <div class="color color_black "></div>
            </li>
          </ul>
        </article>
      </li>
    </ul>
  </div>
    `;
};
