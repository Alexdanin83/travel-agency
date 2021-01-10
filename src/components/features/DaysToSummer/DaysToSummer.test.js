import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
});
const trueDate = Date;
const mockDate = (customDate) =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
  };

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);
    const component = shallow(<DaysToSummer />);
    const renderedDays = component.find(select.title).text();
    expect(renderedDays).toEqual(expectedDescription);
    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2020-06-21', '');
  checkDescriptionAtDate('2020-09-23', '');
});

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2020-06-20', '1 day to summer!');
  checkDescriptionAtDate('2020-06-01', '20 days to summer!');
});
