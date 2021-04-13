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

export function updateBookRequest(id, amount) {
    return {
        type: 'UPDATE_BOOK_REQUEST',
        id,
        amount
    }
}

export function updateBookSuccess(id, amount) {
    return {
        type: 'UPDATE_BOOK_SUCCESS',
        id,
        amount
    }
}