/**
 * Created by JJW on 2017-07-20.
 * DESC : 장소 모델
 */
let PlaceCodeModel = () =>{

};

PlaceCodeModel.prototype.connection = null;

PlaceCodeModel.prototype.init = function(connection){

    console.log(">>PlaceModel init .. connection value : " + connection)

    this.connection = connection;

}

/**
 *  코드 1레벨 등록 한다.
 * @param placeList
 * @param callback
 */
PlaceCodeModel.prototype.insertPlaceList = (placeList, callback) => {
    const self = this;

    placeList.forEach(function (place, i){
        {
            var level1_korean_name = place['1단계'];

            var sql = "INSERT INTO tbl_weather_place_city_level2_code  " +
                "(create_user_name," +
                " created_time," +
                " del_yn, " +
                " update_user_name," +
                " updated_time," +
                " use_yn," +
                " english_name," +
                "korean_name," +
                "place_city_level1_id (select id from tbl_weather_place_city_level1_code where korean_name = '" + level1_korean_name + "'" +
                " ) VALUES ? ";
            //var values = placeList;

            var query = self.connection.query(sql, place,  function (err, rows){

                if (err)
                    console.error(err);
                else {
                    console.log(rows);
                    if (callback)
                        callback(err, rows);
                }
            })
        }
    });

}

/**
 *  코드 레벨2 등록 한다.
 * @param placeList
 * @param callback
 */
PlaceCodeModel.prototype.insertPlaceLevel2Code = (placeList, callback) => {
    const self = this;

    placeList.forEach(function (place, i){
        {
            //var level1_korean_name = place[7];

            //var tmp = place.splice(-1, 1);

            //subquery 연동
            var sql = "INSERT INTO tbl_weather_place_city_level2_code  " +
                "(create_user_name," +
                " created_time," +
                " del_yn, " +
                " update_user_name," +
                " updated_time," +
                " use_yn," +
                " english_name," +
                "korean_name," +
                "place_city_level1_id" +
                " ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, (select id from tbl_weather_place_city_level1_code where korean_name = ?))";
            //var values = placeList;

            var query = self.connection.query(sql, place,  function (err, rows){

                if (err)
                    console.error(err);
                else {
                    console.log(rows);
                    if (callback)
                        callback(err, rows);
                }
            })
        }
    });

}

/**
 *  코드 레벨 3 등록
 * @param placeList
 * @param callback
 */
PlaceCodeModel.prototype.insertPlaceLevel3Code = (placeList, callback) => {
    const self = this;

    placeList.forEach(function (place, i){
        {
            //var level1_korean_name = place[7];

            //var tmp = place.splice(-1, 1);

            //subquery 연동
            var sql = "INSERT INTO tbl_weather_place_city_level3_code  " +
                "(create_user_name," +
                " created_time," +
                " del_yn, " +
                " update_user_name," +
                " updated_time," +
                " use_yn," +
                " english_name," +
                "korean_name," +
                "place_city_level2_id" +
                " ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, (select id from tbl_weather_place_city_level2_code where korean_name = ? and place_city_level1_id = (select id from tbl_weather_place_city_level1_code where korean_name = ?)))";
            //var values = placeList;

            var query = self.connection.query(sql, place,  function (err, rows){

                if (err)
                    console.error(err);
                else {
                    console.log(rows);
                    if (callback)
                        callback(err, rows);
                }
            })
        }
    });

}

/**
 *  행정구역 코드 등록
 * @param placeList
 * @param callback
 */
PlaceCodeModel.prototype.insertPlaceDistrict = (placeList, callback) => {
    const self = this;

    placeList.forEach(function (place, i){
        {

            //subquery 연동
            var sql = "INSERT INTO tbl_weather_place_district_code  " +
                "(create_user_name," +
                " created_time," +
                " del_yn, " +
                " update_user_name," +
                " updated_time," +
                " use_yn," +
                " code," +
                "place_city_level3_id" +
                " ) VALUES (?, ?, ?, ?, ?, ?, ?, " +
                "(select A.id from tbl_weather_place_city_level3_code AS A,   (select id as place_city_level2_id, place_city_level1_id from tbl_weather_place_city_level2_code where korean_name = ? and place_city_level1_id = (select id from tbl_weather_place_city_level1_code where korean_name= ?)) AS B where A.place_city_level2_id = B.place_city_level2_id and korean_name = ?))";



            //var values = placeList; "(select id from tbl_weather_place_city_level1_code where korean_name = ?), (select id from tbl_weather_place_city_level2_code where korean_name = ?), (select id from tbl_weather_place_city_level3_code where korean_name = ?))";

            var query = self.connection.query(sql, place,  function (err, rows){

                if (err)
                    console.error(err);
                else {
                    console.log(rows);
                    if (callback)
                        callback(err, rows);
                }
            })
        }
    });

}

/**
 *  행정 구역 상세 정보 등록
 * @param placeList
 * @param callback
 */
PlaceCodeModel.prototype.insertPlaceDistrictDetail = (placeList, callback) => {
    const self = this;

    placeList.forEach(function (place, i){
        {

            //subquery 연동
            const sql = "INSERT INTO tbl_weather_place_detail  " +
                "(create_user_name," +
                " created_time," +
                " del_yn, " +
                " update_user_name," +
                " updated_time," +
                " use_yn," +
                " lat," +
                " lat_hour," +
                " lat_min," +
                " lat_sec," +
                " lon," +
                " lon_hour," +
                " lon_min, " +
                " lon_sec," +
                " nx," +
                " ny," +
                "place_distict_code_id" +
                " ) VALUES (?,  ?,  ?,  ?,   ?,  ?," +
                "           ?,  ?,  ?,  ?,   ?,  ?," +
                "           ?,  ?,  ?,  ?,  (select id from tbl_weather_place_district_code where code = ?))";
            //var values = placeList;

            const query = self.connection.query(sql, place,  function (err, rows){

                if (err)
                    console.error(err);
                else {
                    console.log(rows);
                    if (callback)
                        callback(err, rows);
                }
            })
        }
    });

}

module["exports"] = new PlaceCodeModel();