import { HomeLayout, Dashboard, UploadLayout, CheckInCheckOutLayout } from '.';

export default {
  path: '',
  component: HomeLayout,
  role: 'privated',
  childRoutes: [
    { path: 'dashboard', component: Dashboard, isIndex: true, role: 'privated' },
    { path: 'upload', component: UploadLayout, role: 'privated' },
    { path: 'cico', component: CheckInCheckOutLayout, role: 'privated' },
  ],
};
