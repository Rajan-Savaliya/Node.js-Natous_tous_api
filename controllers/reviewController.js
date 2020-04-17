const Review = require('./../models/reviewModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  //!========= Allow nested routes =================
  // POST/GET           tours/tour_id/review
  if (!req.body.tour) req.body.tour = req.params.tourId; //router with get it param
  if (!req.body.user) req.body.user = req.user.id; // user.id == token with get user.id
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);





