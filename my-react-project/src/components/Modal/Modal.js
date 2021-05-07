import React, { useState } from 'react'
import './Modal.css'

function Modal() {
  const [isOpen, setIsOpen] = useState('OPEN MODAL')

  function toggle() {
    setIsOpen(isOpen == 'OPEN MODAL' ? 'CLOSE MODAL' : 'OPEN MODAL')
  }

  return (
    <>
      <button className="btn btn-dark" onClick={toggle}>
        {isOpen}
      </button>
      {isOpen == 'CLOSE MODAL' && (
        <div className="modal">
          <div className="modal-body">
            <h2>Modal Window</h2>
            <button className="btn btn-warning" onClick={toggle}>
              {isOpen}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal

// =======================================
// class Modal extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isOpen: false,
//     }
//   }

//   render() {
//     return (
//       <>
//         <button
//           className="btn btn-dark"
//           onClick={() => this.setState({ isOpen: true })}
//         >
//           Open Modal
//         </button>

//         {this.state.isOpen && (
//           <div className="modal">
//             <div className="modal-body">
//               <h2>Modal Window</h2>
//               <button
//                 className="btn btn-warning"
//                 onClick={() => this.setState({ isOpen: false })}
//               >
//                 Close Modal
//               </button>
//             </div>
//           </div>
//         )}
//       </>
//     )
//   }
// }

// export default Modal
