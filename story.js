// Welcome to reality.

var life = {
    start: {
        description: 'You\'re about to meet someone. What do you call them?',
        choices: {
            'She': {
                callback: function (world, log) {
                    world.you.pronoun = 'she';
                    world.you.noun = 'girl';
                    world.you.possession = 'her';
                },
                next: 'welcome'
            },
            'He': {
                callback: function (world, log) {
                    world.you.pronoun = 'he';
                    world.you.noun = 'boy';
                    world.you.possession = 'his';
                },
                next: 'welcome'
            },
            'They': {
                callback: function (world, log) {
                    world.you.pronoun = 'they';
                    world.you.noun = 'person';
                    world.you.possession = 'their';
                },
                next: 'welcome'
            }
        }
    },
    welcome: {
        description: 'You\'re sitting at a bus stop. A person comes up and sits next to you.',
        choices: {
            'Say hi.': {
                callback: function (world, log) {
                    world.you.curiosity = 1;
                    world.you.distraction = 1;
                    world.me.courage = 1;
                    world.us.significance = 1;
                },
                next: 'hey'
            },
            'Avoid eye contact.':{
                callback: function (world, log) {
                    world.me.mystery = 1;
                    world.me.courage = 0;
                    world.us.significance = 0;
                },
                next: 'bus'
            }
        }
    }
}
