import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    values: []
  };

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }

    render(){
      return (
        <div className="App">
          <header className="App-header">
            Project 1
          </header>
          <MainBody body={this.state.values}/>
        </div>
      );
    }
}

type Props = {
  body: string[];
};
class MainBody extends React.Component<Props> {
  render(){
    return(
      <div className="mainbody">
        {this.props.body.map((value: any, index) => <p className="maintext" key={value}>{index+1}. {value}</p>)}
      </div>
    );
  }
}

export default App;
