~function() {
    var player = {};

    var currentactive = null;
    function log(text) {
        var el = document.createElement("div");
        var p = document.createElement("p");
        p.innerText = text
        el.appendChild(p);
        document.getElementById("gamewrapper").appendChild(p);
    }
    function rungame(node, key) {
        if (node[key].color) {
            document.body.style.backgroundColor = node[key].color;
        }
        var el = document.createElement("div");
        var text = document.createElement("p");
        text.innerText = node[key].description;
        el.appendChild(text);

        var l = document.createElement("ul");

        var choices = node[key].choices;
        choices = typeof(choices) === 'function' ? choices(player) : choices;

        Object.keys(choices).forEach(function(choice) {
            var content = choices[choice];
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.innerText = choice;
            a.href="#";
            a.addEventListener("click", function() {
                if (content.callback) {
                    content.callback(player, log);
                }
                if (content.next) {
                    rungame(node, content.next);
                } else {
                    log("Done.");
                }
            });
            li.appendChild(a);
            l.appendChild(li);
        })
        el.appendChild(l);
        document.getElementById("gamewrapper").appendChild(el);
    }

    window.addEventListener('load', function() {
        var story = {
            'second': {
                'description': 'Something happens.',
                'choices': function(player) {
                    var x = {
                    };
                    console.log(player);
                    x[player.allergies || 'banana'] = {
                        'next': 'start'
                    };
                    return x;
                }
            },
            'start': {
               'description': 'You meet a stranger',
               'choices': {
                   'say hello': {
                       'next': 'second'
                    },
                   'sneeze': {
                        'callback': function(player, log) {
                            player.allergies = 'dandelions';
                            log("cow");
                        }
                   }
                }
            }
        };
        rungame(life, 'start');
    }, false);
}();
