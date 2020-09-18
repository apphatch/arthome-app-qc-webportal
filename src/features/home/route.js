import { HomeLayout, Dashboard, UploadLayout, CheckInCheckOutLayout, DownloadLayout } from '.';
import Shops from './Shops';
import Errors from './Errors';

export default {
  path: '',
  component: HomeLayout,
  role: 'privated',
  childRoutes: [
    { path: 'shops', component: Shops, isIndex: true },
    { path: 'errors', component: Errors },
    { path: 'cico', component: CheckInCheckOutLayout },
    { path: 'users', component: Dashboard },
    { path: 'upload', component: UploadLayout },
    { path: 'download', component: DownloadLayout },
  ],
};
