import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//Gets all categories from the server REST API
function* fetchCategories() {
  try {
    const response = yield axios.get(`/api/category`);
    yield put({ type: 'SET_CATEGORY_LIST', payload: response.data });
  } catch (error) {
    console.error('Ошибка получения категорий задачи:', error);
  }
}

//Gets all tasks from the server REST API
function* fetchTasks() {
  try {
    const response = yield axios.get(`/api/task`);
    yield put({ type: 'SET_TASK_LIST', payload: response.data });
  } catch (error) {
    console.error('Ошибка получения списка задач:', error);
  }
}

//Adds a new task using server API
function* addNewTask(action) {
  try {
    yield axios.post(`/api/task/`, action.payload);
    yield put({ type: 'FETCH_TASK_LIST' });
  } catch (error) {
    console.error('Ошибка добавления новой задачи:', error);
  }
}

//Deletes task by id using server API
function* deleteTask(action) {
  try {
    yield axios.delete(`/api/task/${action.payload.id}`);
    yield put({ type: 'FETCH_TASK_LIST' });
  } catch (error) {
    console.error('Ошибка удаления задачи:', error);
  }
}

//Updates task by id using server API
function* updateTask(action) {
  try {
    yield axios.put(`/api/task/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_TASK_LIST', payload: action.payload });
  } catch (error) {
    console.error('Ошибка обновления задачи:', error);
  }
}

function* todoWatcherSaga() {
  yield takeLatest('FETCH_CATEGORY_LIST', fetchCategories);
  yield takeLatest('FETCH_TASK_LIST', fetchTasks);
  yield takeLatest('ADD_TASK', addNewTask);
  yield takeLatest('DELETE_TASK', deleteTask);
  yield takeLatest('UPDATE_TASK', updateTask);
}

export default todoWatcherSaga;