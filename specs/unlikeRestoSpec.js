import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
 
const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};
 
describe('Unliking A Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });
 
  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });
 
  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

 
    expect(document.querySelector('[aria-label="unlike this restoran"]'))
      .toBeTruthy();
  });
 
  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

 
    expect(document.querySelector('[aria-label="like this restoran"]'))
      .toBeFalsy();
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

   
    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIdb.deleteResto(1);
   
    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));
   
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});