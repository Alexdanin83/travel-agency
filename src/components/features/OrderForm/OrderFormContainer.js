import {connect} from 'react-redux';
import OrderForm from './OrderForm';

import {getOrderOptions,setOrderOption} from '../../../redux/orderRedux.js';

const mapStateToProps = state => ({
  options: getOrderOptions (state),
  setOrderOption:setOrderOption(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: (orderOption) => dispatch(setOrderOption(orderOption)),
  // TODO - add more dispatchers for other filters
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
