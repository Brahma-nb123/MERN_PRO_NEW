const menus = [
  {
    label: 'Home',
    to: '/allUsers'
  },
  {
    label: 'Chat List',
    to: 'chat-list',
    Children: [
      {
        label: 'Admin Chat',
        to: '/'
      },
      {
        label: 'Agent Chat',
        to: '/',
        Children: [
          {
            label: 'child1',
            to: '/'
          },
          {
            label: 'Child2',
            to: '/',
            Children: [
              {
                label: 'tab1',
                to: '/'
              },
              {
                label: 'tab2',
                to: '/'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Call report',
    to: '/'
  },
  {
    label: 'Mail Report',
    to: '/',
    Children: [
      {
        label: 'child1',
        to: 'allUsers'
      },
      {
        label: 'Child2',
        to: 'allUsers'
      }
    ]
  }
];

export default menus;
