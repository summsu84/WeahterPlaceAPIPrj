const mysql = require('mysql');
const db_config = require('../../db-config');

const DatabaseManager = {
    //Table Model
    connection : null,
    placeCodeModel: null,
    placeCodeSelectModel: null,

    // 데이터베이스 초기화
    init: function(){
		let self = this;
        // Connection to our chat database
        console.log("Connecting mariaDB ");
        self.connection = mysql.createConnection({
            host    : db_config.host,
            port    : db_config.port,
            user    : db_config.user,
            password : db_config.password,
            database : db_config.database,
        });

        self.connection.connect(function(err) {
            if (err) {
                console.error('db connection error');
                console.error(err);
                throw err;
            }else
            {
                console.log("db connection success");
                self.setupSchema(self);
            }
        });
    },

    // 스키마
    setupSchema : (self) => {
        //왜 this가 안먹히는 체크
        //self.placeCodeModel = require('./model/PlaceCodeModelES6').init(self.connection);
        self.placeCodeSelectModel = require('./model/placeCodeSelectModel').init(self.connection);

    }

}

module["exports"] = DatabaseManager;