const navigations = [
  {
    title: 'Home',
    path: '',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Rooms',
    path: '/rooms',
  },
  {
    title: 'Offers',
    path: '/offers',
  },
  {
    title: 'Services',
    path: '/services',

    children: [
      { title: 'Restaurant', path: '/restaurant' },
      { title: 'SpaCenter', path: '/spa-center' },
      { title: 'SwimmingPool', path: '/swimming-pool' },
    ],
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export default navigations;
