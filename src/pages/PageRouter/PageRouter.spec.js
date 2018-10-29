import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import PageRouter from './PageRouter';

describe('Page Router', ()=>{
    const store = configureStore([thunk])();

    it('should render without crashing',()=>{
        // const props = {
        //     location:{
        //         type: 'USER'
        //     }
        // };
        const wrapper = shallow(<PageRouter store={store} location={{type:'USER'}}/>).dive();
        expect(wrapper).toMatchSnapshot();
    });
});
