'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// header nav data

var BASE_URL = '/';

var navItems = [{
  name: 'Home',
  url: BASE_URL
}, {
  name: 'Components',
  url: BASE_URL + 'gallery'
}, {
  name: 'Colors',
  url: BASE_URL + 'colors'
}, {
  name: 'Iconography',
  url: BASE_URL + 'icons'
}];

exports.default = { navItems: navItems };