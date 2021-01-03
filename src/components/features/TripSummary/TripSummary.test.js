import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct Src and image', () => {
    const expectedLink = '/trip/abc';
    const expectedImageSrc = 'image.jpg';
    const expectedImageAlt = 'image_text';
    const component = shallow(<TripSummary
      id="abc"
      image={expectedImageSrc}
      name={expectedImageAlt}
      cost=""
      days={1}
      tags={[]}
    />);
    const  renderedLink = component.find('Link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);
    //console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });


  it('should render correct name cost days', () => {
    const expectedName = 'Pleasant travel in cool Turkey';
    const expectedCost = '$51,380.61';
    const expectedDays = 2;
    const component = shallow(<TripSummary
      id=""
      image=""
      name={expectedName}
      cost={expectedCost}
      days={expectedDays}
      tags={[]}
    />);
    const  renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);
    const  renderedCost = component.find('.details span').at(1).text();
    const  renderedDays = component.find('.details span').at(0).text();
    expect(renderedCost).toEqual(`from ${expectedCost}`);
    expect(renderedDays).toEqual(`${expectedDays} days`);


    //console.log(component.debug());
  });

  it('should render correct tags', () => {
    const expectedTags=['tag1','tag2','tag3'];
    const component = shallow(<TripSummary
      id=""
      image=""
      name=""
      cost=""
      days={1}
      tags={expectedTags}
    />);

    const renderedTags1 = component.find('.tags span').at(0).text();
    const renderedTags2 = component.find('.tags span').at(1).text();
    const renderedTags3 = component.find('.tags span').at(2).text();
    expect(renderedTags1).toEqual(expectedTags[0]);
    expect(renderedTags2).toEqual(expectedTags[1]);
    expect(renderedTags3).toEqual(expectedTags[2]);

    //console.log(component.debug());
  });
  it('should not render tags if props tags is false', () => {
    const component = shallow(
      <TripSummary
        //tags={[]}
        id=""
        image=""
        cost=""
        name=""
        days={1} />
    );
    expect(component.hasClass('tags')).toBe(false);
    //console.log(component.debug());

  });


});
