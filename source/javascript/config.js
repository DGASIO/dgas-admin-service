$(".remove_admin").click((e) => {
    e.preventDefault();
    var self = e.currentTarget;
    var dgas_id = $(self).data('dgas-id');
    if (dgas_id) {
        $("#remove_admin_form_" + dgas_id).submit();
    }
});
