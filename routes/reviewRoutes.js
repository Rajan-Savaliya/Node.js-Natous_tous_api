const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

//TODO:=========== ({mergeParams: true}) ==> for connecting nesting router helpfull=================
const router = express.Router({ mergeParams: true });
//todo-------------------------------------------------------------------------------------------

//! Protect all routes after this middleware-route {protect}----------------------------
router.use(authController.protect);
//!--------------------------------------------------------


//! POST /tour/234fad4/reviews
//! GET /tour/234fad4/reviews
//!-----------nested route===============
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user', 'admin'), //! admin ---this place add for my self
    reviewController.setTourUserIds, 
    reviewController.createReview
  );
//!-------------------------------------

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;