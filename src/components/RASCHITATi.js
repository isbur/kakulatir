import React from 'react';
//
class RASCHITATi extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            deficator1: 'I am deficator1',
             deficator2: '',
              deficator3: '',
                deficator4: "atvet?"
        };
        
        this.onClickHandler = this.onClickHandler.bind(this)
    }
    
    onClickHandler(e){
        e.preventDefault()
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      console.log(xhr.responseText)
    })
    xhr.open('GET', 'https://tepid-ruddy-code.anvil.app/_/api/vixod/10/2/255')
    xhr.send()
        this.setState({deficator4: this.state.deficator1})
    }
    
    render(){
        return (
        <div>
        <form className>
                <div className="form-group"> <label>CHISLO</label> <input name="deficator1" type="text" className="form-control" placeholder="Enter chislo" value = {this.state.deficator1}/>
                  <div className="form-group"><label>STUPEN ONE</label><input name="deficator2" type="text" className="form-control" placeholder="Enter stupen one" value = {this.state.deficator2}/>
                    <div className="form-group"><label>STUPEN TUVA</label><input name="deficator3" type="text" className="form-control" placeholder="Enter stupen tuva" value = {this.state.deficator3} /></div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick = {this.onClickHandler} >RASCHITATi</button>
              </form>
              <h1 className="display-1">{this.state.deficator4}</h1>
              </div>
          )

    }
} 

export default RASCHITATi