function JsonData() {
    var json = null;

    this.bindDrop = function() {
        var self = this;

        document.ondragover = function(e) { e.preventDefault(); };
        document.ondrop = function(e) {
            e.preventDefault();

            var file = e.dataTransfer.files[0];
            var reader = new FileReader();

            reader.onload = function(e) {
                var data = e.target.result;

                json = JSON.parse(data);
                self.ondrop();
            };

            reader.readAsText(file);
        };
    };

    this.ondrop = function() {};
}
