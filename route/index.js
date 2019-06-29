
/**
 * Module Dependencies
 */
const errors = require('restify-errors');
/**
 * Model Schema
 */

module.exports = (server) => {


    /**
     * 행정 구역 코드 조회
     */
    server.get('/place/info/:place_code', (req, res, next) => {
        const placeCodeSelectModel = require("../module/db/model/placeCodeSelectModel")
        const params = [];
        params.push(req.params.place_code)

        placeCodeSelectModel.selectPlaceDistrictDetail(params, function(err, docs) {
            if (err) {
                console.error(err);
                return next(
                    new errors.InvalidContentError(err.errors.name.message),
                );
            }

            res.send(docs);
            next();
        });
    });

};
