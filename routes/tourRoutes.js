const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');

//!---------------------router import it-----for nested route-----------
const reviewRouter = require('./../routes/reviewRoutes');
//!_----------------------------------------------------

const router = express.Router();

// router.param('id', tourController.checkID);

//! POST /tour/234fad4/reviews
//! GET /tour/234fad4/reviews
//!-----------nested route===============
router.use('/:tourId/reviews', reviewRouter);
//!_----------------------------------------

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    tourController.getMonthlyPlan
  );

//!+============ lat/lat+distace base==>tour data GET it============
router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
//! /tours-within/233/center/-40,45/unit/mi        //--better-look
// /tours-within?distance=233&center=-40,45&unit=mi
//==============================================================================

//!=================geo location -- route========================================================
router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);
//!===========================================================================

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.createTour
  );

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour
  );

module.exports = router;
