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
}

module["exports"] = new PlaceCodeSelectModel();