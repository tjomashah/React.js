import React from 'react'
import { Select, Input } from 'antd'
import './Modal.css'

const { Option } = Select

function Content() {
  return (
    <>
      <div className="modal">
        <div className="modal-body">
          <div className="modal-content">
            <div className="modal-file">
              <label htmlFor="choose">Choose file</label>

              <Select
                id="choose"
                showSearch
                style={{ width: '35vw', backgroundColor: 'lightgrey' }}
                optionFilterProp="children"
              >
                <Option value="1">Xmls</Option>
                <Option value="2">PDF</Option>
                <Option value="3">Doc</Option>
              </Select>
            </div>
            <div className="modal-templ">
              <label htmlFor="tamplate">Template</label>

              <Select
                id="tamplate"
                mode="tags"
                style={{ width: '35vw' }}
                placeholder="Search to Select"
                optionFilterProp="children"
              >
                <Option value="1">Default template</Option>
                <Option value="2">Custome template</Option>
                <Option value="3">Modern template</Option>
              </Select>
            </div>
          </div>
          <div className="modal-content">
            <div className="modal-bank">
              <label htmlFor="bank">Bank</label>

              <Select
                id="bank"
                mode="tags"
                style={{ width: '35vw' }}
                placeholder="Search to Select"
                optionFilterProp="children"
              >
                <Option value="1">Santander</Option>
                <Option value="2">BBVA</Option>
                <Option value="3">Caixa Bank</Option>
              </Select>
            </div>
            <div className="modal-send">
              <label htmlFor="send">Send Method</label>

              <Select
                id="send"
                showSearch
                style={{ width: '35vw' }}
                optionFilterProp="children"
              >
                <Option value="1">Apple Pay</Option>
                <Option value="2">Google Pay</Option>
                <Option value="3">By Bank Card</Option>
              </Select>
            </div>
          </div>
          <div className="modal-content">
            <div className="modal-send">
              <label htmlFor="send">Message Period</label>
              <Input type="number" style={{ width: '35vw' }} />
            </div>
            <div className="modal-send">
              <label htmlFor="send">Message Per Period</label>
              <Input type="number" style={{ width: '35vw' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
