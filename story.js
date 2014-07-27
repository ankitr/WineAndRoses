// Welcome to reality.

var life = {

    start: {
        description: 'You\'re sitting at a bus stop. A girl comes up and sits next to you.',
        choices: {
            'Say hi': {
                callback: function (world, log) {
                    world.you.headphones = false
                    world.us.label = 'Strangers';
                    log('You: Hey.');
                    log('Her: Oh, hi there.');
                },
                next: 'hey'
            },
            'Avoid eye contact': {
                callback: function (world, log) {
                    world.you.headphones = true;
                    world.us.label = 'Strangers';
                    log('Awkwardly, you both pretend to be in your own worlds. She puts on headphones.');
                },
                next: 'bus'
            }
        }
    },

    hey: {
        choices: {
            'How\'s life?': {
                callback: function (world, log) {
                    log('Her: Uh, it\'s good. What about you?');
                    log('You: Fine. I\'m heading to the city today. Where are you going?');
                    log('Her: Anywhere, honestly. I just need to get away.');
                },
                next: 'bus'
            },
            'What\'s your name?': {
                callback: function (world, log) {
                    log('Her: Um... Veronica. Do I know you?');
                },
                next: 'knowyou'
            },
            'Sorry, I thought you were someone else.': {
                callback: function (world, log) {
                    world.you.headphones = true;
                },
                next: 'bus'
            }
        }
    },
    end: {
        description: 'It\'s time for her to go. You look onwards. Slowly, she disappears into the horizon.',
        choices: {
            'Move on': {
                callback: function (world, log) {
                    world.you = {};
                    world.me = {};
                    world.us = {};
                    log('Years move on. Life moves on. And you learn to start over.');
                },
                next: 'start'
            }
        }
    }
}
