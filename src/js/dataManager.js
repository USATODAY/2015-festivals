define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone) {

    var hostname = window.location.hostname;

    var dataURL;

    if ((hostname == "localhost" || hostname == "10.0.2.2")) {
        dataURL = 'data/data.json';
    } else {


        dataURL = "http://" + hostname + "/services/webproxy/?url=http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/data/data.json";

    }


    return {
        data: {},
        getData: function() {
            var _this = this;
            jQuery.getJSON(dataURL, function(data) {        
                _this.data = data;

                console.log(_this.data);
                Backbone.trigger("data:ready", this);

            });
        },
        
        cleanTag: function(tagName) {
            return tagName.replace(/\n+/g, "-").toLowerCase();
        },
        userName: '',
        base_url: 'http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/'
    };


});
