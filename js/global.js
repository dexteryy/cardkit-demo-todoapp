
require([
    'jquery',
    'darkdom',
    'cardkit'
], function($, darkdom, cardkit){

cardkit.init({
    appWrapper: '.my-app',
    defaultPage: 'myDefaultPage',
});
cardkit.openPage();

darkdom.initPlugins($);

});
