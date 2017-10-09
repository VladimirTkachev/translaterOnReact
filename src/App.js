import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { translate } from './translate';
import { listLang } from './langList';


class App extends Component {

  constructor(props) {
    super (props);
    this.changeMyInput = this.changeMyInput.bind(this);
    this.changeLang = this.changeLang.bind(this);

    this.state = {
      result: '',
      first: 'en',
      second: 'en'
    }
  }

  changeMyInput(e) {
    let {first, second} = this.state;
    let lang = first + '-' + second; 
    e.length === 0 ? this.setState({result: ''}) : translate(e, lang).then(response => {this.setState({result: response.text[0]})});
  }

changeLang(e, tag) {
  this.setState({
    [tag] : e.target.value
  })
}



  render() {

    let optionList = listLang.map(function (element, i){
      return <option value = {element.lit} key = {i}>{element.language}</option>
    })

    return (
      <div className = "wrap">
        {/* <ul> 
          <li data-title="en-ru" onClick={e => this.changeLang(e.target.data-value)}></li>
        </ul> */}
        <form>
          <div className = "wrap1">
            <textarea 
            maxLength = '1000' 
            rows = '9' cols = '50' 
            id = 'myInput' 
            onChange = {e => this.changeMyInput(e.target.value) }>
            </textarea>
            <select 
            className = "first" 
            id = "1" 
            onChange = {e => this.changeLang(e.target.value)}>
            {optionList}
            </select>           
          </div>
          <div className = "wrap2">
            <div id = 'result' >
              {this.state.result}
            </div>
            <select className = "second" 
            id = "2" 
            onChange = {e => this.changeLang(e, 'second')}>
            {optionList}
            </select>            
          </div>
        </form>
      </div>
    );
  }
}

export default App;







// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
