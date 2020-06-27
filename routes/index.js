const routes = module.exports = require('next-routes')();

const urls = [
	{ file: 'index', path: '/index' },
	{ file: 'home', path: '/home' },
	{ file: 'news', path: '/news/:id' }
];

urls.forEach(({ file, path }) => 
  // routes.add(file, `/:lang${path}`)); // 
  routes.add(file, `${path}`));
routes.add('default', '/index', 'index');

