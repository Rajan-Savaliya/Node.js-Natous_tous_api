const mongoose = require('mongoose');
const slugify = require('slugify');
// const User = require('./userModel');
// const validator = require('validator');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A tour name must have less or equal then 40 characters'],
      minlength: [10, 'A tour name must have more or equal then 10 characters']
      // validate: [validator.isAlpha, 'Tour name must only contain characters']
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size']
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult'
      }
    },
    //!=============================================
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: val => Math.round(val * 10) / 10 
               //*set===> 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    //!=====================================
    price: {
      type: Number,
      required: [true, 'A tour must have a price']
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function(val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price'
      }
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false
    },
    //TODO:----------Mondling Data and advcace mongoose================================================================================
    //!_-----------------GEOSpatial Data-----------------------------
    startLocation: { //starting 1 location
      // GeoJSON
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      coordinates: [Number],
      address: String,
      description: String
    },
    locations: [ //arry of locations
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number
      }
    ],
    //!---------------------------------------------------------------
   //*-------------------child referncing--------------------
    guides: [      //*-->one tour-guild==> many User
      {
        type: mongoose.Schema.ObjectId, //* User id--array
        ref: 'User'
      }
    ]               
    //*-------------------------------------------------
  //TODO:=============================================================================================================================
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

//!==================speed-perfomce-filter==mongodb-get method-filter-time-==>read documet============================
// tourSchema.index({ price: 1 });
tourSchema.index({ price: 1, ratingsAverage: -1 });
tourSchema.index({ slug: 1 });
tourSchema.index({ startLocation: '2dsphere' }); //==>this index for ==>geo location 
                                      //?==>2dsphere==> 2D -shape         
//!+=================================================================================================




tourSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7;
});





//TODO:--------------- Virtual populate----work same as Populte-------------------------
//!!0000000000------ differt wat virtual populate not save to data-database-------------------
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id'
});
//!!-0000000000-----------------------------0000000000000000000000000-----------------------------------------





// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

//!----------------------tour--user /////  embadning========================
//TODO:-----req-----guid===-arry of user-id--post method base write it
//TODO:-----------res---> one tours--{one guid} ==> so many user id, with info see it
// tourSchema.pre('save', async function(next) {
//   const guidesPromises = this.guides.map(async id => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });
//TODO:--------------------------------------------------------------------------------

// tourSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// tourSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// tourSchema.pre('find', function(next) {
tourSchema.pre(/^find/, function(next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});

//TODO:===============populating Tour Guides======tours-guid & {{user-id + data }}-- child referncing=====================
//*-----------------------------------------------------------------------------------------
tourSchema.pre(/^find/, function(next) {  //  /^find/ ==> findOne & find ==>this function work
  this.populate({          //!-->populate use==> ex:--tours schema--guid:=user-id connect==>
    path: 'guides',         //!==>populate-----------populte with==>GET data--user data also come--which that is we de-find
    select: '-__v -passwordChangedAt'  //!-->defind ==>that user data not want to show it
  });

  next();
});
//TODO:===============================================================

tourSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

//?==>geo-near not work==>becase that is affration 1 apply==>so this is not use it
// AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });
//?=----------------------------------------------------------------------

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
