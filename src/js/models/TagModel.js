define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone){

    return Backbone.Model.extend( {
        defaults: {
            'tagName': '',
            'isAvailable': true,
            'isActive': false
        },

        initialize: function() {
            this.on("change:isActive", this.onChange);
        },

        onChange: function() {
            if (this.get('isActive')) {
                Backbone.trigger('set:filter', this);
            }
        }
    });

});
