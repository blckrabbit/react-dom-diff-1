import React from 'react';
import './App.css';
import { List } from "react-virtualized";
const rowCount = 1000;
const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;
class App extends React.Component {
  constructor() {
    super();
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx,
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello '
      }
    });
  };

  // renderRow(item) {
  //   return (
  //     <div key={item.id} className="row">
  //       <div className="image">
  //         <img src={item.image} alt="" />
  //       </div>
  //       <div className="content">
  //         <div>{item.name}</div>
  //         <div>{item.text}</div>
  //       </div>
  //     </div>
  //   );
  // };
  renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{this.list[index].name}</div>
          <div>{this.list[index].text}</div>
        </div>
      </div>
    );
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="list">
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={this.renderRow.bind(this)}
            rowCount={this.list.length} />
        </div>
      </div>
    );
  }
}

export default App;
