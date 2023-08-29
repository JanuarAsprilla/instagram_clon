import logo from './logo.svg';
import './App.css';

function App() {


  const posts = [
    {
      id: 1,
      username: 'usuario1',
      imageUrl: 'https://4.bp.blogspot.com/-5F3R6yEEE_E/U9Dh_D1qcEI/AAAAAAAAKWE/0b3AK8DfGmc/s1600/instagram-verano-corazo%CC%81n.jpg',
      caption: '¡Disfrutando de un día soleado! ☀️ #Verano',
      likes: 120,
      comments: 5,
    },

    {
      id: 2,
      username: 'usuario2',
      imageUrl: 'url_de_la_imagen1.jpg',
      caption: 'Explorando nuevos lugares. 🌍 #Aventuras',
      likes: 120,
      comments: 5,
    },

    {
      id: 3,
      username: 'usuario3',
      imageUrl: 'url_de_la_imagen1.jpg',
      caption: '¡Disfrutando! ',
      likes: 120,
      comments: 5,
    },
    {
      id: 4,
      username: 'usuario4',
      imageUrl: 'url_de_la_imagen1.jpg',
      caption: '¡Disfrutando de un día soleado! ☀️ #Verano',
      likes: 120,
      comments: 5,
    },
    {
      id: 5,
      username: 'usuario5',
      imageUrl: 'url_de_la_imagen1.jpg',
      caption: '¡Disfrutando de un día soleado! ☀️ #Verano',
      likes: 120,
      comments: 5,
    },
    {
      id: 6,
      username: 'usuario6',
      imageUrl: 'url_de_la_imagen1.jpg',
      caption: '¡Disfrutando de un día soleado! ☀️ #Verano',
      likes: 120,
      comments: 5,
    },
    {
      id: 7,
      username: 'usuario7',
      imageUrl: 'url_de_la_imagen1.jpg',
      caption: '¡Disfrutando de un día soleado! ☀️ #Verano',
      likes: 120,
      comments: 5,
    },
    {
      id: 8,
      username: 'usuario8',
      imageUrl: 'url_de_la_imagen1.jpg',
      caption: '¡Disfrutando de un día soleado! ☀️ #Verano',
      likes: 120,
      comments: 5,
    },
    {
      id: 9,
      username: 'usuario9',
      imageUrl: 'url_de_la_imagen1.jpg',
      caption: '¡Disfrutando de un día soleado! ☀️ #Verano',
      likes: 120,
      comments: 5,
    },
    {
      id: 10,
      username: 'usuario10',
      imageUrl: 'url_de_la_imagen1.jpg',
      caption: '¡Disfrutando de un día soleado! ☀️ #Verano',
      likes: 120,
      comments: 5,
    },
  ]
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <img src={post.imageUrl} alt={`Post de ${post.username}`} />
          <p className="caption">{post.caption}</p>
          <div className="likes-comments">
            <span className="likes">❤️ {post.likes}</span>
            <span className="comments">💬 {post.comments}</span>
          </div>
        </div>
      ))}
    </div>
  );
};


export default App;
