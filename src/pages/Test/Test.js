import store from '../../store/store';
import { addItem } from '../../store/test/action';

window.store = store;
window.addItem = addItem;
