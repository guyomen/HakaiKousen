$(document).ready(function () {
    if($("#content-edit").length) {
        var $editor = new SimpleMDE({element: $("#content-edit")[0], spellChecker: false});
        $("#form-edit").submit(function (event) {
            $("#content-send").val($editor.value());
        });
    }
    $(document).ready(function() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
    if($("#SQL").length) {
        var editor = CodeMirror.fromTextArea(document.getElementById('SQL'), {
            smartIndent: true,
            lineNumbers: true,
            matchBrackets : true,
            autofocus: true,
            extraKeys: {"Ctrl-Space": "autocomplete"},
            mode: "text/x-mysql",
            theme: "blackboard"
        });
    }
    var alertMe = true;
    $("#execute").on("click", function () {
        var text = $("#SQL").val();
        if (!text.match(/select/i) && alertMe) {
            alert("Attention, votre requête ne contient pas le mot-clef 'SELECT'!\nÊtes-vous sûr de ce que vous faites ?");
            alertMe = false;
            return false;
        }
        else {
            return true;
        }
    });
});