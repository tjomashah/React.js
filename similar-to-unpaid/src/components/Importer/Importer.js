import { Button } from 'antd'
import React from 'react'
import Table from './Table/Table'
import Modal from './Modal/Create'

function Importer() {
  return (
    <>
      <div>
        <Modal />
        <Table />
      </div>
    </>
  )
}

export default Importer
