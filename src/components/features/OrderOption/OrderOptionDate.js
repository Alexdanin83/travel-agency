import React from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const state = {
  startDate: new Date(),
};



//const OrderOptionDate = ({setOptionValue}) => {
const OrderOptionDate = () => {

  const { startDate } = state;
  return (

    <div className={styles.component}>
      <DatePicker
        selected={startDate}
        //date => setOptionValue(date)
        onChange={this.setState({startDate})

        }



      />

    </div>
  );
};

OrderOptionDate.propTypes = {

  setOptionValue:PropTypes.func,
};


export default OrderOptionDate;
