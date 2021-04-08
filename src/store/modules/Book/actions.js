export function addBookRequest(id) {
    return {
        type: 'ADD_BOOK_REQUEST',
        id
    }
}

export function addBookSuccess(trip) {
    return {
        type: 'ADD_BOOK_SUCCESS',
        trip
    }
}

export function removeBook(id) {
    return {
        type: 'REMOVE_BOOK',
        id
    }
}

export function updateBookAmount(id, amount) {
    return {
        type: 'UPDATE_BOOK_AMOUNT',
        id, 
        amount
    }
}