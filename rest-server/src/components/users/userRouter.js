import express from 'express';

import {
  fetchAllUserController,
  fetchUsernameController
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers')
  .get(fetchAllUserController);

router.route('/fetchUsername/:username')
  .get(fetchUsernameController);

export default router;
