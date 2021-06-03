import React, { useState } from 'react'
import { Select, Input, Button, Upload, Form, Space } from 'antd'
import GetTimePicker from './TimePicker/getTimePicker'
import './styles/Modal.css'
import MessageTemplate from './MessageTemplate/MessageTemplate'
import { UploadOutlined } from '@ant-design/icons'

const { Option } = Select

function Content() {
  const [file, setFile] = useState('')

  const handleChange = (e) => {
    setFile(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <div className="modal">
          <div className="modal-body">
            <div className="modal-content">
              <div className="modal-file">
                <label htmlFor="choose">Choose file</label>

                <Space>
                  <Upload>
                    <Button style={{ width: '35vw' }}>
                      <UploadOutlined /> Upload file
                    </Button>
                  </Upload>
                </Space>
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
                <label htmlFor="per">Message Period</label>
                <Input
                  onChange={handleChange}
                  value={file}
                  id="per"
                  type="number"
                  style={{ width: '35vw' }}
                />
              </div>
              <div className="modal-send">
                <label htmlFor="period">Message Per Period</label>
                <Input id="period" type="number" style={{ width: '35vw' }} />
              </div>
            </div>

            <div className="modal-content">
              <GetTimePicker />
              <div className="modal-send">
                <label htmlFor="fee" defaultValue="7.5">
                  Unpaid Fee
                </label>

                <Input
                  id="fee"
                  type="number"
                  style={{ width: '35vw', marginTop: '0.3vw' }}
                />
              </div>
            </div>
            <MessageTemplate />
            <div>
              <Button
                style={{
                  width: '5vw',
                  backgroundColor: 'lightgrey',
                  zIndex: 1,
                  position: 'fixed',
                  bottom: '13vw',
                  right: '14vw',
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  )
}

export default Content
