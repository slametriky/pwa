import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import DaftarRestoran from '../views/pages/daftar-restoran';

const routes = {
  '/': DaftarRestoran, // default page
  '/daftar-restoran': DaftarRestoran,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
