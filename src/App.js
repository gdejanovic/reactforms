import React from 'react';


export default class App extends React.Component {
  state = [{ text: '' }];
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === '') return;
    this.props.onFormSubmit(this.state.text);
    this.setState({ text: '' });
  }
  render() {
    const li = document.createElement('li');
    const content = this.state.text;
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          className='input'
          placeholder='Upiši tekst'
          value={this.state.text}
          onChange={(e) => this.setState({text: e.target.value})}
        />
        <button className='button' onClick={this.handleSubmit}>Dodaj Tekst</button>
      </form>
            <ul>
              <li>{content}</li>
            </ul>

       </div>

    );
  }
}