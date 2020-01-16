import axios from '../../axios-order';
import {put} from 'redux-saga/effects';
import * as actions from '../actions';


export function* initIngredientSaga(action){
    try{
        const response=yield axios.get('https://burgerbuilder-56081.firebaseio.com/ingredients.json');
        yield put(actions.setIngredients(response.data))
    }
    catch(error){
        yield put(actions.fetchIngredientsFailed());

    }
    
    
}