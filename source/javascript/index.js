
$(".remove_from_dir").on("click", (e) => {
    e.preventDefault();
    var self = e.currentTarget;
    var dgas_id = $(self).data('dgas-id');
    if (dgas_id) {
        $("#remove_from_dir_form_" + dgas_id).submit();
    } else {
        $("#remove_from_dir_form").submit();
    }
});

$(".remove_featured").click((e) => {
    e.preventDefault();
    var self = e.currentTarget;
    var dgas_id = $(self).data('dgas-id');
    if (dgas_id) {
        $("#remove_featured_form_" + dgas_id).submit();
    } else {
        $("#remove_featured_form").submit();
    }
});

$(".set_featured").click((e) => {
    e.preventDefault();
    var self = e.currentTarget;
    var dgas_id = $(self).data('dgas-id');
    console.log(dgas_id);
    if (dgas_id) {
        $("#set_featured_form_" + dgas_id).submit();
    } else {
        $("#set_featured_form").submit();
    }
});

$(".remove_blocked").click((e) => {
    e.preventDefault();
    var self = e.currentTarget;
    var dgas_id = $(self).data('dgas-id');
    if (dgas_id) {
        $("#remove_blocked_form_" + dgas_id).submit();
    } else {
        $("#remove_blocked_form").submit();
    }
});

$(".set_blocked").click((e) => {
    e.preventDefault();
    var self = e.currentTarget;
    var dgas_id = $(self).data('dgas-id');
    console.log(dgas_id);
    if (dgas_id) {
        $("#set_blocked_form_" + dgas_id).submit();
    } else {
        $("#set_blocked_form").submit();
    }
});

$(".logout").click((e) => {
  e.preventDefault();
  $("#logout_form").submit();
});

$("button.add_category").click((e) => {
  e.preventDefault();
  $("#add_category_form").submit();
});

$("div.edit_category").dblclick((e) => {
  e.preventDefault();
  var self = e.currentTarget;
  var name = $(self).text();
  var inp = $('<input type="text" name="category" placeholder="Category..." value="' + name + '">')
  $(self).parent().append(inp);
  $(self).parent().append('<input type="submit" value="update">');
  $(self).detach();
  inp.focus();
  inp.select();
});
