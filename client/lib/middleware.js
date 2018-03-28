export const loggerMiddleware = store => next => action => {
  console.group(action.type)
  console.log('Prev state', store.getState());
  console.info('Dispatching', action);
  let result = next(action);
  console.log('Next state', store.getState());
  console.groupEnd(action.type);
}
