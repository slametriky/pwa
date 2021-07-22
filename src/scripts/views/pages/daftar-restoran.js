import RestoranDbSource from '../../data/restorandb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const DaftarRestoran = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restoran</h2>
        <div id="restos" class="restos">
        
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await RestoranDbSource.daftarRestoran();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default DaftarRestoran;
