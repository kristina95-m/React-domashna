import React from 'react';
import {connect} from 'react-redux';
import {nameSurname} from './../actions/NameSurnameAction';

class NameSurname extends React.Component{

    componentDidMount(){
        this.props.getPerson();
    }
    
    render(){
        return(
            <div id="name-surname">
                <h2>{this.props.person}</h2>
             </div>   
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        person: state.NameSurnameReducer.person
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getPerson: ()=>{
            dispatch(nameSurname())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NameSurname);