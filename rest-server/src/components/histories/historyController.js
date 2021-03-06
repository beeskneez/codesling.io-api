import {
  historyQuery,
  historyQueryHelper
} from './historyQueries';
import {
  success,
  error
} from '../../lib/log';

export const historyController = async (req, res) => {
  const { url, method } = req;
  let payload;
  if (method === 'POST' || method === 'PUT') {
    payload = req.body;
  } else {
    payload = req.params;
  }
  try {
    const data = await historyQuery(payload, url);
    success('historyController - successfully retrieved data ', data)
    return res.status(200).send(data.rows);
  } catch (err) {
    error('historyController - error= ', err);
    return res.status(400).send(err);
  }
};

import { fetchUserQuery } from '../users/userQueries';

export const fetchHistoryController = async (req, res) => {
  try {
    const { rows } = await historyQueryHelper(req.params);
    for (let row of rows) {
      console.log('our row', row);
      const user = await fetchUserQuery(row.user_id);
      row.user = user;
    } 
    return res.status(200).send(rows);
  } catch (err) {
    error('error fetching messages ', err);
    return res.status(200).send(err);
  }
};
