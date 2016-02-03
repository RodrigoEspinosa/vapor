/*globals jQuery, document */
(function ($) {
  'use strict';

  $(document).on('ready', function() {
    new KudosPlease({
      el: '.kudos',
      duration: 1500,
      persistent: true,
      status : {
        alpha: '',
        beta: '',
        gamma: ''
      }
    });
  });

}(jQuery));
