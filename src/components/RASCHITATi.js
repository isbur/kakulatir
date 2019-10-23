import React from 'react';
//
class RASCHITATi extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            deficator1: 'I am deficator1',
             deficator2: '',
              deficator3: ''
        };
        
        this.onClickHandler = this.onClickHandler.bind(this)
    }
    
    onClickHandler(){
        console.log(this.state.deficator1)
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
              <h1 className="display-1">ATVET?</h1>
              </div>
          )

    }
} 

export default RASCHITATi