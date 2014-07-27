// Welcome to reality.

var life = {

    start: {
        description: 'You\'re sitting at a bus stop. A girl comes up and sits next to you.',
        choices: {
            'Say hi': {
                callback: function (world, log) {
                    world.you.love = 0;
                    world.you.headphones = false
                    world.you.curiosity = 1;
                    world.me.love = 0;
                    world.me.courage = 1;
                    world.us.label = 'Strangers';
                    world.us.significance = 1;
                    world.us.familiarity = 0;
                    world.us.formality = 0;
                    world.
                    log('You: Hey.');
                    log('Her: Oh, hi there.');
                },
                next: 'hey'
            },
            'Avoid eye contact': {
                callback: function (world, log) {
                    world.you.love = 0;
                    world.you.headphones = true; 
                    world.you.curiosity = 0;
                    world.me.love = 0;
                    world.me.courage = 0;
                    world.us.label = 'Strangers';
                    world.us.significance = 0;
                    world.us.familiarity = -1;
                    world.us.formality = 0;
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
                    world.us.formality--;
                    world.us.familiarity++;
                    log('Her: Uh, it\'s good. What about you?');
                    log('You: Fine. I\'m heading to the city today. Where are you going?');
                    log('Her: Anywhere, honestly. I just need to get away.');
                },
                next: 'bus'
            },
            'What\'s your name?': {
                callback: function (world, log) {
                    world.you.curiosity += 2;
                    world.us.familiarity -= 2;
                    log('Her: Um... Veronica. Do I know you?');
                },
                next: 'knowyou'
            },
            'Sorry, I thought you were someone else.': {
                callback: function (world, log) {
                    world.you.curiosity++;
                    world.you.headphones = true;
                    world.me.courage--;
                    world.us.label = 'Strangers';
                    world.us.significance = 0;
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
