import React, {Component} from 'react';
import './App.css';
import 'purecss/build/tables.css';

class App extends Component {
  static propTypes = {
    filterFn: React.PropTypes.func.isRequired,
    carStock: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        type: React.PropTypes.string.isRequired,
        color: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        yearOfConstruction: React.PropTypes.number.isRequired,
        notes: React.PropTypes.string,
      }).isRequired
    ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      carsFound: props.carStock,
    };
    this.textInput = null;
  }

  componentDidMount() {
    this.textInput.focus();
  }

  handleQueryChange(query) {
    this.setState({
      query,
      carsFound: this.props.filterFn(this.props.carStock, query),
    });
  }

  renderTable(carsFound) {
    return (
      <table className="App-table pure-table">
        <thead>
        <tr>
          <td>Type</td>
          <td>Color</td>
          <td>Year</td>
          <td>Price</td>
          <td>Notes</td>
        </tr>
        </thead>
        <tbody>
        {
          // data set doesn't provide a unique key
          carsFound.map((car, i) => (
            <tr key={i}>
              <td>{car.type}</td>
              <td>{car.color}</td>
              <td>{car.yearOfConstruction}</td>
              <td>{car.price}&euro;</td>
              <td>{car.notes}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    )
  }

  render() {
    const { query, carsFound } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Car Search</h2>
          <div>
            <input
              type="text"
              placeholder="Search for type, color or price. Example: audi <20000"
              className="App-search"
              value={query}
              ref={el => this.textInput = el}
              onChange={event => this.handleQueryChange(event.target.value)}
            />
          </div>
        </div>
        <div className="App-result">
          { carsFound.length < 1 ? 'No car found' : this.renderTable(carsFound) }
        </div>
      </div>
    );
  }
}

export default App;
