function UI() {
    var num_beats = 1;
    var num_objects = 16;
    var num_steps = 4;
    
    var marginY = 40; // todo: make it square and dynamic to num_beats....
    var gridThickness = 2;
    var beatThickness = 4;
    var totalWidth = 600;
    var totalHeight = 400;
    var gridColor = "white";
    var beatColor = "yellow";

    this.generateGrid = function(ctx) {
        var w, h;
        var beat_offset = 0;
        for(var y = 0; y <= num_beats; y++) {
            h = beatThickness;
            w = totalWidth;
            beat_offset = marginY + y*marginY*num_steps;
        
            ctx.fillStyle = beatColor;
            ctx.fillRect(0, beat_offset, w, h);
        
            if(y >= num_beats) {
                break;
            }
        
            for(var y_step = 1; y_step < num_steps; y_step++) {
                h = gridThickness;
        
                ctx.fillStyle = gridColor;
                ctx.fillRect(0, beat_offset + y_step*marginY, w, h);
            }
        }
        
        for(var x = 0; x <= num_objects; x++) {
            h = totalHeight;
            w = gridThickness;
        
            ctx.fillStyle = gridColor;
            ctx.fillRect(x*(totalWidth/num_objects), 0, w, h);
        }
    }
    
    this.generateRing = function(ctx) {
        var w = 35, h = 35;
        var marginX = 35;
        var marginY = 60;
        var yOffset = 70;
        var objectColor = "gray";
    
        ctx.fillStyle = objectColor;
        for(var x = 0; x < num_objects; x++) {
            var y = Math.sin(Math.PI / num_objects * x) * marginY;
    
            ctx.fillRect(x + marginX*x, y + yOffset, w, h);
            ctx.fillRect(x + marginX*x, -y + yOffset*4, w, h);
        }
    }
}