(function () {

    var $figure = null;

    $(function () {
        init();

        $("body").on("click", ".figure", selectFigure);
        $("table").on("click", clearFocus);

        $("#moveBtn").on("click", move);
        $("#resetBtn").on("click", init);
    });

    function init() {
        clearFocus();
        clearInputs();
        $(".figure").remove();

        var $pawn = $("<div>").addClass("figure pawn");
        var $bishop = $("<div>").addClass("figure bishop");
        var $king = $("<div>").addClass("figure king");
        var $knight = $("<div>").addClass("figure knight");
        var $queen = $("<div>").addClass("figure queen");
        var $rook = $("<div>").addClass("figure rook");

        $("#A2, #B2, #C2, #D2, #E2, #F2, #G2, #H2").html($pawn);
        $("#A1, #H1").html($rook);
        $("#B1, #G1").html($knight);
        $("#C1, #F1").html($bishop);
        $("#D1").html($queen);
        $("#E1").html($king);
    }

    function selectFigure(event) {
        event.stopPropagation();
        $figure = $(this);
        showElemenPosition(this);
        setFocus(this);
    }

    function move() {

        var letterPart = $("#char").val().toUpperCase();
        var numberPart = $("#num").val().toUpperCase();
        var $target = $("#" + letterPart + numberPart);

        if (isEmpty($target)) {
            $target.html($figure);
            clearFocus();
        }
    }

    function showElemenPosition(element) {
        var currentPosition = element.parentElement.id;
        var currentWord = currentPosition.substr(0, 1);
        var currentNum = currentPosition.substr(1, 1);
        $("#char").val(currentWord);
        $("#num").val(currentNum);
    }

    function isEmpty($element) {
        return $element.children().length == 0;
    }

    function setFocus(element) {
        clearFocus();
        $(element).parent().toggleClass('shadow');
    }
    function clearFocus() {
        $('.shadow').removeClass('shadow');
    }

    function clearInputs() {
        $("input").val('');
    }

}());