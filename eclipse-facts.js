'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = undefined;

var SKILL_NAME = '2017 Solat Eclipse Facts';
var GET_FACT_MESSAGE = "Here is your Solar Eclipse Fact: ";
var HELP_MESSAGE = 'You can say tell me a solar eclipse fact, or, you can say stop...';
var HELP_REPROMPT = 'What can I help you with?';
var STOP_MESSAGE = 'Goodbye!';

var data = [
  'This will be the first total solar eclipse in the continental U.S. in 38 years.',
  'A solar eclipse is a lineup of the Sun, the Moon, and Earth.',
  'A solar eclipse happens at New Moon. The Moon has to be between the Sun and Earth for a solar eclipse to occur.',
  'Solar eclipses don\'t happen at every New Moon.',
  'Eclipse totalities are different lengths.',
  'It\'s all about magnitude and obscuration. Astronomers categorize each solar eclipse in terms of its magnitude and obscuration, and I don\'t want you to be confused when you encounter these terms. The magnitude of a solar eclipse is the percent of the Sun’s diameter that the Moon covers during maximum eclipse. The obscuration is the percent of the Suns total surface area covered at maximum. Here\'s an example: If the Moon covers half the Sun\'s diameter (in this case the magnitude equals 50 percent), the amount of obscuration (the area of the Sun\'s disk the Moon blots out) will be 39.1 percent.',
  'Solar eclipses occur between Saros cycles. Similar solar and lunar eclipses recur every 6,585.3 days (18 years, 11 days, 8 hours). Scientists call this length of time a Saros cycle. Two eclipses separated by one Saros cycle are similar. They occur at the same node, the Moon’s distance from Earth is nearly the same, and they happen at the same time of year.',
  'Everyone in the continental U.S. will see at least a partial eclipse. In fact, if you have clear skies on eclipse day, the Moon will cover at least 48 percent of the Sun’s surface. And that’s from the northern tip of Maine.',
  'It\'s all about totality. Not to cast a shadow on things, but likening a partial eclipse to a total eclipse is like comparing almost dying to dying. I know that 48 percent sounds like a lot. It isn’t. You won’t even notice your surroundings getting dark. And it doesn’t matter whether the partial eclipse above your location is 48, 58, or 98 percent. Only totality reveals the true celestial spectacle: the diamond ring, the Sun’s glorious corona, strange colors in our sky, and seeing stars in the daytime.',
  'You want to be on the center line. This probably isn’t a revelation, but the Moon’s shadow is round. If it were square, it wouldn’t matter where you viewed totality. People across its width would experience the same duration of darkness. The shadow is round, however, so the longest eclipse occurs at its center line because that’s where you’ll experience the Moon’s shadow’s full width.',
  'First contact is in Oregon. If you want to be the first person to experience totality in the continental U.S., be on the waterfront at Government Point, Oregon, at 10:15:56.5 a.m. PDT. There, the total phase lasts 1 minute, 58.5 seconds.',
  'The center line crosses through 12 states.',
  'Totality lasts a maximum of 2 minutes and 40.2 seconds.',
  'This eclipse will be the most-viewed ever.',
  'You won’t need a telescope.',
  'The future is bright but long. The next total solar eclipse over the continental U.S. occurs April 8, 2024.',
  'the first-ever photo of a total solar eclipse was taken 166 years ago July 29, 1851',
  'A total solar eclipse occurs when the disk of the moon appears to completely cover the disk of the sun in the sky.',
  'the total solar eclipse is about 70 miles wide and stretches from Oregon to South Carolina. It passes through Idaho, Wyoming, Nebraska, Kansas, Missouri, Illinois, Kentucky, Tennessee, Georgia, North Carolina and South Carolina.',
  'Anyone planning to view the total solar eclipse of 2017 should get a pair of solar viewing glasses.',
  'Skywatchers outside the path of totality will still be able to see a partial solar eclipse.',
  'Looking directly at the sun, even when it is partially covered by the moon, can cause serious eye damage or blindness. NEVER look at a partial solar eclipse without proper eye protection.',
  'Aug. 21, 2017, may be one of the worst traffic days in national history, some NASA representatives predict.',
  'Total eclipses are seen rarely because totality  when the sun appears totally hidden by the moon  only exists along a narrow path on Earth\'s surface, as opposed to partial eclipses which can be viewed across a much wider region.',
  'Acceptable filters for unaided visual solar observations include aluminized Mylar.',
  'do not use sunglasses, old color film negatives, black-and-white film that contains no silver, photographic neutral-density filters and polarizing filters to view the eclipse.',
  'the U.S. Postal Service has announced new stamps to commemorate the 2017 eclipse'
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};



{
  "intents": [
    {
      "intent": "GetNewFactIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
/*

http://bit.ly/jr4thfacts

GetNewFactIntent tell me a solar eclipse fact
GetNewFactIntent give me a solar eclipse fact
GetNewFactIntent I want a solar eclipse fact

Alexa, open give me a solar eclipse fact
give me a solar eclipse fact
i want a solar eclipse fact
*/
