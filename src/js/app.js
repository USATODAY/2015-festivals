define([
  'require',
  'jquery',
  'isotope',
  'underscore',
  'lib/BackboneRouter',
  'models/config',
  'views/appView',
  'dataManager',
  'jquery_ui_touch_punch'
  ],
  function(require, jQuery, Isotope, _, Backbone, config, appView, dataManager) {


  return {

    //define entry point init function
    init: function() {

        //require jquery-bridget for puluginizing Isotope
        require( [ 'jquery-bridget/jquery.bridget' ],
            function() {
            // make Isotope a jQuery plugin
            $.bridget( 'isotope', Isotope );

            // add class for mobile or tabled
            if (config.isTablet || config.isMobile) {
                $('.iapp-page-wrap').addClass('iapp-touch-device');
            }

            //turn resize and scroll into Backbone events
            $(window).on('resize', function(e) {
                Backbone.trigger('window:resize');
            });

            $(window).on('scroll', function() {
                Backbone.trigger('window:scroll');
            });

            //check for no-header query string

            function getQueryVariable(variable) {
                var query = window.location.search.substring(1);
                var vars = query.split('&');
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split('=');
                    if (decodeURIComponent(pair[0]) == variable) {
                        return decodeURIComponent(pair[1]);
                    } 
                }
                return false
                console.log('Query variable %s not found', variable);
            }

            console.log(getQueryVariable("windet"));
            if (getQueryVariable("native") == "true") {
                console.log('hide header');
                $('header').hide();
                $('body').addClass('in-app')
            }

            //Make data request

            dataManager.getData();

            //Create app view
            appview = new appView();

        }
      );
    }
  };
});
