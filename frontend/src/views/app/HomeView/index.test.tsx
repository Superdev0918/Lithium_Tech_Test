import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HomeView from './index';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

Enzyme.configure({ adapter: new Adapter() });

describe('HomeView', () => {

    it('Renders HomeView without crashing', () => {
        shallow(<Provider store={store}><HomeView /></Provider>);
    });

});
  