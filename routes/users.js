/** User related routes. */

const User = require('../models/user');
const express = require('express');
const router = new express.Router();
const ExpressError = require('../helpers/expressError');
const { authUser, requireLogin, requireAdmin } = require('../middleware/auth');

/** GET /
 *
 * Get list of users. Only logged-in users should be able to use this.
 *
 * It should return only *basic* info:
 *    {users: [{username, first_name, last_name}, ...]}
 *
 */

router.get('/', authUser, requireLogin, async function(req, res, next) {
  try {
    let users = await User.getAll();
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
}); // end

/** GET /[username]
 *
 * Get details on a user. Only logged-in users should be able to use this.
 *
 * It should return:
 *     {user: {username, first_name, last_name, phone, email}}
 *
 * If user cannot be found, return a 404 err.
 *
 */

// FIXES BUG #2 - added error handler
router.get('/:username', authUser, requireLogin, async function(req, res, next) {
  try {
    let user = await User.get(req.params.username);
    if (user == undefined) {
      throw new ExpressError(`Username ${req.params.username} not found`, 404);
    }
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[username]
 *
 * Update user. Only the user themselves or any admin user can use this.
 *
 * It should accept:
 *  {first_name, last_name, phone, email}
 *
 * It should return:
 *  {user: all-data-about-user}
 *
 * It user cannot be found, return a 404 err. If they try to change
 * other fields (including non-existent ones), an error should be raised.
 *
 */

// FIXES BUG 6: removed requireAdmin middleware to allow that logged in user to edit their info.
router.patch('/:username', authUser, requireLogin, async function(req, res, next) {
  let acceptedData = ["first_name", "last_name", "phone", "email", "_token"]
  try {
    if (!req.curr_admin && req.curr_username !== req.params.username) {
      throw new ExpressError('Only that user or admin can edit a user.', 401);
    }
    // check each item provided in req.body, if anything other than token or accepted fields, throw err.
    for (let each in req.body) {
      if (!acceptedData.includes(each)) {
        throw new ExpressError(`Cannot update invalid field name ${each}`, 401);
      }
    }
    // get fields to change; remove token so we don't try to change it
    let fields = { ...req.body };

    delete fields._token;

    let user = await User.update(req.params.username, fields);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
}); // end

/** DELETE /[username]
 *
 * Delete a user. Only an admin user should be able to use this.
 *
 * It should return:
 *   {message: "deleted"}
 *
 * If user cannot be found, return a 404 err.
 */

router.delete('/:username', authUser, requireAdmin, async function(
  req,
  res,
  next
) {
  try {
    User.delete(req.params.username);
    return res.json({ message: 'deleted' });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
