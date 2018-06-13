(function(jQuery) {  
  jQuery(document).ready(function() {
    MktoForms2.whenReady(function (form) {
      var checkboxWrapper = form.getFormElem().find('.mktoCheckboxList:first')
        .parent().parent().parent();
      var button = form.getFormElem().find('.mktoButtonRow');
      var hiddenInputs = form.getFormElem().find('.mktoFormRow input[type="hidden"]')
        .parent().parent().parent().parent();

      hiddenInputs.hide();
      checkboxWrapper.insertBefore(button);
    });
  });
})(jQuery);
