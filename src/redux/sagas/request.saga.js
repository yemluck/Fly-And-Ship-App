import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker saga: will be fired on "CREATE_REQUEST" actions

function* createRequest(action){
    try {
            yield axios.post('/api/user/request', action.payload)
    } catch(error){
        console.log('Error with creating request', error);
        
    }
} // end function createRequest

function* fetchRequest(){
    try {
        const request = yield axios.get('/api/user/request');
        console.log('get requests', request.data);
        //send response from server to reducer 
        yield put({type: 'SET_REQUEST', payload: request.data})
        

    } catch (error) {
        console.log('Error fetching requests', error);
    }
}

function* deleteRequest(action) {
    try{
        const response = yield axios.delete(`/api/user/request/${action.payload}`)
        // call the fetch function to get back requests and rerender
        yield put({
            type: 'FETCH_REQUEST'
        })
    } catch (error) {
        console.log('Error deleting request', error);
        
    }
}



function* requestSaga() {
    yield takeLatest('CREATE_REQUEST', createRequest);
    yield takeEvery('FETCH_REQUEST', fetchRequest);
    yield takeLatest('DELETE_REQUEST', deleteRequest)
}


export default requestSaga