import db from '../../config/database';

import {
  addHistoryHelper,
  fetchAllHistoryHelper
} from './historySQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const historyQueryHelper = async (payload) => {
  try {
    const queryString = fetchAllHistoryHelper(payload);
    const data = await db.queryAsync(queryString);
    success('historyQueryHelper - successfully retrieved data ', data);
    return data;
  } catch (err) {
    error('historyQueryHelper - error= ', err);
    throw new Error(err);
  }
};

export const historyQuery = async (payload, url) => {
  if (url === '/addHistory') {
    try {
      const queryString = addHistoryHelper(payload);
      const data = await db.queryAsync(queryString);
      success('historyQueryHelper - successfully retrieved data ', data);
      return data;
    } catch (err) {
      error('historyQueryHelper - error= ', err);
      throw new Error(err);
    }
  } else {
    return await historyQueryHelper(payload, fetchAllHistoryHelper);
  }
};
