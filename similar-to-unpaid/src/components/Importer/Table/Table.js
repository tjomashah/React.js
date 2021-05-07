import React from 'react'
import { Table, Space, Button } from 'antd'
import tableData from './TableData'
import './table.css'

const tabledata1 = tableData.map((item) => item.column_1)
const tabledata2 = tableData.map((item) => item.column_2)
const tabledata3 = tableData.map((item) => item.column_3)
const tabledata4 = tableData.map((item) => item.column_4)
const tabledata5 = tableData.map((item) => item.column_5)

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
    dataIndex: tabledata3.map((item) => item.dataIndex),
    key: tabledata3.map((item) => item.key),
  },
  {
    title: tabledata4.map((item) => item.title),
    dataIndex: tabledata4.map((item) => item.dataIndex),
    key: tabledata4.map((item) => item.key),
  },
  {
    title: tabledata5.map((item) => item.title),
    key: tabledata5.map((item) => item.key),
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

const tablerow1 = tableData.map((item) => item.row_1)
const tablerow2 = tableData.map((item) => item.row_2)
const tablerow3 = tableData.map((item) => item.row_3)

const data = [
  {
    key: tablerow1.map((item) => item.key),
    bank: tablerow1.map((item) => item.bank),
    auto: tablerow1.map((item) => item.auto),
    file: tablerow1.map((item) => item.file),
    created: tablerow1.map((item) => item.created),
  },
  {
    key: tablerow2.map((item) => item.key),
    bank: tablerow2.map((item) => item.bank),
    auto: tablerow2.map((item) => item.auto),
    file: tablerow2.map((item) => item.file),
    created: tablerow2.map((item) => item.created),
  },
  {
    key: tablerow3.map((item) => item.key),
    bank: tablerow3.map((item) => item.bank),
    auto: tablerow3.map((item) => item.auto),
    file: tablerow3.map((item) => item.file),
    created: tablerow3.map((item) => item.created),
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
