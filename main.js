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
        var el = document.createElement("div");
        var text = document.createElement("p");
        text.innerText = node[key].description;
        el.appendChild(text);

        var l = document.createElement("ul");
        Object.keys(node[key].choices).forEach(function(choice) {
            var content = node[key].choices[choice];
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
                'choices': {
                    'Panic!': {
                    },
                    'Freak out!': {
                    }
                }
            },
            'start': {
               'description': 'You meet a stranger',
               'choices': {
                   'say hello': {
                       'next': 'start'
                   },
                   'sneeze': {
                       'callback': function(player, log) {
                           player.allergies = 0;
                           log("cow");
                       }
                   }
               }
            }
        };
        rungame(story, 'start');
    }, false);
}();
