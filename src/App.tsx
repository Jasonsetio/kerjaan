import React from 'react';
import logo from './logo.svg';
import './App.css';

interface IData {
  id: string;
  name: string;
  email: string;
}

interface IAppState{
  showTable: boolean;
}

interface IAppProps{
  data:IData[]
}

class App extends React.Component<IAppProps, IAppState> {
public toogleShowTable = () => {
  const { showTable } = this.state;
  this.setState({showTable: !showTable});
}
}

export default App;

<button onClick= { this.toogleShowTable}></button>