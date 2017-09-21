var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: src = 'one.jpeg',
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: src = 'one.jpeg',
    },
    {
        id: 3,
        title: 'Rocky',
        desc: 'Film o bokserze',
        img: src = 'one.jpeg',
    },

];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {}),
    );
});

var element =
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
    React.createElement('img'),
  );



ReactDOM.render(element, document.getElementById('app'));
