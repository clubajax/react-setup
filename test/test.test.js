import React from 'react';
import { shallow } from 'enzyme';


describe('Button Component', () => {
    let component = null;
    let mockFn = null;
    beforeEach(() => {
        mockFn = jest.fn();
        component = shallow(<button onClick={ mockFn }>Click Me</button>);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
