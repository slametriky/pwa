import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Resto Name</h4>
    <p>${resto.name}</p>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Adress</h4>
    <p>${resto.address}</p>    
    <h4>Rating</h4>
    <p>${resto.rating}</p>
  </div>  
  <div class="resto__overview">
    <h3>Description</h3>
    <p>${resto.description}</p>
  </div>
  <div class="resto__menu">
    <h3>Foods</h3>
    <p>${resto.menus.food}

    <h3>Drinks</h3>
    <p>${resto.menus.drink}
  </div>  
  <div class="resto__review">
    <h3>Review</h3>
    <p>Name: ${resto.customerReviews[0].name}</p>
    <p>Review: ${resto.customerReviews[0].review}</p>
    <p>Date: ${resto.customerReviews[0].date}</p>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster lazyload" alt="${resto.name}"
            src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="resto__title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restoran" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restoran" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
