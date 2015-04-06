define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app-view.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-project-info-wrap">\n    <h1 class="iapp-page-header">' +
((__t = ( header )) == null ? '' : __t) +
'</h1>\n    <p class="iapp-page-chatter">' +
((__t = ( chatter )) == null ? '' : __t) +
' <a href=\'mailto:' +
((__t = (contact_email)) == null ? '' : __t) +
'\'>' +
((__t = (contact_email)) == null ? '' : __t) +
'</a></p>\n\n    <div class="iapp-share-wrap"></div>\n    </div>\n    <div class="iapp-menu"></div>\n    <div class="iapp-festival-info-wrap">\n        \n    </div>\n<div id="card-wrap" class="iapp-card-wrap iapp-card-wrap-full-width"></div>\n\n<div class="iapp-intro-wrap">\n    <div class="iapp-intro-content-wrap">\n        <div class="iapp-intro-icon-wrap">\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/rock.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/hip-hop.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/indie.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/edm.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/r&b.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/pop.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/country.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/americana.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/reggae.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/metal.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/bluegrass.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/jazz.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/world.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/gospel.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/blues.gif" alt="rock" /></span>\n            <span class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/latin.gif" alt="rock" /></span>\n        </div> <!-- end iapp-intro-icon-wrap -->\n        <div class="iapp-intro-info">\n            <h2 class="iapp-intro-header">' +
((__t = ( header )) == null ? '' : __t) +
'</h2>\n            <p class="iapp-intro-chatter">' +
((__t = ( chatter )) == null ? '' : __t) +
'</p>\n            <div class="iapp-button iapp-button-blue iapp-begin-button iapp-clickable"><div class="iapp-button-text">Begin</div></div>\n        </div> <!-- end iapp-intro-info -->\n    </div> <!-- end iapp-intro-content-wrap -->\n</div> <!-- end iapp-intro-wrap -->\n\n<div class="iapp-end-modal-wrap"></div>\n\n';

}
return __p
};

this["templates"]["card-back.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '      <div class="card card-detail">\n      \n        <div class="iapp-detail-image-wrap">\n        </div>\n      \n        <div class="close-card">\n            <img class="iapp-close-card-inner" src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/close-icon.svg">\n            \n            </img>\n        </div>\n      \n      \n      \n        <div class="iapp-detail-info">\n            <h2 class="card-back-header">' +
((__t = ( artist.artist )) == null ? '' : __t) +
' </h2>\n            <p class="iapp-summary"><span class="label label-default">' +
((__t = ( artist.genre )) == null ? '' : __t) +
'</span></p>\n            <table class="table">\n                <thead>\n                    \n                    <tr>\n                        <th>Festival</th>\n                        <th>Date</th>\n                        <th>Location</th>\n                    </tr>\n\n                </thead>\n                <tbody>\n                    \n            ';
 _.each(artist.festivals, function(festival) { ;
__p += '\n                <tr class="iapp-card-back-detail-appearance">\n                    <td class="iapp-card-back-detail-appearance-date">' +
((__t = (festival.full_name)) == null ? '' : __t) +
'</td><td class="iapp-card-back-detail-appearance-network">';
 print(_.findWhere(festivals, {"tagName": festival.tag_name}).date) ;
__p += '</td><td class="iapp-card-back-detail-description">';
 print(_.findWhere(festivals, {"tagName": festival.tag_name}).location) ;
__p += '</td>\n                </tr>\n            \n            ';
});
__p += '\n\n                </tbody>\n            </table>\n        </div>\n      \n      \n      </div>\n      \n        <div class="iapp-detail-bg"></div> \n\n';

}
return __p
};

this["templates"]["card-front.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-card-info">\n    <div class="iapp-card-image-wrap">\n        ';
 if (mobile) { ;
__p += '\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/';
 print(artist.genre.toLowerCase());
__p += '.png" alt="' +
((__t = (artist.genre)) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/';
 print(artist.genre.toLowerCase());
__p += '.gif" alt="' +
((__t = (artist.genre)) == null ? '' : __t) +
'" />\n        ';
 } ;
__p += '\n    </div>\n    <h2 class="iapp-card-info-header">' +
((__t = ( artist.artist)) == null ? '' : __t) +
'</h2>\n    <p class="iapp-card-info-text"></p>\n    \n</div>\n';

}
return __p
};

