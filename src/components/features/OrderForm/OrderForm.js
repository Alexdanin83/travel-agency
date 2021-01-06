import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';


const sendOrder = (options, tripCost, tripDetails) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    ...tripDetails,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;
  if (options.name != '' && options.contact != '') {
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
};

const OrderForm  = ({tripCost, options, setOrderOption, tripDetails}) => (


  <Row>
    {pricing.map((option) => (
      <Col md={4} key={option.id}>
        <OrderOption currentValue={options[option.id]}
          {...option}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}

    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>

    <Button onClick={() => sendOrder(options, tripCost, tripDetails)}>Order now!</Button>
  </Row>



);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  tripDetails: PropTypes.object,
};


export default OrderForm;
