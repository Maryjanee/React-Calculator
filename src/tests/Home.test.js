import TestRenderer from 'react-test-renderer';
import Home from '../components/pages/Home';

it('Matches Snapshot for Home component', () => {
    const homeShot = TestRenderer
    .create(<Home />)
    .toJSON();
  expect(homeShot).toMatchSnapshot();
}) 