/*
 * Name: altai_panel
 * Title: Altai Panel
 * Description: Expand a given element within the window width & height.
 *
 */

 // jQuery
 var jQuery;

(function($, window, document) {
  $.fn.extend({
    altaiPanel: function(options) {
      // Variables
      var action, log, settings, total;
      var object = $(this);

      // Deafault settings
      settings = {
        trim: 0,
        debug: false
      };
      settings = $.extend(settings, options);

      // Log
      log = function(message) {
        if (settings.debug) {
          if (typeof ((console === "undefined") && (console === null))) {
            return console.log(message);
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      };

      // Action
      action = function() {
        total = $(window).outerHeight() - settings.trim;
        object.css({
          "float": "left",
          "min-height": total + "px",
          "width": 100 + "%"
        });
        log("Panel Activated");
        return;
      };

      // If object found run actions
      if (object.length > 0) {
        return this.each(function() {
          action();
        });
      }
    }
  });
})(jQuery, window, document);
