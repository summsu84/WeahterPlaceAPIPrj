class PlaceCodeModelES6 {
    // constructor(생성자)
    constructor() {
        this.connection = null;
    }

    init(connection) {
        console.log(">>PlaceModel init .. connection value : " + connection)

        this.connection = connection;
    }
}


module["exports"] = new PlaceCodeModelES6();