import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchRequestDetail(action) {
    console.log('This is the action', action);
    
    try {
        const requestDetail = yield axios.get('/api/user/requestDetail',
        {params: {
            id: action.payload
        }}
        );

        console.log('request detail result from server', requestDetail.data);
        // send response from server to reducer
        yield put ({type: 'SET_REQUEST_DETAIL', payload: requestDetail.data})
    
    } catch (error){
        console.log('Error fetching request detail', error);
        
    }
}






function* requestDetailSaga() {
    yield takeLatest('REQUEST_DETAIL', fetchRequestDetail);
}

export default requestDetailSaga