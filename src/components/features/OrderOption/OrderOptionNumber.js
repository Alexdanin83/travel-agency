import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, limits, price, setOptionValue}) => {
  return (
    <div className={styles.number}>
      <input className={styles.inputSmall} type="number"
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={event => setOptionValue(event.currentTarget.value)}
      ></input>
      {price}
    </div>
  );
};


OrderOptionNumber.propTypes = {

  currentValue: PropTypes.number,
  limits: PropTypes.object,
  price: PropTypes.string,
  setOptionValue:PropTypes.func,
};


export default OrderOptionNumber;
