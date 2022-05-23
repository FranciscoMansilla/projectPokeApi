import React from 'react';

import { Route } from "react-router-dom";
import App from '../src/App';
import { shallow } from 'enzyme'

describe('<App />', () => {
    let app;
    beforeEach(() => {
        app = shallow(<App />);
        expect(app).toBeTruthy();
    });
    
	it('Debería tener una ruta con el texto que cambie hacia "/"', () => {
        expect(app.find(Route).at(0).prop('path')).toEqual('/');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/n/"', () => {
        expect(app.find(Route).at(1).prop('path')).toEqual('/n/');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/n/home"', () => {
        expect(app.find(Route).at(2).prop('path')).toEqual('/n/home');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/n/create/pokemon"', () => {
        expect(app.find(Route).at(3).prop('path')).toEqual('/n/create/pokemon');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/n/pokemon/:id"', () => {
      expect(app.find(Route).at(4).prop('path')).toEqual('/n/pokemon/:id');
  });
});
