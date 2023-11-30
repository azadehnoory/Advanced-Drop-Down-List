jQuery(document).ready(function ($) {
    let selected_values = [];
    $('.arrow').on('click', function () {
        $('.custom-select').addClass('open');
    })
    $('.option').on('click', function () {
        if (!$(this).hasClass('active')) {
            let value = $(this).attr('data-value');
            $('.selected-options').append(" <span class='tag' id='" + value + "'>" + value + "<span class='remove-tag'>&times;</span></span>");
            $(this).addClass('active');
            selected_values.push(value);
            $('.tags-input').attr('value', selected_values.join(','));
        } else {
            let value = $(this).attr('data-value');
            $(this).removeClass('active');
            selected_values.splice($.inArray(selected_values, value), 1);
            $('.tags-input').attr('value', selected_values.join(','));
            $("#" + value).remove();
        }

    })
    $('.selected-options').on('click', '.remove-tag', function () {
        $(this).parent().remove();
        let value = $(this).parent().attr('id');
        $('.option[data-value="'+value+'"]').removeClass('active');
        selected_values.splice($.inArray(selected_values, value), 1);
        $('.tags-input').attr('value', selected_values.join(','));
    })
});
$(document).on('mouseup',function(e){
    let container = $('.custom-select');
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        $('.custom-select').removeClass('open');
    }
});