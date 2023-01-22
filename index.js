class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click a Key'
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
    <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        <div id='drum-pads'>{data.map(data => (
          <DrumPad
            key={data.id}
            id={data.id}
            letter={data.letter}
            src={data.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}</div>
    </div>
    )
  }
}
