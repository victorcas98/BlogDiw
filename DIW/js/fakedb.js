var dbDayanne = {
    "data": [
        {
            "id": 1,
            "data": new Date(),
            "titulo": "Post1",
            "conteudo": "asdasdasdasdaddsdsdasdsdasadsadsdaadsaddaddsdasdghffgjghjfjgjhfjhjhjhjfhhjjhhjg",
            "img": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        },
        {
            "id": 2,
            "data": new Date(),
            "titulo": "Lago",
            "conteudo": "asdasdasdasdaddsdsdasdsdasadsadsdaadsaddaddsdasdghffgjghjfjgjhfjhjhjhjfhhjjhhjg",
            "img": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        },
        {
            "id": 3,
            "data": new Date(),
            "titulo": "Diamante",
            "conteudo": "asdasdasdasdaddsdsdasdsdasadsadsdaadsaddaddsdasdghffgjghjfjgjhfjhjhjhjfhhjjhhjg",
            "img": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        },

    ]
}

var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    db = dbDayanne
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-success">' + msg + '</div>');
}

function insertPost(post) {

    let novoId = db.data[db.data.length - 1].id + 1;
    let novoPost = {
        "id": novoId,
        "data": post.data,
        "titulo": post.titulo,
        "conteudo": post.conteudo,
        "img": post.img
    };

    db.data.push(novoPost);
    displayMessage("Post criado");

    localStorage.setItem('db', JSON.stringify(db));
}
