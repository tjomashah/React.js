import React from 'react'
import { Table, Tag, Space, Button } from 'antd'

const columns = [
  {
    title: 'Bank',
    dataIndex: 'bank',
    key: 'bank',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Auto execute',
    dataIndex: 'auto',
    key: 'auto',
  },
  {
    title: 'File',
    dataIndex: 'file',
    key: 'file',
  },
  {
    title: 'Created at',
    key: 'created',
    dataIndex: 'created',
    // render: (tags) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? 'geekblue' : 'green'
    //       if (tag === 'loser') {
    //         color = 'volcano'
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       )
    //     })}
    //   </>
    // ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Pay to {record.bank}</a>
        <Button
          style={{
            width: '1.7vw',
            height: '1.7vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.9vw',
          }}
          danger
        >
          X
        </Button>
      </Space>
    ),
  },
]
const data = [
  {
    key: '1',
    bank: 'Santander',
    auto: 'Yes',
    file: 'Some file',
    created: 'Bank',
  },
  {
    key: '2',
    bank: 'BBVA',
    auto: 'Yes',
    file: 'Some file',
    created: 'Bank',
  },
  {
    key: '3',
    bank: 'Caixa Bank',
    auto: 'No',
    file: 'Some file',
    created: 'No created',
  },
]

function CreateTable() {
  return (
    <>
      <Table
        style={{
          width: '80vw',
          marginLeft: '10vw',
          border: '0.1vw solid lightGrey',
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  )
}

export default CreateTable
