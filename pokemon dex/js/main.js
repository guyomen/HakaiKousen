var searchForm = $('#search-form');
var searchInput = $('#search-input');

searchForm.submit(function() {
    if(searchInput.val().length > 0) {
        console.log(searchInput.val());
        window.location.replace('/pokedex/search?name=' + searchInput.val());
    }
    return false;
});

var checkboxes = $('input.type-choose');
checkboxes.on('change', function() {
    if($('input.type-choose:checked').length >= 3) {
        this.checked = false;
    }
});

serialize = function(obj) {
    var str = [];
    for(var p in obj)
        if (obj.hasOwnProperty(p) && (encodeURIComponent(obj[p]) !== '')) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    return str.join('&');
};

escapeVal = function(str) {
    if(str === undefined) {
        return '';
    }
    return str;
};

var customSearchForm = $('#custom-search-form');
var customSearchInput = $('#custom-search-input');
var customSearchReset = $('#custom-search-reset');
customSearchInput.on('click', function () {
    var name = $('input[name=name]').val();
    var type;
    var checkedTypes = $('input.type-choose:checked');
    var checkedType1 = $('input.type-choose:checked:eq(0)');
    var checkedType2 = $('input.type-choose:checked:eq(1)');
    switch (checkedTypes.length) {
        case 1:
            type = escapeVal(checkedType1.val());
            break;
        case 2:
            type = escapeVal(checkedType1.val()) + ':' + escapeVal(checkedType2.val());
            break;
        default:
            type = '';
    }
    var weakness = escapeVal($('input[name=type-weakness]:checked').val()) + ':' + escapeVal($('input[name=type-multiplier]:checked').val());
    var params = {
        name: name.trim(),
        type: weakness !== ':' ? weakness : (type !== ':' ? type : '')
    };
    window.location.replace('/pokedex/search?' + serialize(params));
    return false;
});
customSearchReset.on('click', function () {
    customSearchForm.find('input[type=text], textarea').val('');
    customSearchForm.reset();
    return false;
});