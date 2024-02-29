

import './App.css'
import SplitPane from 'react-split-pane';

function App() {

  return (
    <>
      <SplitPane split="horizontal" minSize={50}>
        <div style={{background: "red", height:"100%", width:"100%"}}></div>
        <div style={{background: "yellow", height:"100%"}}></div>
    </SplitPane>
    </>
  )
}

export default App
