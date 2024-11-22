import React from 'react';
import '../../index.css'
import '../../styles/Window.css'
import '../../styles/WinRPG.css'

const widthAdjustment = (el) => {
    let bars = document.querySelectorAll('.ress');
    for (let bar of bars) {
        bar.style.width = `${(bar.parentElement.firstChild.textContent / 100)}%`
    }
}

class Progress extends React.Component {

    render() {
        return (
            <div className="prog">
                <span>{this.props.value}</span>
                <div className="ress"></div>
            </div>
        );
    }

    componentDidMount() {
        widthAdjustment()
      }
  }
  
  export default Progress;