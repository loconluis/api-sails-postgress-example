/**
 * MovieController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: async (req, res) => {
    try {
      let movies = await Movie.find()
      // Validation to exist records
      if (!movies || movies.length === 0) {
        return res.send({ success: false, message: 'No records found' })
      }
      // Validation fetched records
      return res.send({ success: true, message: 'Fetched records!', movies })
    } catch (e) {
      sails.log.debug(e)
      return res.send({
        success: false,
        message: 'Unable to fetch records'
      })
    }
  }
};

