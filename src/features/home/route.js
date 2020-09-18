import { HomeLayout, Dashboard, UploadLayout, CheckInCheckOutLayout, DownloadLayout } from '.';
import Shops from './Shops';

export default {
  path: '',
  component: HomeLayout,
  role: 'privated',
  childRoutes: [
    { path: 'shops', component: Shops, isIndex: true },
    { path: 'cico', component: CheckInCheckOutLayout },
    // { path: 'user', component: Dashboard },
    // { path: 'upload', component: UploadLayout },
    // { path: 'download', component: DownloadLayout },
  ],
};
