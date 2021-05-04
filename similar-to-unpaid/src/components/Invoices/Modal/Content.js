import React, { useState } from 'react'
import { Select, Input, Button, Form, Avatar } from 'antd'
import { UserOutlined, FilterOutlined } from '@ant-design/icons'
import './styles/Modal.css'
import MessageTemplate from './MessageTemplate/MessageTemplate'
import data from './Data'

const { Option } = Select

function Content(props) {
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
            <div>
              <Avatar
                size={40}
                style={{
                  padding: 7,
                  backgroundColor: '#87d068',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '1vw 0',
                }}
                icon={<UserOutlined />}
              />
              <hr style={{ marginBottom: '1vw' }} />
            </div>
            <div className="modal-content">
              <div className="modal-file">
                <label htmlFor="choose">Invoice code</label>
                <Select
                  id="choose"
                  showSearch
                  style={{ width: '35vw', backgroundColor: 'lightgrey' }}
                  optionFilterProp="children"
                >
                  <Option
                    value={data.map((item) => item.select_1.code)}
                  ></Option>
                  <Option
                    value={data.map((item) => item.select_2.code)}
                  ></Option>
                  <Option
                    value={data.map((item) => item.select_3.code)}
                  ></Option>
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

            <MessageTemplate />
            <div>
              <Button
                style={{
                  width: '5vw',
                  backgroundColor: 'lightgrey',
                  zIndex: 1,
                  position: 'fixed',
                  bottom: '14vw',
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
