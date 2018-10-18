import { increment, change, createStore } from './action';

test('increment action can increment some value n', () => {
    const state = { n: 0 };
    expect(increment(state).n).toBe(state.n + 1);
});

test('change action should change the input value', () =>{
    const state = { input: 'Not change'};
    expect(change(state).input).toBe('Changed');
});

describe('store', ()=>{
    const initialState = { n:0, input: 'Not change' };
    const initialize = () => createStore(initialState);

    it('should increase when increment action dispatched', () => {
        const store = initialize();
        store.dispatch(increment);
        expect(store.getState().n).toBe(initialState.n+1);
    });

    it('should change input when change action dispatched', () => {
        const store = initialize();
        store.dispatch(change);
        expect(store.getState().input).toBe('Changed');
    });
});
