export default [
  {
    column_1: {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
    },
    column_2: {
      title: 'Send Method',
      dataIndex: 'method',
      key: 'method',
    },
    column_3: {
      title: 'Send Status',
      dataIndex: 'status',
      key: 'status',
    },
    column_4: {
      title: 'Send Date',
      key: 'send',
      dataIndex: 'send',
    },
    column_5: {
      title: 'Action',
      key: 'action',
    },
    row_1: {
      key: '1',
      client: 'Vodafon',
      method: 'Email',
      status: 'Pending',
      send: 'Some date',
    },
    row_2: {
      key: '2',
      client: 'Movistar',
      method: 'Whatsapp',
      status: 'Fulfilled',
      send: 'Some date',
    },
    row_3: {
      key: '3',
      client: 'Orange',
      method: 'Telegram',
      status: 'Some date',
      send: 'Reject',
    },
  },
]
