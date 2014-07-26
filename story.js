// Welcome to reality.

var life = {
    start: {
        // Figure gender out.
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
