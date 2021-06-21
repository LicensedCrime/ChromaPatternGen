function RingEvent() {
    this.Time = 0;
    this.Type = 0;
    this.Value = 0;
    this.AffectedLightIDs = [];

    this.ToChroma = function() {
        var data = {
            "_time": time,
            "_type": type,
            "_value": value,
            "_customData": {}
        };

        if(affectedLightIDs.length == 1) {
            data["_customData"]["_lightID"] = affectedLightIDs[0];
        }

        if(affectedLightIDs.length > 1) {
            data["_customData"]["_lightID"] = affectedLightIDs;
        }

        return data;
    };
}
