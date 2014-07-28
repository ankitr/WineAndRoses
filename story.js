// Welcome to reality.

var life = {

    start: {
        description: 'You\'re sitting at a bus stop. A girl comes up and sits next to you.',
        choices: {
            'Say hi': {
                callback: function (world, log) {
                    world.you.headphones = false
                    world.us.label = 'Strangers';
                    world.us.conversing = false;
                    world.us.awkward = false; // Hang with me here.
                    log('You: Hey.');
                    log('Her: Oh, hi there.');
                },
                next: 'hey'
            },
            'Avoid eye contact': {
                callback: function (world, log) {
                    world.you.headphones = true;
                    world.us.label = 'Strangers';
                    world.us.conversing = false; 
                    world.us.awkward = false;
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
                    world.us.conversing = true;
                    world.us.conversation = 'travel';
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
                    log('Oh, okay.');
                    log('She puts on headphones.');
                },
                next: 'bus'
            }
        }
    },

    knowyou: {
        choices: {
            'Of course. We were like best friends in 2nd grade. Don\'t you remember?': {
                callback: function (world, log) {
                    world.us.conversing = true;
                    world.us.conversation = 'school';
                    log('Her: I was homeschooled...');
                    log('You (jokingly): Hey, it was worth a shot.');
                    log('Her: (laughs) Sure.');
                },
                next: 'bus'
            },
            'Nope. Just trying to start conversation.': {
                callback: function (world, log) {
                    world.us.conversing = true;
                    world.us.conversation = 'life';
                    log('Her: Oh, sure. What\'s your name?');
                },
                next: 'name',
            },
            'Uh, never mind.': {
                callback: function (world, log) {
                    world.us.awkward = false;
                    log('Her: Okay...');
                    log('She gives you an awkward glance and puts on headphones, turning the other way.');
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
