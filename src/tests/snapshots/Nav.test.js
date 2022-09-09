import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Nav from '../../components/Nav';

describe('Nav', () => {
  test('should match Nav snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Nav />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
