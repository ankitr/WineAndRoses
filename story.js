// Welcome to reality.

var you;
var me;
var us;

function Decision (description, choices, color) {
    this.description = description;
    this.choices = choices;
    this.color = color;
}

var life = {
    'start': new Decision(
        // Figure gender out.
        'You\'re sitting at a bus stop. A person comes up and sits next to you.',
        {
             'Say hi.':{},
             'Avoid eye contact.':{}
        },
        '#fff'
    )
}
