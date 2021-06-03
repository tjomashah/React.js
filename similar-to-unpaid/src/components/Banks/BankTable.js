import React, { useState } from 'react'
import { Input, Form } from 'antd'
import './styles/bank.css'

function Content() {
  // const [file, setFile] = useState('')

  // const handleChange = (e) => {
  //   setFile(e.target.value)
  // }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <div className="bank-content">
          <div style={{ marginRight: '3vw' }}>
            <div style={{ marginBottom: '3vw' }}>
              <div>
                <label htmlFor="name">Name</label>
              </div>
              <Input
                // onChange={handleChange}
                // value={file}
                id="name"
                style={{ width: '35vw' }}
              />
            </div>
            <div style={{ marginBottom: '3vw' }}>
              <div>
                <label htmlFor="iban">IBAN</label>
              </div>
              <Input
                // onChange={handleChange}
                // value={file}
                id="iban"
                style={{ width: '35vw' }}
                type="number"
              />
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '3vw' }}>
              <div>
                <label htmlFor="bic">BIC</label>
              </div>
              <Input
                // onChange={handleChange}
                // value={file}
                id="bic"
                style={{ width: '35vw' }}
                type="number"
              />
            </div>
            <div style={{ marginBottom: '3vw' }}>
              <div>
                <label htmlFor="bicname">BIC Name</label>
              </div>
              <Input
                // onChange={handleChange}
                // value={file}
                id="bicname"
                style={{ width: '35vw' }}
              />
            </div>
          </div>
          <div>
            <button
              className="btn btn-success"
              style={{
                width: '5vw',
                zIndex: 1,
                position: 'fixed',
                bottom: '14vw',
                right: '14vw',
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    </>
  )
}

export default Content
