import React, { useState } from 'react'

const ColorPicker = props => {
  const [hueValue, setHueValue] = useState(360)
  const [satValue, setSatValue] = useState(65)
  const [lightValue, setLightValue] = useState(20)
  // const [redValue, setRedValue] = useState(0)
  // const [greenValue, setGreenValue] = useState(0)
  // const [blueValue, setBlueValue] = useState(0)
  console.log(props)

  // const updateValue = () => {
  //   let x = Math.floor(Math.random() * 256)
  //   let y = Math.floor(Math.random() * 256)
  //   let z = Math.floor(Math.random() * 256)
  //   let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')'
  //   if (x) setRedValue(redValue)
  //   if (y) setGreenValue(greenValue)
  //   if (z) setBlueValue(blueValue)
  //   console.log(bgColor)
  // }

  return (
    <>
      <main>
        <>
          <button
            className="colorClicker"
            onClick={() => {
              setHueValue(Math.floor(Math.random() * 360))
              setSatValue(Math.floor(Math.random() * 100))
              setLightValue(Math.floor(Math.random() * 100))
            }}
          >
            Change Color
          </button>
        </>
        <h1>{props.title}</h1>
        <div className="sbs">
          <div
            className="wheel"
            style={{
              backgroundColor:
                'hsl(' + hueValue + ',' + satValue + '%, ' + lightValue + '%)'
            }}
          ></div>
          <div className="slider">
            {/* <section className="slider"> */}
            <input
              type="range"
              max="360"
              name="Hue"
              onChange={event => setHueValue(event.target.value)}
              value={hueValue}
            />
            Hue
            <input
              type="range"
              name="Saturation"
              onChange={event => setSatValue(event.target.value)}
              value={satValue}
            />
            Saturation
            <input
              type="range"
              name="Lightness"
              onChange={event => setLightValue(event.target.value)}
              value={lightValue}
            />
            Lightness
            {/* </section> */}
            <h3>{props.subtitle}</h3>
            <p>
              {hueValue}, {satValue}, {lightValue}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default ColorPicker
