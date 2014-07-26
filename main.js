~function() {
    var player = {};
    function echo(node) {
        console.log(node);
        var el = document.createElement("div");
        var text = document.createElement("p");
        text.innerText = node.description;
        el.appendChild(text);

        var l = document.createElement("ul");
        Object.keys(node.choices).forEach(function(choice) {
            var content = node.choices[choice];
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.innerText = choice;
            a.href="#";
            a.addEventListener("click", function() {
                if (content.callback) {
                    content.callback(player);
                }
                if (content.next) {
                    echo(content.next);
                } else {
                    el.appendChild(document.createTextNode("Done."));
                }
            });
            li.appendChild(a);
            l.appendChild(li);
        })
        el.appendChild(l);
        document.getElementById("gamewrapper").appendChild(el);
    }

    window.addEventListener('load', function() {
        var next = {
            'description': 'Something happens.',
            'choices': {
                'Panic': {
                    'callback': function() {},
                    'next': null
                }
            }
        }
        var start = {
           'description': 'You meet a stranger',
           'choices': {
               'say hello': {
                   'callback': function() {},
                   'next': next
               }
           }
        };
        echo(start);
    }, false);
}();
