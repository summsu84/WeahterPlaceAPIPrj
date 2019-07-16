class PlaceCodeSelectModel {
    // constructor(생성자)
    constructor() {
        this.connection = null;
    }

    init(connection) {
        console.log(">>PlaceModel init .. connection value : " + connection)

        this.connection = connection;
    }
    selectPlaceDistrictDetail(params, callback) {
        const self = this;

        const sql = 'SELECT A.* FROM tbl_weather_place_detail AS A, (select id from tbl_weather_place_district_code where  code = ?) AS B where place_distict_code_id = B.id';

        const query = self.connection.query(sql, params,  function (err, rows){

            if (err)
                console.error(err);
            else {
                console.log(rows);
                if (callback)
                    callback(err, rows);
            }
        })
    }

    /**
     *  중기전망 지역코드 조회
     * @param params
     * @param callback
     */
    selectMiddleForecastPlaceCode(params, callback) {
        const self = this;

        const sql = 'SELECT A.* FROM tbl_weather_place_detail AS A, (select id from tbl_weather_place_district_code where  code = ?) AS B where place_distict_code_id = B.id';

        const query = self.connection.query(sql, params,  function (err, rows){

            if (err)
                console.error(err);
            else {
                console.log(rows);
                if (callback)
                    callback(err, rows);
            }
        })
    }


    selectMiddleForecastAndTempAndLandPlaceCode(params, callback) {
        const self = this;

        const sql = 'select q.*, c.middle_forecast_place_code, d.middle_forecast_land_place_code, e.middle_forecast_temp_place_code from ' +
            'tbl_weather_place_city_level2_code as q,\n' +
            '(select a.* from tbl_weather_place_city_level3_code as a, (select place_city_level3_id from tbl_weather_place_district_code where code = ?) b ' +
            'where a.id = b.place_city_level3_id) as t, tbl_weather_place_middle_forecast_code as c, tbl_weather_place_middle_forecast_land_code as d, tbl_weather_place_middle_forecast_temp_code as e ' +
            'where q.id = t.place_city_level2_id and q.middle_forecst_place_code = c.id and q.middle_forecast_land_place_code = d.id and q.middle_forecast_temp_place_code = e.id';


        const query = self.connection.query(sql, params,  function (err, rows){

            if (err)
                console.error(err);
            else {
                console.log(rows);
                if (callback)
                    callback(err, rows);
            }
        })
    }


    /**
     *  중기기온 지역코드 조회
     * @param params
     * @param callback
     */
    selectMiddleTempPlaceCode(params, callback) {
        const self = this;

        const sql = 'SELECT A.* FROM tbl_weather_place_detail AS A, (select id from tbl_weather_place_district_code where  code = ?) AS B where place_distict_code_id = B.id';

        const query = self.connection.query(sql, params,  function (err, rows){

            if (err)
                console.error(err);
            else {
                console.log(rows);
                if (callback)
                    callback(err, rows);
            }
        })
    }

    /**
     *  중기육상 지역코드 조회
     * @param params
     * @param callback
     */
    selectMiddleLandPlaceCode(params, callback) {
        const self = this;

        const sql = 'SELECT A.* FROM tbl_weather_place_detail AS A, (select id from tbl_weather_place_district_code where  code = ?) AS B where place_distict_code_id = B.id';

        const query = self.connection.query(sql, params,  function (err, rows){

            if (err)
                console.error(err);
            else {
                console.log(rows);
                if (callback)
                    callback(err, rows);
            }
        })
    }
}

module["exports"] = new PlaceCodeSelectModel();