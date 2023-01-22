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
const data=[
  {id:'gunshot', letter:'Q', src:'https://www.myinstants.com/media/sounds/gunshot.mp3'},
  {id:'wakawaka', letter:'W', src:'https://www.myinstants.com/media/sounds/wakawaka.mp3'},
  {id:'noooo', letter:'E', src:'https://www.myinstants.com/media/sounds/noooo.mp3'},
  {id:'buzzer', letter:'A', src:'https://www.myinstants.com/media/sounds/buzzer.mp3'},
  {id:'laughter', letter:'S', src:'https://www.myinstants.com/media/sounds/laughter.mp3'},
  {id:'drumroll', letter:'D', src:'https://www.myinstants.com/media/sounds/drumroll.mp3'},
  
{id:'halo', letter:'Z', src:'https://www.myinstants.com/media/sounds/halo.mp3'},
  {id:'darling', letter:'X', src:'https://www.myinstants.com/media/sounds/darling.mp3'},
  {id:'ringtone', letter:'C', src:'https://www.myinstants.com/media/sounds/ringtone.mp3'},
  
]
class DrumPad extends React.Component {
 
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
