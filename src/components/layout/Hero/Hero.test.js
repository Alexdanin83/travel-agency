import React from 'react';
import {shallow} from 'enzyme';
import Hero from './Hero';
//test czy props zwraca jakieś text  toBeTruthy -czy component zwraca jakąś prawdziwą wartość
describe('Component Hero', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText='Lorem ipsum' />);
    expect(component).toBeTruthy();
    //console.log(component.debug());
  });
  //w każdym propsie chcemy sprawdzić tzw. warunki brzegowe (edge cases),
  // czyli jak zachowa się komponent, kiedy nie podamy propsa (lub podamy błędną wartość),
  // a jak przy jego poprawnej wartości.

  it('should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toThrow();
  });

  // czy tytuł jest fakctycznie wyświetlany na stronie
  it('should render correct title', () => {
    const expectedTitle = 'Lorem ipsum';
    const component = shallow(<Hero titleText={expectedTitle} />);

    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
  });
  //sprawdzenie czy atribyt src jest podany do img
  it('should render correct title and image', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);

    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('.image').prop('src')).toEqual(expectedImage);
  //  console.log(component.debug());
  });
  //sprawdzenie czy jest classa w zbiorze
  it('renders correct classNames', () => {
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('small')).toBe(true);
    expect(component.hasClass('dummy')).toBe(true);
  });
  //czy component HappyHourAd istnieje
  it('should render HappyHourAdd', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);

    expect(component.find('HappyHourAd').length).toEqual(1);
    console.log(component.debug());
  });


});
