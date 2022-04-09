import store from "./store";
import * as actions from "./action";
import { bindActionCreators } from "redux";

const { dispatch } = store;
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);


const counterDisplay = document.getElementById('counter-display');
const incrementButton = document.getElementById('inc');
const decrementButton = document.getElementById('dec');
const randomButton = document.getElementById('rnd');


incrementButton.addEventListener('click', inc)
decrementButton.addEventListener('click', dec)
randomButton.addEventListener('click', rnd)

store.subscribe(() =>{
    counterDisplay.value = store.getState()
})