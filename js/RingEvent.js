function RingEvent() {
    this.Time = 0;
    this.Type = 0;
    this.Value = 0;
    this.AffectedLightIDs = [];
    this.Color = null;

    this.SetTime = function(row, step) { time = (1/step * row).toFixed(3); };
    this.SetColor = function(r, g, b) { color = [r, g, b]; };


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

        if(!!color) {
            this.Color.push(1);
            data["_customData"]["_color"] = this.Color;
        }

        return data;
    };

    var color_n = 1/255;
    this.normalizeRGB = function(rgb) {
        var n = [
            parseFloat((rgb[0] * color_n).toFixed(3)),
            parseFloat((rgb[1] * color_n).toFixed(3)),
            parseFloat((rgb[2] * color_n).toFixed(3))
        ];

        return n;
    };
}
