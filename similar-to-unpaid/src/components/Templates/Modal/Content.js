import React, { useState } from 'react'
import { Select, Input, Button, Form, Avatar } from 'antd'
import { UserOutlined, FilterOutlined } from '@ant-design/icons'
import './styles/Modal.css'
import MessageTemplate from './MessageTemplate/MessageTemplate'

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
        <div className="template">
          <div className="template-body">
            <div className="template-content">
              <div className="template-send">
                <label htmlFor="per">Name</label>
                <Input
                  onChange={handleChange}
                  value={file}
                  id="per"
                  type="text"
                  placeholder="Username"
                  style={{ width: '72vw', height: '3vw' }}
                />
              </div>
            </div>

            <MessageTemplate />
          </div>
        </div>
      </Form>
    </>
  )
}

export default Content
