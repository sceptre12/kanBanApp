

export const socketHandlerMiddleware = store => next => action => {
    const result = next(action)

    switch(action.type){
        default:
            break;
    }
    return result
}
