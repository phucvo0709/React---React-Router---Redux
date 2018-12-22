import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import * as authActions from './../store/actions'

class Facebook extends Component{

    responseFacebook = (response) => {
        this.props.onLoginFacebook(response);
    }

    render(){
        const { facebookLogined, facebookInfo } = this.props.facebook
        let fbContent;
        if(facebookLogined){
            fbContent = <div style={{
                width: '400px',
                margin: 'auto',
                background: '#f4f4f4',
                padding: '20px'
            }}>
                <h1 className="text-center">Hello {facebookInfo.name}</h1>
            </div>
        }else{
            fbContent = <FacebookLogin
            appId="281208759259790"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook} />
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    facebook: state.facebook
});

const mapDispatchToProps = dispatch => {
    return {
        onLoginFacebook: (response) => dispatch(authActions.responsiveFacebook(response)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);