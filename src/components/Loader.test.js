import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './Loader';

describe('<Loader />', () => {
  it('has 1 child when loading true', () => {
    const tree = renderer.create(<Loader loading={true} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it('has no child when loading is false', () => {
    const tree = renderer.create(<Loader loading={false} />).toJSON();
    expect(null);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
