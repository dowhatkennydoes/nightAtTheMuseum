
 const express = require('express');
 const router = express.Router();
 const resHandler = require('./resHandler');
 const controller = require('./controller');


  router.route('/:userid/faves')
    // React sends commentid, comment, rating
    // get faves list
    .get(
      controller.getAllFaves,
      resHandler.sendJSON
      )
    .post(
      controller.addMuseum,
      resHandler.sendJSON
      )
    // change comment
    .put(
      controller.updateComment,
      resHandler.sendJSON
      )
    .delete(
      controller.delFaves,
      resHandler.handleDel
      )

  router.route('/museum/:museumid/:userid')
    // React sends user_id, comment, rating
    // check if you favorited the museum
    .get(
      controller.getFave,
      resHandler.sendJSON
      )
    // add comment to museum
    .post(
      controller.createComment,
      resHandler.sendJSON)
    .put(
      controller.updateComment,
      resHandler.sendJSON
      )
  router.route('/secret')
    .get(
      controller.getAPIKey,
      resHandler.sendAPI
      )
//this get route will need access to user id included in endpoint
//because of the way the isItAFave function is currently set up
//to require input of user_id (because since it's a get route and not
//a post route there's no other way to get the user_id in there)
  router.route('/search')
    // React sends museum_id
    // get fave (checks to see if you favorited museum)
    .get(
      controller.isItAFave
      );

  // router.use(resHandler.throwError);

  module.exports = router;


  // return router;

  // adding this commented line to git commit
  // adding this line too

 // };











