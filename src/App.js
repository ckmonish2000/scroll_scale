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

  return (
    <div style={{ height: '200vh', overflow: "hidden" }}>App

      <div style={{ height: '100vh', overflow: "hidden" }}>
        <div className="circle_1" style={{ transform: `scale(${percentage / 2})` }}>.</div>
      </div>


      <div style={{ textAlign: 'right', height: '100vh', overflow: "hidden" }}>

        {percentage > 55 && <div className="circle_1" style={{ marginLeft: '-10pt', transform: percentage > 60 ? `scale(${percentage * 0.33})` : "", background: "red" }}>.</div>}
      </div>
    </div>
  )
}
