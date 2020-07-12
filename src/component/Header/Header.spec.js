import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import {findByTestAttr} from '../../../Utilis/index';

const setUp = (props={ }) => {

    const component = shallow(<Header {...props}/>);
    return component
};


describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('It should render without error',() => {
       
        const ifItExists = findByTestAttr(component, 'headerComponent');
        expect(ifItExists.length).toBe(1);
    });
})

