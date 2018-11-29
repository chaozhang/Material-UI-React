// components left list items data
import namor from "namor"


const BASE_URL = '/';

const range = len => {
    const arr = [];

    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
};

const newPerson = () => {
    const progress = Math.floor(Math.random() * 100);

    return {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: progress,
        status:
          progress > 80
            ? "Completed"
            : progress > 33 ? "In Progress" : "Started"
    };
};

const makeTableData = (len = 500) => {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(3).map(newPerson)
    };
  });
}

const navItems = [
    {
      name: 'Systems',
      url: BASE_URL + 'components/sidenav/systems',
      iconId: 'Computer'
    },
    {
      name: 'Locations',
      url: BASE_URL + 'components/sidenav/locations',
      iconId: 'Place'
    },
    {
      name: 'Diagnostics',
      url: BASE_URL + 'components/sidenav/diagnostics',
      iconId: 'LocalHospital'
    },
    {
      name: 'Management',
      url: BASE_URL + 'components/sidenav/management',
      iconId: 'Settings'
    },
    {
      name: 'Users',
      url: BASE_URL + 'components/sidenav/users',
      iconId: 'People'
    },
    {
      name: 'Logout',
      url: BASE_URL + 'components/sidenav/logout',
      iconId: 'ExitToApp'
    }
];


export {
    makeTableData,
    navItems
};
