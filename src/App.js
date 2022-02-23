import React from 'react'
import "./App.css"
export default function App() {

  const [percentage, setpercentage] = React.useState(null)

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);

      setpercentage(scrollPercentRounded)
      document.title = scrollPercentRounded

    });
  }, [])

  // console.log(percentage - 7.6)

  return (
    <div style={{ height: '200vh', overflow: "hidden" }}>App

      <div style={{ height: '100vh', overflow: "hidden" }}>
        <div className="circle_1" style={{ transform: `scale(${percentage / 2})` }}>.</div>
      </div>


      <div style={{ textAlign: 'right', height: '100vh', overflow: "hidden" }}>

        {/* {percentage > 55 &&  */}
        <div
          className="circle_2"
          style={{
            marginLeft: '-10pt',
            width: "10px",
            height: "10px",
            transform: `scale(${percentage * 2})`,
            background: "red"
          }}>
          .
        </div>
      </div>
    </div >
  )
}
