// const BearerStrategy = require('passport-http-bearer').Strategy;
const passport = require('passport');
// const request = require('request');
// const util = require('util');
// const accessTokens = require('./../controllers/accessTokenController');
// const authController = require('./../controllers/authController');
// const User = require('./../models/userModel');

// const requestPromise = util.promisify(request);

/**
 * BearerStrategy
 *
 * This strategy is used to authenticate either users or clients based on an access token
 * (aka a bearer token).  If a user, they must have previously authorized a client
 * application, which is issued an access token to make requests on behalf of
 * the authorizing user.
 *
 * test with: https://localhost:4000/api/v1/meta/protectedEndPoint
 */

// passport.use(
//   new BearerStrategy(async (accessToken, done) => {
//     console.log('****** Passport BearerStrategy ******');
//     try {
//       const token = await accessTokens.find(accessToken);
//       if (token != null && new Date() > token.expirationDate) {
//         await accessTokens.delete(accessToken);
//       }
//       if (token == null) {
//         const tokeninfoURL = process.env.SSO_TOKEN_INFO_URL;
//         await requestPromise(tokeninfoURL + accessToken, async (error, response, body) => {
//           try {
//             if (error != null || response.statusCode !== 200) {
//               throw new Error('Token request not valid');
//             }
//             const bodyObj = JSON.parse(body);
//             const expiresIn = bodyObj.expires_in;
//             const user = await authController.saveAccessRefreshToken(accessToken, null, expiresIn);
//             done(null, user);
//           } catch (err) {
//             done(null, false);
//           }
//         });
//       }
//       if (token.userId) {
//         const user = await User.findOne({ sso_id: token.userId });
//         if (!user) {
//           return done(null, false);
//         }
//         done(null, user);
//       }
//     } catch (err) {
//       done(null, false);
//     }
//   })
// );

// Register serialialization and deserialization functions.
//
// When a client redirects a user to user authorization endpoint, an
// authorization transaction is initiated.  To complete the transaction, the
// user must authenticate and approve the authorization request.  Because this
// may involve multiple HTTPS request/response exchanges, the transaction is
// stored in the session.
//
// An application must supply serialization functions, which determine how the
// client object is serialized into the session.  Typically this will be a
// simple matter of serializing the client's ID, and deserializing by finding
// the client by ID from the database.

passport.serializeUser((user, done) => {
  console.log('user', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('user', user);

  done(null, user);
});
