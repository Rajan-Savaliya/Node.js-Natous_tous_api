// review / rating / createdAt / ref to tour / ref to user
const mongoose = require('mongoose');
const Tour = require('./tourModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review can not be empty!']
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour.']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
//todo---- 1 user==creat a one reivew=======================
reviewSchema.index({ tour: 1, user: 1 }, { unique: true } ); //==>
//todo-----------------------------------------------------------



//TODO: ===== populatin User & tour ==================
reviewSchema.pre(/^find/, function(next) {
  // this.populate({
  //   path: 'tour',
  //   select: 'name'
  // }).populate({
  //   path: 'user',
  //   select: 'name photo'
  // }); //!-if 2 differnt -- model that time this weay use it

  this.populate({
    path: 'user',
    select: 'name photo'
  });  //!_-->if 2 --modle use that time use this way
  next();
});
//TODO: ==================================






//!============================================================================================================================


//TODO:====== 1 tour have many review == review avg find it===================================
reviewSchema.statics.calcAverageRatings = async function(tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId }
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' }
      }
    }
  ]);
  // console.log(stats);

//??==>if that avg data===> save to database==> [{ if }] that is avlaible
  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5
                                                
    });
    //?=============================================================================
  }
};
//todo=====================================================================================



//?===>calcAverageRatings ==== all save it then after ==> GET it
reviewSchema.post('save', function() {
  // this points to current review
  this.constructor.calcAverageRatings(this.tour);
});
//?--------------------------------------------------------------------------



  
//todo:  calcAverageRatings ===> this function==executed for ========================================================================================================================================================================
// findByIdAndUpdate === /^findOneAnd/
// findByIdAndDelete === /^findOneAnd/
reviewSchema.pre(/^findOneAnd/, async function(next) {
  this.r = await this.findOne();
  // console.log(this.r);
  next();
});

reviewSchema.post(/^findOneAnd/, async function() {
  // await this.findOne(); does NOT work here, query has already executed
  await this.r.constructor.calcAverageRatings(this.r.tour);
}); ///?===>this.r.tour== tour-id
//todo========================================================================================================================================


//!=======================================================================================================================================





const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;



