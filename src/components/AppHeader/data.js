// header nav data
const repoUrl = 'https://bitbucket.org/zapchao/zapwebcommon';

const logo = {
  url: '/'
}

const app = {
  url: '/',
  title: 'Design System'
}

const menu = {
  icon: 'Person',
  menuItems: [
    {
      icon: 'Code',
      label: 'Bitbucket',
      url: repoUrl
    },
    {
      icon: 'Feedback',
      label: 'Feedback',
      url: `${repoUrl}/issues`
    }
  ]
}


export default {menu, logo, app}