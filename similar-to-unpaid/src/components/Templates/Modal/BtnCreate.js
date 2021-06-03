import React, { useState } from 'react'
import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import Content from './Content'

function BtnCreate() {
  const [show, isShow] = useState('Create')

  const showContent = () => {
    isShow(show == 'Create' ? 'Save' : 'Create')
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
            <PlusCircleOutlined />
            {show}
          </Button>
        </div>
        {show == 'Save' && (
          <div>
            <Content />

            <div>
              <button
                className="btn btn-success"
                onClick={showContent}
                style={{
                  width: '5vw',
                  zIndex: 1,
                  position: 'fixed',
                  bottom: '12vw',
                  right: '14vw',
                }}
              >
                {show}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default BtnCreate