this["templates"]["fest-info.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-fest-info-previous iapp-fest-info-arrow">\n';
 if (showPrevious) {;
__p += '\n    <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/arrow-left.svg" alt="previous" />\n';
 } ;
__p += '\n</div>\n\n<div class="iapp-festival-detail-info">\n    <h2 class="iapp-festival-name-header">' +
((__t = ( festival.name )) == null ? '' : __t) +
'</h2>\n    <h3 class="iapp-festival-location">' +
((__t = ( festival.location )) == null ? '' : __t) +
'</h3>\n    <h3 class="iapp-festival-date">' +
((__t = ( festival.date )) == null ? '' : __t) +
'</h3>\n    <a href="' +
((__t = ( festival.url )) == null ? '' : __t) +
'" target="_blank"><h3 class="iapp-festival-info">More Info</h3></a>\n</div>\n<div class="iapp-fest-info-next iapp-fest-info-arrow">\n';
 if (showNext) {;
__p += '\n    <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/festivals/img/arrow-right.svg" alt="next" />\n';
 } ;
__p += '\n</div>\n';

}
return __p
};

this["templates"]["lastWeekView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'iapp-last-week-entry\'>\n    <h2 class=\'iapp-last-week-header\'><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/sunday-shows/img/';
 print(networkGuests[0].last_week_network.toLowerCase());
__p += '.png" alt="' +
((__t = (networkGuests[0].last_week_network )) == null ? '' : __t) +
'" class="iapp-last-week-network-logo" /></h2>\n    <h2 class="iapp-last-week-header">' +
((__t = (networkGuests[0].showNames[networkGuests[0].last_week_network])) == null ? '' : __t) +
'</h2>\n    ';
 _.each(networkGuests, function(guestObj) { ;
__p += '\n        <div class="card small-card">\n            \n            <div class="iapp-card-info">\n                <h2 class="iapp-card-info-header">' +
((__t = ( guestObj.guest)) == null ? '' : __t) +
'</h2>\n                <p class="iapp-card-info-text">' +
((__t = (guestObj.description)) == null ? '' : __t) +
'</p>\n            </div>\n        </div>\n    ';
 });
__p += '\n</div>\n';

}
return __p
};

this["templates"]["menu.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-menu-panel">\n    \n    \n    <h3 class="iapp-menu-header iapp-menu-header-filters">Festivals</h3>\n    <div class="iapp-filters-wrap"></div> \n    <div class="iapp-triangle-down"></div>\n</div>\n\n<div class="iapp-menu-control-area">\n    <div class="iapp-menu-button iapp-button iapp-button-blue iapp-clickable"><div class="iapp-button-text">Festivals</div></div>\n    <!-- <div class="iapp&#45;top&#45;button iapp&#45;button iapp&#45;button&#45;blue iapp&#45;clickable"><div class="iapp&#45;button&#45;text">Top</div></div> -->\n    <div class="iapp-menu-close iapp-button iapp-clickable"><div class="iapp-button-text">Close Menu</div></div>\n    <div class="iapp-reset-button iapp-button iapp-clickable"><div class="iapp-button-text">Reset</div></div>\n</div>\n';

}
return __p
};

this["templates"]["share-end.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-end-modal-wrap-content">\n    <div class="iapp-end-modal-close"></div>\n    <div class="iapp-end-modal-content">\n        <h3 class="iapp-end-header">' +
((__t = (endHeader)) == null ? '' : __t) +
'</h3>\n        <p class="iapp-end-chatter">' +
((__t = (endBody)) == null ? '' : __t) +
'</p>\n    </div>\n    <div class="iapp-share-buttons">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/twitter.svg" alt="Twitter share"></a>\n        <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/fb.svg" alt="Facebook share"></a>\n        <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/email.svg" alt="Email share"></a>\n    </div>\n</div>\n\n<div class="iapp-end-modal-bg"></div>';

}
return __p
};

this["templates"]["share.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-buttons">\n    <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" id="Twitter Share" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/twitter.svg" alt="Twitter share"></a>\n    <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" id="Facebook Share" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/fb.svg" alt="Facebook share"></a>\n    <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/email.svg" id="Email Share" alt="Email share"></a>\n</div>\n';

}
return __p
};

this["templates"]["tags.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(tags, function(tag) {
  var tagClass;
    tag == ":(" ? tagClass="sad" : tagClass = tag.toLowerCase().replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"").replace(/\s+/g, "-");
    
  ;
__p += '\n\n<div class="iapp-filter-button" data-filter="' +
((__t = ( tagClass )) == null ? '' : __t) +
'">' +
((__t = ( tag )) == null ? '' : __t) +
'</div>\n\n\n';
 }); ;
__p += '\n\n<div class="iapp-filter-button-clear">Clear Filters</div>';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

  return this["templates"];

});