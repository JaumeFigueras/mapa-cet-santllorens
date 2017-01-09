exports.LocalConfig = function (localizer, project) {
    localizer.where('Layer').if({'Datasource.type': 'postgis'}).then({
        "Datasource.dbname": "santllorens",
        "Datasource.password": "osmuser",
        "Datasource.user": "osmuser",
        "Datasource.host": "localhost",
	"Datasource.port": "5434"
    });
};
