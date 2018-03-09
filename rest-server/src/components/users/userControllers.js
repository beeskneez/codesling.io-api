import db from '../../config/database';
import {
  fetchAllUserQuery,
  fetchUsernameQuery
} from "./userQueries";
import {
  success,
  error
} from '../../lib/log';

export const fetchAllUserController = async (req, res) => {
  try {
    const data = await fetchAllUserQuery();
    success('fetchAllUserController - successfully fetched data ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchAllUserController - error= ', error);
    throw new Error(err);
  }
};

export const fetchUsernameController = async (req, res) => {
  try {
    const data = await fetchUsernameQuery(req.params.username);
    success("fetchUsernameController - successfully fetched data ", data);
    return res.status(200).send(data);
  } catch (err) {
    error("fetchUsernameController - error= ", error);
    throw new Error(err);
  }
};
