import React from 'react'
import { Table, Space, Button } from 'antd'
import dataTable from './dataTable'

const dataTable1 = dataTable.map((item) => item.column_1)
const dataTable2 = dataTable.map((item) => item.column_2)
const dataTable3 = dataTable.map((item) => item.column_3)
const dataTable5 = dataTable.map((item) => item.column_5)
const dataTable6 = dataTable.map((item) => item.column_6)

const columns = [
  {
    title: dataTable1.map((item) => item.title),
    dataIndex: dataTable1.map((item) => item.dataIndex),
    key: dataTable1.map((item) => item.key),
  },
  {
    title: dataTable2.map((item) => item.title),
    dataIndex: dataTable2.map((item) => item.dataIndex),
    key: dataTable2.map((item) => item.key),
  },
  {
    title: dataTable3.map((item) => item.title),
    dataIndex: dataTable3.map((item) => item.dataIndex),
    key: dataTable3.map((item) => item.key),
  },

  {
    title: dataTable5.map((item) => item.title),
    dataIndex: dataTable5.map((item) => item.dataIndex),
    key: dataTable5.map((item) => item.key),
  },
  {
    title: dataTable6.map((item) => item.title),
    key: dataTable6.map((item) => item.key),
    render: (text, record) => (
      <Space size="middle">
        <a>Get money from {record.client}</a>
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

const tablerow1 = dataTable.map((item) => item.row_1)
const tablerow2 = dataTable.map((item) => item.row_2)
const tablerow3 = dataTable.map((item) => item.row_3)

const data = [
  {
    key: tablerow1.map((item) => item.key),
    client: tablerow1.map((item) => item.client),
    code: tablerow1.map((item) => item.code),
    paid: tablerow1.map((item) => item.paid),

    cutted: tablerow1.map((item) => item.cutted),
  },
  {
    key: tablerow2.map((item) => item.key),
    client: tablerow2.map((item) => item.client),
    code: tablerow2.map((item) => item.code),
    paid: tablerow2.map((item) => item.paid),

    cutted: tablerow1.map((item) => item.cutted),
  },
  {
    key: tablerow3.map((item) => item.key),
    client: tablerow3.map((item) => item.client),
    code: tablerow3.map((item) => item.code),
    paid: tablerow3.map((item) => item.paid),

    cutted: tablerow1.map((item) => item.cutted),
  },
]

function InvoiceTable() {
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

export default InvoiceTable
