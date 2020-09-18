import { HomeLayout, UploadLayout, CheckInCheckOutLayout, DownloadLayout } from '.';
import Shops from './Shops';
import Errors from './Errors';
import Users from './Users';

export default {
  path: '',
  component: HomeLayout,
  role: 'privated',
  childRoutes: [
    { path: 'shops', component: Shops, isIndex: true },
    { path: 'users', component: Users },
    { path: 'errors', component: Errors },
    { path: 'cico', component: CheckInCheckOutLayout },
    { path: 'upload', component: UploadLayout },
    { path: 'download', component: DownloadLayout },
  ],
};
