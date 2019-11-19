// import React, { useState } from 'react'
// import ColorPicker from '../components/ColorPicker.js'

// const RandomColor = props => {
//   console.log(props)
//   const [redValue, setRedValue] = useState(0)
//   const [greenValue, setGreenValue] = useState(0)
//   const [blueValue, setBlueValue] = useState(0)

//   const updateValue = () => {
//     let x = Math.floor(Math.random() * 256)
//     let y = Math.floor(Math.random() * 256)
//     let z = Math.floor(Math.random() * 256)
//     let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')'
//     if (x) setRedValue(redValue)
//     if (y) setGreenValue(greenValue)
//     if (z) setBlueValue(blueValue)
//     console.log(bgColor)
//     {
//     }
//   }

//   return (
//     <>
//       <button className="colorClicker" onClick={updateValue}>
//         Change Color
//       </button>

//       <h1 className="colorCode"></h1>
//     </>
//   )
// }
// export default RandomColor
