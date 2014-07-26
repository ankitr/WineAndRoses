// var start = {
//    'description': 'You meet a stranger',
//    'choices': {
//        'say hello': {
//            'callback': function() {},
//            'pointer': another_node
//        }
//    }
// }


function echo(node) {
    var el = document.createElement("div");
    var text = document.createElement("p");
    text.innerText = node.description;
    el.appendChild(text);

    var l = document.createElement("ul");
    node.choices.forEach(function(choice) {
        var content = node.choices[choice;
        var li = document.createElement("li");
        li.innerText = choice;
        li.href = "#";
        li.addEventListener("click", function() {
            content.callback();
            echo(content.pointer);
        });
        l.appendChild(li);
    })
    document.getElementById("gamewrapper").appendChild(el);
}

window.addEventListener('load', function() {
    echo({
        'text': 'this is a test.'
    });
}, false)
