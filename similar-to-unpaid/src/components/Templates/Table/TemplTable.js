import React from 'react'
import { Table, Space, Button } from 'antd'
import tableData from './tableData'

const tabledata1 = tableData.map((item) => item.column_1)
const tabledata2 = tableData.map((item) => item.column_2)
const tabledata3 = tableData.map((item) => item.column_3)

const columns = [
  {
    title: tabledata1.map((item) => item.title),
    dataIndex: tabledata1.map((item) => item.dataIndex),
    key: tabledata1.map((item) => item.key),
  },
  {
    title: tabledata2.map((item) => item.title),
    dataIndex: tabledata2.map((item) => item.dataIndex),
    key: tabledata2.map((item) => item.key),
  },

  {
    title: tabledata3.map((item) => item.title),
    key: tabledata3.map((item) => item.key),
    render: (text, record) => (
      <Space size="middle">
        <a>Some action</a>
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

const tablerow1 = tableData.map((item) => item.row_1)
const tablerow2 = tableData.map((item) => item.row_2)
const tablerow3 = tableData.map((item) => item.row_3)

const data = [
  {
    key: tablerow1.map((item) => item.key),
    name: tablerow1.map((item) => item.name),
    update: tablerow1.map((item) => item.update),
  },
  {
    key: tablerow2.map((item) => item.key),
    name: tablerow2.map((item) => item.name),
    update: tablerow2.map((item) => item.update),
  },
  {
    key: tablerow3.map((item) => item.key),
    name: tablerow3.map((item) => item.name),
    update: tablerow3.map((item) => item.update),
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
