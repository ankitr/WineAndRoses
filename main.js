~function() {
    var world = {'you':{}, 'me':{}, 'us':{}};

    var currentactive = null;
    function log(text) {
        if (arguments.length === 1) {
            baudqueue.push(text);
        } else {
            [].forEach.call(arguments, function(line) {
                log(line[0] + ': ' + line[1]);
            });
        }
    }

    var baudqueue = [];
    var baudindex = 0;
    function baud() {
        if (baudindex < baudqueue.length) {
            var text = baudqueue[baudindex];
            if (typeof(text) === 'string') {
                var p = document.createElement("p");
                document.getElementById("gamewrapper").appendChild(p);

                var charindex = 0;
                function char() {
                    if (charindex < text.length) {
                        p.textContent += text[charindex];
                        charindex++;
                        window.setTimeout(char, 10);
                    } else {
                        window.setTimeout(baud, 10);
                    }
                }
                char();
            } else {
                document.getElementById("gamewrapper").appendChild(text);
                window.setTimeout(baud, 10);
            }
            baudindex++;
        } else {
            window.setTimeout(baud, 10);
        }
    }
    baud();

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
        // document.getElementById("gamewrapper").appendChild(el);
        log(el);
    }

    window.addEventListener('load', function() {
        rungame(life, 'start');
    }, false);
}();
