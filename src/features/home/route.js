import { HomeLayout, Dashboard, UploadLayout, CheckInCheckOutLayout, DownloadLayout } from '.';

export default {
  path: '',
  component: HomeLayout,
  role: 'privated',
  childRoutes: [
    { path: 'dashboard', component: Dashboard, isIndex: true },
    { path: 'upload', component: UploadLayout },
    { path: 'cico', component: CheckInCheckOutLayout },
    { path: 'download', component: DownloadLayout },
  ],
};
