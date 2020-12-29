import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
import styles from './OrderSummary.scss';
//import OrderSummary from '../OrderSummary/OrderSummary';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';


const OrderSummary  = ({tripCost,options}) => (


  <h2 className={styles.component}>Total: <strong>$ {calculateTotal(formatPrice(tripCost), options)}</strong></h2>

);

OrderSummary .propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderSummary;
