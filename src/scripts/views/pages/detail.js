import UrlParser from '../../routes/url-parser';
import RestoranDbSource from '../../data/restorandb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoranDbSource.detailRestoran(url.id);
    const restoContainer = document.querySelector('#resto');
    resto.menus.food = resto.menus.foods.map((item) => item.name).join(', ');
    resto.menus.drink = resto.menus.drinks.map((item) => item.name).join(', ');

    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
