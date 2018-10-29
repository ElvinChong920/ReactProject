import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('Not Found Page', ()=>{
    it('should render without crashing',()=>{
        const wrapper = shallow(<NotFound />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render with a h2 tag',()=>{
        const wrapper = shallow(<NotFound />);
        expect(wrapper.contains(<h2>404 Page Not Found.</h2>)).toEqual(true);
    });
});
