
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

            res.send(docs[0]);
            next();
        });
    });


    /**
     *  중기기상 전망, 기온, 육상 정보 지역 코드 조회
     */
    server.get('/place/middle/:place_code', (req, res, next) => {
        const placeCodeSelectModel = require("../module/db/model/placeCodeSelectModel")
        const params = [];
        params.push(req.params.place_code)

        placeCodeSelectModel.selectMiddleForecastAndTempAndLandPlaceCode(params, function(err, docs) {
            if (err) {
                console.error(err);
                return next(
                    new errors.InvalidContentError(err.errors.name.message),
                );
            }

            res.send(docs[0]);
            next();
        });
    });


    /**
     *  중기기상전망 코드 조회
     */
    server.get('/place/middle/forecast/:place_code', (req, res, next) => {
        const placeCodeSelectModel = require("../module/db/model/placeCodeSelectModel")
        const params = [];
        params.push(req.params.place_code)

        placeCodeSelectModel.selectMiddleForecastPlaceCode(params, function(err, docs) {
            if (err) {
                console.error(err);
                return next(
                    new errors.InvalidContentError(err.errors.name.message),
                );
            }

            res.send(docs[0]);
            next();
        });
    });

    /**
     *  중기기온 지역 코드 조회
     */
    server.get('/place/middle/temp/:place_code', (req, res, next) => {
        const placeCodeSelectModel = require("../module/db/model/placeCodeSelectModel")
        const params = [];
        params.push(req.params.place_code)

        placeCodeSelectModel.selectMiddleTempPlaceCode(params, function(err, docs) {
            if (err) {
                console.error(err);
                return next(
                    new errors.InvalidContentError(err.errors.name.message),
                );
            }

            res.send(docs[0]);
            next();
        });
    });

    /**
     *  중기육상예보 지역 코드 조회
     */
    server.get('/place/middle/land/:place_code', (req, res, next) => {
        const placeCodeSelectModel = require("../module/db/model/placeCodeSelectModel")
        const params = [];
        params.push(req.params.place_code)

        placeCodeSelectModel.selectMiddleTempPlaceCode(params, function(err, docs) {
            if (err) {
                console.error(err);
                return next(
                    new errors.InvalidContentError(err.errors.name.message),
                );
            }

            res.send(docs[0]);
            next();
        });
    });
};
