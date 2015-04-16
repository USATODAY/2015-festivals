define([
  'jquery',
  'imagesloaded',
  'isotope',
  'api/analytics',
  'underscore',
  'lib/BackboneRouter',
  'templates',
  'models/config',
  'views/cardView',
  'views/detailView',
  'router',
  'unveil',
  'jquery_ui_touch_punch'
  ], 
  function(jQuery, imagesLoaded, Isotope, Analytics, _, Backbone, templates, config, cardView, detailView, router) {

  return Backbone.View.extend({
    el: ".iapp-card-wrap",
 
    events: {
  
    },

    initialize: function() {
      this.listenTo(this.collection, 'change:highlight', this.showDetail);
      this.listenTo(router, "highlight", this.onHighlightRoute);
      this.listenTo(router, "homeRoute", this.onHomeRoute);
      this.listenTo(Backbone, "filters:update", this.filter);
      this.listenTo(Backbone, "clear:filter", this.clearFilters);
      this.listenTo(Backbone, 'route:share', this.onRouteShare);
      this.listenTo(Backbone, 'app:reset', this.onAppReset);
      this.listenTo(Backbone, 'search', this.searchByName);
      this.render();

    },

    addOne: function(question) {
      var view = new cardView({model: question});
      this.$el.append(view.render().el);
    },

    showDetail: function(model) {
      if(model.get('highlight')) {
        this.detailView =  new detailView({model: model});
        this.$el.append(this.detailView.render().el);
      }
      
    },

    render: function() {
      this.$el.empty();
      this.collection.each(this.addOne, this);
      // this.$el.addClass('iapp-card-wrap-full-width');
      
      var $el = this.$el;
      var _this = this;
      $el.isotope( {
          itemSelector: '.card',
          transitionDuration: (!config.isMobile) ? '0' : 0,
          getSortData: {
            appearances: function(itemElem) {
              return parseInt(jQuery(itemElem).data('appearances'));
            }
          },
          sortBy: 'appearances',
          sortAscending: false
        });
      
      $el.imagesLoaded( function() {
        _this.relayout();
        _this.unveilImages();
    
      });
    },

    unveilImages: function() {

      var _this = this;

      this.$('.cover-img').unveil(5000, function() {
        $(this).imagesLoaded(function() {
          _this.relayout();
        });
      });
    }, 


    filter: function(activeFilter) {
        filterStr = "." + activeFilter.get('tagName');
        console.log(filterStr);
        this.$el.isotope({ filter: filterStr });
        _.delay(function() {
          $(window).trigger('scroll');
        }, 1000);

        _.delay(function() {
          $(window).trigger('scroll');
        }, 2000);
    },

    searchByName: function(name) {
        console.log(name);
        this.$el.isotope({
            filter: function() {
                var itemName = $(this).data("search-name").toString();
                console.log(itemName);
                return itemName.indexOf(name) > -1;
            }
        });
    },

    relayout: _.throttle(function() {
      this.$el.isotope('layout');
      _.delay(function() {
          $(window).trigger('scroll');
        }, 1000);
    }, 500),

    clearFilters: function(e) {
      this.$el.isotope({ filter: "*"});
    },

    onRouteShare: function() {
      var _this = this;
      _.defer(function() {
        _this.$el.isotope({filter: '.iapp-liked, .iapp-disliked'});
        _this.$el.isotope('updateSortData').isotope({sortBy: 'liked'});
      });
    },

    onAppReset: function() {
      this.clearFilters();
      this.relayout();
    }
  });

});
