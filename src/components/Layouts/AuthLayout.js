// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// const AuthLayout = ( props ) => {
//     if(!props.auth.isAuthenticated){
//         window.location.href="/login"
//     }else{
//         return (
//             <div>
//                 {props.children}
//           </div>
//         )
//     }
// };

// AuthLayout.propTypes = {
//     auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//     auth: state.auth
// });

// export default connect(mapStateToProps, null)(AuthLayout);