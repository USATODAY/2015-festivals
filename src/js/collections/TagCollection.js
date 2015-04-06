define(
  [
    'jquery',
    'underscore',
    'backbone',
    'router',
    'models/TagModel'
  ], function(jQuery, _, Backbone, router, TagModel){

    return Backbone.Collection.extend({
        model: TagModel,
        initialize: function() {
            this.listenTo(Backbone, "set:filter", this.onFilterSet);
            this.listenTo(Backbone, "clear:filter", this.onClear);
            this.listenTo(Backbone, 'tags:reset', this.onTagsReset);
            this.listenTo(Backbone, 'route:filters', this.onFilterRoute);
            this.listenTo(Backbone, 'app:reset', this.onAppReset);
        },

        _currentFilter: null,

        onFilterSet: function(activeFilter) {


            //set old filter to not active
            if (this._currentFilter !== null) {
                this._currentFilter.set({'isActive': false});
            }

            this._currentFilter = activeFilter;
            var filterSlug = activeFilter.get('tagName');

            router.navigate('festival/' + filterSlug);
            Backbone.trigger('filters:update', activeFilter);
        },

        onClear: function() {
            router.navigate('_');
            this._currentFilter = null;
        },

        onTagsReset: function() {
            this.each(function(tag) {
                tag.set({'isActive': false}); 
            });

        },
        onFilterRoute: function(filterName) {
            var _this = this; 

             _this.findWhere({'tagName': filterName}).set({'isActive': true});
        },
        onAppReset: function() {
            this.onTagsReset();
        }
             
        
    });

});
