import produce from 'immer';

export default function book(state = [], action) {
    
    switch (action.type) {

        case 'ADD_BOOK_SUCCESS':
            return produce(state, draft => {
                draft.push(action.trip);             
            });
        
        case 'REMOVE_BOOK':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                
                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1);
                }
            });
        
        case 'UPDATE_BOOK_SUCCESS':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);

                if (tripIndex >= 0) {
                    draft[tripIndex].amount = action.amount;
                }
            });

        default:
            return state;
    }
}