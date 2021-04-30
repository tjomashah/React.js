import React, { useState } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Content from './Content'
import Content2 from './Content2'

function Create() {
  const [show, isShow] = useState('Create')

  const showContent = () => {
    isShow(show == 'Create' ? 'Exit' : 'Create')
  }

  return (
    <>
      <div>
        <div className="button-create">
          <Button
            onClick={showContent}
            style={{
              backgroundColor: '#87d068',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <PlusOutlined />
            {show}
          </Button>
        </div>
        {show == 'Exit' && (
          <div>
            <Content />

            <div>
              <Button
                onClick={showContent}
                style={{
                  backgroundColor: 'orange',
                  zIndex: 1,
                  position: 'fixed',
                  bottom: '9vw',
                  right: '14vw',
                }}
              >
                {show}
              </Button>
            </div>
            <div>
              <Button
                onClick={showContent}
                style={{
                  backgroundColor: 'lightgrey',
                  zIndex: 1,
                  position: 'fixed',
                  bottom: '9vw',
                  right: '22vw',
                }}
              >
                Send
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Create
