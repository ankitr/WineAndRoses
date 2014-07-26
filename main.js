~function() {
    var world = {'you':{}, 'me':{}, 'us':{}};

    var currentactive = null;
    function log(text) {
        var el = document.createElement("div");
        var p = document.createElement("p");
        p.innerText = text
        el.appendChild(p);
        document.getElementById("gamewrapper").appendChild(p);
    }
    function rungame(node, key) {
        var active = true;
        if (node[key].color) {
            document.body.style.backgroundColor = node[key].color;
        }
        var el = document.createElement("div");
        var text = document.createElement("p");
        text.innerText = node[key].description;
        el.appendChild(text);

        var l = document.createElement("ul");

        var choices = node[key].choices;
        choices = typeof(choices) === 'function' ? choices(world) : choices;

        Object.keys(choices).forEach(function(choice) {
            var content = choices[choice];
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.innerText = choice;
            a.href="#";
            a.addEventListener("click", function() {
                if (active) {
                    active = false;
                    if (content.callback) {
                        content.callback(world, log);
                    }
                    if (content.next) {
                        rungame(node, content.next);
                    } else {
                        log("Done.");
                    }
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
                'choices': function(world) {
                    var x = {
                    };
                    console.log(world);
                    x[world.allergies || 'banana'] = {
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
                        'callback': function(world, log) {
                            world.allergies = 'dandelions';
                            log("cow");
                        }
                   }
                }
            }
        };
        rungame(life, 'start');
    }, false);
}();
