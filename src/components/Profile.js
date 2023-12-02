import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
    }
    async componentDidMount(){
        const data=await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9188442&lng=75.8148262&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
    }
    componentDidUpdate(){
        
    }
    render(){
        
        return(
            <>
            <h1> Hello</h1>
            <h1> Hi {this.props.name}</h1>
            </>
        );
    }
}
export class Profile2 extends React.Component{
    constructor(props){
        super(props);
        
        
    }
    componentDidMount(){
        
    }
    render(){
        
        return(
            <>
            <h1> Hello</h1>
            <h1> Hi {this.props.name}</h1>
            </>
        );
    }
}
export default Profile