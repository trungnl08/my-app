const passport = require("passport");
const LocalStrategy = require("passport-local");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");

const User = require("../modules/users/user.model");
const constants = require("../config/constants");

// Local strategy
const localOpts = {
  usernameField: "email"
};

const localStrategy = new LocalStrategy(
  localOpts,
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false);
      } else if (!user.authenticateUser(password)) {
        return done(null, false);
      }

      return done(null, user);
    } catch (e) {
      return done(e, false);
    }
  }
);

// Jwt strategy
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: 'abc'
};

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try {
    const user = await User.findById(payload._id);

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStrategy);
passport.use(jwtStrategy);

module.exports = {
  authLocal: passport.authenticate("local", { session: false }),
  authJwt: passport.authenticate("jwt", { session: false })
};
