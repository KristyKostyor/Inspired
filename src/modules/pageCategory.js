import { DATA } from "./const";
import { renderHero } from "./render/renderHero";
import { renderNavigation } from "./render/renderNavigation";
import { renderProducts } from "./render/renderProducts";

export const categoryPage = (routerData) => {
  console.log('routerData:',routerData);
  const { gender, category } = routerData.data;
  const params = { gender, category };

  if (routerData.params?.page) {
    params.page = routerData.params.page;
  }

  const { title } = DATA.navigation[gender].list.find(
    (item) => item.slug === category,);

  renderNavigation(gender, category);
  renderHero(false);
  renderProducts(title, params);
};