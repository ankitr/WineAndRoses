~function() {
    var world = {'you':{}, 'me':{}, 'us':{}};

    var currentactive = null;
    function log(text) {
        if (arguments.length === 1) {
            var el = document.createElement("div");
            var p = document.createElement("p");
            p.innerText = text;
            el.appendChild(p);
            document.getElementById("gamewrapper").appendChild(el);
        } else {
            [].forEach.call(arguments, function(line) {
                log(line[0] + ': ' + line[1]);
            });
        }
    }
    function rungame(node, key) {
        var active = true;
        if (node[key].color) {
            document.body.style.backgroundColor = node[key].color;
        }

        log(node[key].description || '');

        var el = document.createElement("div");
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
                    el.className += " inactive";
                    a.className += " chosen";
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
        rungame(life, 'start');
    }, false);
}();
