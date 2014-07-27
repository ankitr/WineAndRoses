// Welcome to reality.

var life = {
    start: {
        description: 'You\'re sitting at a bus stop. A girl comes up and sits next to you.',
        choices: {
            'Say hi': {
                callback: function (world, log) {
                    world.you.curiosity = 1;
                    world.you.distraction = 1;
                    world.me.courage = 1;
                    world.us.significance = 1;
                },
                next: 'hey'
            },
            'Avoid eye contact':{
                callback: function (world, log) {
                    world.me.mystery = 1;
                    world.me.courage = 0;
                    world.us.significance = 0;
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
