import TestRenderer from 'react-test-renderer';
import Calculator from '../components/pages/Calculator';

it('Matches Snapshot for Calculator component', () => {
  const CalculatorShot = TestRenderer.create(<Calculator />).toJSON();
  expect(CalculatorShot).toMatchSnapshot();
});
