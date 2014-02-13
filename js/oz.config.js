
require.config({
    baseUrl: 'bower_components/',
    aliases: {
        momo: 'momo/momo/',
        dollar: 'dollar/dollar/'
    }
});

define('eventmaster', 'eventmaster/eventmaster.js');
define('dollar', 'dollar/dollar.js');
define('soviet', 'soviet/soviet.js');
define('darkdom', 'darkdom/darkdom.js');
define('cardkit', 'cardkit/dist/cardkit.js');
