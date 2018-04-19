import { combineReducers } from 'redux'
import readings from './readings';
import editBook from './editBook';
import getBooks from './getBooks';
import newBook from './newBook';
import review from './review';
import signup from './signup';
import users from './users';
import user from './user';
import auth from './auth'

export default combineReducers({
  auth, getBooks, signup, newBook, users, user, readings, review,
})
