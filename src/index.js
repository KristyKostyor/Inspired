import './index.html';
import './index.scss';

import { router } from "./modules/router";
import { mainPage } from './modules/mainPage/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';
import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';
import { getData } from './modules/getData';
import { API_URL, DATA } from './modules/const';
import { createCssColors } from './modules/createCssColors';

const init = async  () => {

DATA.navigation = await getData(`${API_URL}/api/categories`);
DATA.colors = await getData(`${API_URL}/api/colors`);
createCssColors(DATA.colors);

router.on("*", () => {
  renderHeader();
  renderFooter();
});

router.on("/", () => {
  mainPage();
});

router.on("women", () => {
  womenMainPage();
});

router.on("men", () => {
  menMainPage();
});
/*setTimeout(() => {
    router.navigate('man')
}, 3000);
setTimeout(() => {
  router.navigate("woman");
}, 6000);*/
router.resolve();

}
init();


