import React, { useRef } from 'react';
import './Home.css';
import PostCard from './PostCard';// OR define inline as shown earlier
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const videoRefs = useRef([]);

  const posts = [
    {
      id: 1,
      type: 'image',
      username: 'Kubrick',
      userImg: 'https://filmfesttucson.org/wp-content/uploads/2021/08/Kubrick2-Copyright-All-Star-Picture-Library-Alamy-Stock-Photo-scaled.jpg',
      postImg: '../img/1351253.png',
      caption: 'Sunset vibes on the beach 🌅',
    },
    {
      id: 2,
      type: 'video',
      username: 'mountain_hiker',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaZA-8fO2yayPa0QrW1AlyNgdNnmP6SNrsg&s',
      postImg: '/videos/nature.mp4',
      caption: 'Mountains are calling 🏔️',
    }
  ];

  const stories = [
    { id: 1, username: 'paradox', avatar: '/images/arjun.jpeg' },
    { id: 2, username: 'Waste_life', avatar: '/images/devi.jpg' },
    // ... rest of stories
  ];

  const followers = [
    { id: 4, name: 'Arjun', avatar: '../followers/arjun.jpeg' },
    { id: 5, name: 'Divya', avatar: '../followers/divya.jpeg' },
    { id: 6, name: 'Prakash', avatar: '../followers/prakash.jpeg' },
    { id: 7, name: 'Meena', avatar: '../followers/meena.jpeg' },
    { id: 8, name: 'Karthik', avatar: '../followers/karthik.jpeg' }
  ];


  const handleVideoPlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  return (
    <div className="sym">
      <nav className="menu">
        <img className="insta" src="/img/instagram-text-icon.png" alt="" />
        <ul className="contents">
          <li  className='lis' style={{display:'flex'}}><img className="inst" src="/img/instagram-home-feed-icon.png" alt="Home" /><h4>Home</h4></li>
          <li className='lis' style={{display:'flex'}}><img className="inst" src="/img/instagram-search-icon.png" alt="Search" /><h4>Search</h4></li>
          <li className='lis' style={{display:'flex'}}><img className="inst" src="/img/compass.png" alt="Explore" /><h4>Explore</h4></li>
          <li className='lis' style={{display:'flex'}}><img className="inst" src="/img/instagram-reels-icon.png" alt="Reels" /><h4>Reels</h4></li>
          <li className='lis' style={{display:'flex'}}><img className="inst" src="/img/instagram-dm-direct-message-icon.png" alt="Messages" /><h4>Messages</h4></li>
          <li className='lis' style={{display:'flex'}}><img className="inst" src="/img/heart.png" alt="Notifications" /><h4>Notifications</h4></li>
          <li className='lis' style={{display:'flex'}}><img className="inst" src="/img/instagram-add-new-post-icon.png" alt="Create" /><h4>Create</h4></li>
          <li className='lis' style={{display:'flex'}}><img className="inst" src="/img/social-media.png" alt="Dashboard" /><h4>Dashboard</h4></li>
          <li className='lis' style={{display:'flex'}}><img className="inst" src="/img/grumpy_monkey.jpg" alt="Profile" /><h4>Profile</h4></li>
        </ul>
      </nav>

      <div>
        <div className="center-content">
          <div className="stories">
            {stories.map((story) => (
              <div className="story" key={story.id}>
                <img src={story.avatar} alt={story.username} />
                <p>{story.username}</p>
              </div>
            ))}
          </div>

          <div className="posts">
            {posts.map((post, i) => (
              <PostCard
                key={post.id}
                post={post}
                index={i}
                setVideoRef={(el) => (videoRefs.current[i] = el)}
                onPlay={handleVideoPlay}
              />
            ))}
          </div>
        </div>

        <div className="column2">
        <div className="profile-section">
    <img src="../img/grumpy_monkey.jpg" alt="Your Profile" className="profile-pic" />
    <p>
    <span style={{ color: 'black' }}>ignoredphilosophy</span> 
    <span style={{ color: '#808080',display:'inline-block' }}>i am you</span> 
    </p>
    <a href="">switch</a>
    </div>
    
    <h3 style={{color:'black'}}>Suggested Followers</h3>
  {followers.map((follower) => (
    <div className="follower" key={follower.id}>
      <div className="follower-info" style={{color:'black'}} >
        <img src={follower.avatar} alt={follower.name} />
        <p>
    <span style={{ color: 'black' }}>{follower.name}</span> 
    <span style={{ color: '#808080',display:'inline-block' }}>i am you</span> 
       </p>
      </div>
      <a className="follow-btn" onClick={() => alert(`You followed ${follower.name}`)}>
        Follow
      </a>
    </div>
  ))}

                    
        </div>
      </div>
    </div>
  );
};

export default Home;
