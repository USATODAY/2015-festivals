//Master AppView module. All other views are children of this view

define([
  'jquery',
  'imagesloaded',
  'isotope',
  'api/analytics',
  'underscore',
  'lib/BackboneRouter',
  'templates',
  'models/config',
  'models/menuModel',
  'models/shareModel',
  'views/detailView',
  'views/cardsView',
  'views/menuView',
  'views/shareView',
  'views/LastWeekView',
  'collections/ItemsCollection',
  'collections/LastWeekCollection',
  'router',
  'dataManager',
  'jquery_ui_touch_punch'
  ], 
  function(jQuery, imagesLoaded, Isotope, Analytics, _, Backbone, templates, config, MenuModel, ShareModel, detailView, CardsView, MenuView, ShareView, LastWeekView, ItemsCollection, LastWeekCollection, router, dataManager) {

  return Backbone.View.extend({
    el: ".iapp-page-wrap",
    events: {
      'click .iapp-begin-button': 'onBeginClick',
      'click .iapp-fest-info-previous': 'onPrevious',
      'click .iapp-fest-info-next': 'onNext'
    },

    initialize: function() {
      this.listenTo(Backbone, 'route:last-week', this.onRouteLastWeek);
      this.listenTo(Backbone, 'route:share', this.onRouteShare);
      this.listenTo(Backbone, 'data:ready', this.onDataReady);
      this.listenTo(Backbone, 'app:reset', this.onAppReset);
      this.listenTo(Backbone, 'set:filter', this.onSetFilter);
      this.listenTo(Backbone, 'clear:filter', this.onClearFilter);
    },
    

    template: templates["app-view.html"], 

    festInfoTemplate: templates["fest-info.html"],

    render: function() {
      this.$el.html(this.template({
          chatter: "Music fills the hot summer air at festivals across the USA. We compiled lineups from the most popular mega-music events. This page shows all the acts, starting with the most popular — click on one to see where that band or musician is playing. Then click on any of the festival names to see the lineup for that event. Rock on!", 
          header: "USA TODAY Summer Music Festivalaganza", 
          contact_email: ""
      }));
      
    },

    addSubViews: function() {
      this.shareModel = new ShareModel();
      this.shareView = new ShareView({model: this.shareModel});
      this.menuView = new MenuView({model: new MenuModel()});
      this.itemsCollection = new ItemsCollection(dataManager.data.artists); 
      this.cardsView = new CardsView({collection: this.itemsCollection});
      this.lastWeekCollection = new LastWeekCollection(this.itemsCollection.where({'last_week': true}));
      this.lastWeekView = new LastWeekView({collection: this.lastWeekCollection});
      this.$el.append(this.lastWeekView.el);
      Backbone.history.start();
    },

    onDataReady: function() {
      this.render();
      this.addSubViews();
    },

    onMenuClick: function() {
      Backbone.trigger('menu:show');
    },

    onNext: function() {
        Backbone.trigger('festival:next');
    },
    
    onPrevious: function() {
        Backbone.trigger('festival:previous');
    },

    onSetFilter: function(activeFestival) {
        showPrevious = activeFestival.getIndex() > 0;
        showNext = activeFestival.getIndex() < activeFestival.collection.length - 1;
        this.$(".iapp-festival-info-wrap").html(this.festInfoTemplate({'festival': activeFestival.toJSON(), 'showPrevious': showPrevious, 'showNext': showNext}));
    },

    onClearFilter: function() {
        this.$(".iapp-festival-info-wrap").empty();
    },

    onRouteShare: function() {
      this.$el.addClass('iapp-share-route');
    },

    onAppReset: function() {
      this.$el.removeClass('iapp-last-week-route');
      this.$('.iapp-last-week-radio').eq(1).prop('checked', false);
      this.$('.iapp-last-week-radio').eq(0).prop('checked', true);
    },

    onBeginClick: function() {
        Analytics.trackEvent('Begin button clicked');
        this.$('.iapp-begin-button').addClass('iapp-transition-out');
        this.$('.iapp-intro-wrap').fadeOut();
    },

    onRouteLastWeek: function() {
        Analytics.trackEvent('Last week guests page viewed');
        this.$el.addClass('iapp-last-week-route');
        this.menuView.model.set({'isMenuOpen': false});
        this.$('.iapp-last-week-radio').eq(1).prop('checked', true);
        this.$('.iapp-last-week-radio').eq(0).prop('checked', false);
    }
    
  });

});
