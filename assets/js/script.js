(function ($) {
    'use strict';

    if (window.acf) {
        window.acf.addAction('ready_field/type=flexible_content', function (field) {
            var $flexible_content_label = field.$el.find('> .acf-label');

            var $action = $('<a>', {
                href: '#',
                title: window.acf_collapse_all_layout_options.i18n.collapse_all_layout,
                class: 'button button-secondary button-small collapse-all-layout',
            }).text(window.acf_collapse_all_layout_options.i18n.collapse_all_layout);

            $flexible_content_label.append($action);
        });
    }

    $(document).on('click', '.collapse-all-layout', function () {
        $( ".layout:not(.-collapsed) .-collapse" ).click();
    });
})(jQuery);