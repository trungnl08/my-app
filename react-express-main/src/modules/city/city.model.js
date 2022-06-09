const mongoose  = require('mongoose') ;
const {Schema} = mongoose
const uniqueValidator = require('mongoose-unique-validator') ;

const CitySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required!'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },   
  },
  { timestamps: true },
);

CitySchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});


CitySchema.methods = {
  toJSON() {
    return {
      _id: this._id,
      name: this.name,
      text: this.text,
      createdAt: this.createdAt,     
    };
  },
};

CitySchema.statics = {
  createPost(args) {
    return this.create(args);
  },
  list({ skip = 0, limit = 5 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      // .populate('user');
  },

  incFavoriteCount(cityId) {
    return this.findByIdAndUpdate(cityId, { $inc: { favoriteCount: 1 } });
  },

  decFavoriteCount(cityId) {
    return this.findByIdAndUpdate(cityId, { $inc: { favoriteCount: -1 } });
  }
};

module.exports = mongoose.model('City', CitySchema);
