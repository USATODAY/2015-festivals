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
            'isActive': false,
            'index': null
        },

        initialize: function() {
            this.on("change:isActive", this.onChange);
            console.log(this);
        },

        onChange: function() {
            if (this.get('isActive')) {
                Backbone.trigger('set:filter', this);
            }

            console.log(this.getIndex());
        },

        getIndex: function() {
            index = this.collection.indexOf(this);
            return index;
        }
    });

});
