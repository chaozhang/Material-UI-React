'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// header nav data
var repoUrl = 'https://bitbucket.org/zapchao/zapwebcommon';

var logo = {
  url: '/'
};

var app = {
  url: '/',
  title: 'Design System'
};

var menu = {
  icon: 'Person',
  menuItems: [{
    icon: 'Code',
    label: 'Bitbucket',
    url: repoUrl
  }, {
    icon: 'Feedback',
    label: 'Feedback',
    url: repoUrl + '/issues'
  }]
};

exports.default = { menu: menu, logo: logo, app: app };