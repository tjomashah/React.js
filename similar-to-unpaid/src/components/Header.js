import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import logo from '../assets/delinternet.png'
import '../App.css'

function Header() {
  return (
    <>
      <div className="header-content">
        <div>
          <a href="https://delinternet.com/" target="_blank">
            <img src={logo} width="100" alt={'Logo'} />
          </a>
        </div>

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
            }}
            icon={<UserOutlined />}
          />
        </div>
      </div>
    </>
  )
}

export default Header
