(function(jQuery) {  
  jQuery(document).ready(function() {
    MktoForms2.whenReady(function (form) {
      var checkbox = form.getFormElem().find('.mktoCheckboxList input[type="checkbox"]');
      // var label = form.getFormElem().find('#mktoCheckbox_17449_0');
      var label = checkbox.next();
      var submit = form.getFormElem().find('button.mktoButton[type="submit"]');

      form.submittable(false);

      submit.click(function() {
        if (checkbox.prop('checked')==true) {
          form.submittable(true);
          form.submit();
        } else {
          label.addClass('invalid');
          label.focus();
        }
      });
    });
  });
})(jQuery);
