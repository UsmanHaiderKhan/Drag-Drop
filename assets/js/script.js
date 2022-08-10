$(document).ready(function () {
    var diagram = [];
    canvas = $(".canvas");
    tools = $(".tools");
    $("p").draggable({
        revert: "invalid",
        stack: ".draggable",
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
            }
            else if (ui.helper.hasClass("tool-6")) {
                node.type = "tool-6";
            }
            else if (ui.helper.hasClass("tool-7")) {
                node.type = "tool-7";
            }
            else if (ui.helper.hasClass("tool-8")) {
                node.type = "tool-8";
            }
            else if (ui.helper.hasClass("tool-9")) {
                node.type = "tool-9";
            }
            else {
                return;
            }

            diagram.push(node);
            renderDiagrame(diagram);
            diagram=[];
            callSideNav();
        },
        accept: "p",
        
    });


    function renderDiagrame(diagram) {
     //  canvas.empty(); 
        for (var d in diagram) {
            var node = diagram[d];
            // canvas.append("<p>Tool-1</p>");
            var html = "";
            if (node.type === "tool-1") {
                html = "<p>Signature</p>";
            }

            else if (node.type === "tool-2") {
                html = "<p>Initial</p>";
            }
            else if (node.type === "tool-3") {
                html = "<p>Stamp</p>";
            }
            else if (node.type === "tool-4") {
                html = "<p>Date Signed</p>";
            }
            else if (node.type === "tool-5") {
                html = "<p>Name</p>";
            }
            else if (node.type === "tool-6") {
                html = "<p>Email</p>";
            }
            else if (node.type === "tool-7") {
                html = "<p>Text</p>";
            }
            else if (node.type === "tool-8") {
                html = "<p>Email</p>";
            }
            else if (node.type === "tool-9") {
                html = "<p>Radio</p>";
            }

            var dom = $(html).css({
                "position": "absolute",
                "top": node.position.top,
                "left": node.position.left,
                "z-index": '1'
            }).draggable({
                stop: function (event, ui) {
                    var id = ui.helper.attr("id");
                    for (var i in diagram) {
                        if (diagram[i]._id == id) {
                            diagram[i].position.left = ui.position.left;
                            diagram[i].position.top = ui.position.top;
                        }
                    }
                }
            }).resizable().attr("id", node._id);
            canvas.append(dom);
        }
    }
    
        $('#dismiss, .overlay,.navbar-btn').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.myoverlay').removeClass('active');
        }); 
        
        function callSideNav() {
                $('#sidebar').addClass('active');
                $('.myoverlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        }

   
});