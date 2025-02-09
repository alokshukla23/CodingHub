import React from 'react'; // Use ES6 import syntax
import './MainPage.css';
import Card from '../components/Card';

const image1 = require('../assest/Dear Zindagi.png');
const image2 = require('../assest/Brave.png');
const image3 = require('../assest/Moana.png');
const image4 = require('../assest/Mulan.png');
const image5 = require('../assest/Malala.png');
const image6 = require('../assest/Soul Surfer.png');
const image7 = require('../assest/Beckham.png');
const image8 = require('../assest/Into the Wild.png');
const image9 = require('../assest/The Pursuit OF HappyNess.png');
const image10 = require('../assest/The Intouchables.png');

const movies = [
  {
    poster: image1,
    title: "Dear Zindagi",
    year: "2016",
    duration: "2h 31m",
    genre: "Drama, Romance",
    description: "Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections",
    likes: 20,
    dislikes: 0,
  },
  {
    poster: image2,
    title: "Brave",
    year: "2012",
    duration: "1h 33m",
    genre: "Adventurous, Comedy",
    description: "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse",
    likes: 1,
    dislikes: 1,
  },
  {
    poster: image3,
    title: "Moana",
    year: "2016",
    duration: "1h 47m",
    genre: "Adventurous, Comedy",
    description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
    likes: 27,
    dislikes: 0,
  },
  {
    poster: image4,
    title: "Mulan",
    year: "1918",
    duration: "1h 27m",
    genre: "Adventurous, Comedy",
    description: "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process.",
    likes: 23,
    dislikes: 0,
  },
  {
    poster: image5,
    title: "He Named Me Malala",
    year: "2015",
    duration: "1h 28m",
    genre: "Biography, Documentary",
    description: "A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for speaking out on girls' education, followed by the aftermath, including her speech to the United Nations.",
    likes: 2,
    dislikes: 0,
  },
  {
    poster: image6,
    title: "Soul Surfer",
    year: "2011",
    duration: "1h 52m",
    genre: "Drama,Biography, Family",
    description: "Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack",
    likes: 12,
    dislikes: 0,
  },
  {
    poster: image7,
    title: "Bend It Like Beckham",
    year: "2002",
    duration: "1h 52m",
    genre: "Comedy, Drama & Romance",
    description: "Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football.",
    likes: 23,
    dislikes: 0,
  },
  {
    poster: image8,
    title: "Into The Wild",
    year: "2007",
    duration: "2h 28m",
    genre: "Adventure, Biography, Drama",
    description: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
    likes: 42,
    dislikes: 0,
  },
  {
    poster: image9,
    title: "The Pursuit OF HappyNess",
    year: "2006",
    duration: "1h 57m",
    genre: "Drama,Biography",
    description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    likes: 82,
    dislikes: 0,
  },
  {
    poster: image10,
    title: "The Intouchables",
    year: "2011",
    duration: "1h 52m",
    genre: "Drama,Biography,",
    description: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver",
    likes: 75,
    dislikes: 0,
  },
];


const MainPage = () => {
  return (
    <div className="main-page">
      <div className="content">
        <h2>Watch</h2>
        <div className="card-list">
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Use default export
export default MainPage;
