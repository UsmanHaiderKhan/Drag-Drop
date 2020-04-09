$(document).ready(function () {
    var diagram = [];
    canvas = $(".canvas");
    tools = $(".tools");
    $("h5").draggable({
        helper: "clone"
    });
    canvas.droppable({
        drop: function (event, ui) {
            var node = {
                _id: (new Date).getTime(),
                position: ui.helper.position()
            }
            node.position.left -= tools.width();
            if (ui.helper.hasClass("tool-1")) {
                node.type = "tool-1";
            }
            else if (ui.helper.hasClass("tool-2")) {
                node.type = "tool-2";
            }
            else if (ui.helper.hasClass("tool-3")) {
                node.type = "tool-3";
            }
            else if (ui.helper.hasClass("tool-4")) {
                node.type = "tool-4";
            }
            else if (ui.helper.hasClass("tool-5")) {
                node.type = "tool-5";
            } else {
                return;
            }
            diagram.push(node);
            renderDiagrame(diagram);
        }
    });


    function renderDiagrame(diagram) {
        canvas.empty();
        for (var d in diagram) {
            var node = diagram[d];
            // canvas.append("<h5>Tool-1</h5>");
            var html = "";
            if (node.type === "tool-1") {
                html = "<h5>Tool-1</h5>";
            }

            else if (node.type === "tool-2") {
                html = "<h5>Tool-2</h5>";
            }
            else if (node.type === "tool-3") {
                html = "<h5>Tool-3</h5>";
            }
            else if (node.type === "tool-4") {
                html = "<h5>Tool-4</h5>";
            }
            else if (node.type === "tool-5") {
                html = "<h5>Tool-5</h5>";
            }
            var dom = $(html).css({
                "position": "absolute",
                "top": node.position.top,
                "left": node.position.left
            }).draggable({
                stop: function (event, ui) {
                    console.log(ui);
                    var id = ui.helper.attr("id");
                    for (var i in diagram) {
                        if (diagram[i]._id == id) {
                            diagram[i].position.left = ui.position.left;
                            diagram[i].position.top = ui.position.top;
                        }
                    }
                }
            }).attr("id", node._id);
            canvas.append(dom);

        }
    }
});