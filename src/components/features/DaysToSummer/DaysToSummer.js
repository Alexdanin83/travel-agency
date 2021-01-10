import React from 'react';
import styles from './DaysToSummer.scss';




class DaysToSummer extends React.Component {
  constructor() {
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }
  countDownTime()  {
    const currentTime = new Date();

    const summerTime = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));

    const daysToSummer = Math.round((summerTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24));
    if (daysToSummer === 1) {
      return '1 day to summer!';
    } else if (daysToSummer <= 0 && daysToSummer >= -94) {
      return '';
    } else return daysToSummer + ' days to summer!';


  }
  render() {

    const countDown = this.countDownTime();
    console.log(countDown);
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{countDown}</h3>

      </div>
    );
  }
}


export default DaysToSummer;
