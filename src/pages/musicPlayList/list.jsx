import React from 'react';

import './musicPL.css';

function List({ listMusic, onSelectMusic, selectedId, onLikeMusic }) {
  return (
    <div className="music-space">
      <div className="music-list">
        <div className="list-title text-strong">Most Popular</div>

        <div className="play-list">
          {
            listMusic && listMusic.length > 0 ?
            listMusic.map((music) => {
              return (
                <div className="play-item" key={music.id}>
                <div
                  className="play-block"
                  onClick={() => onSelectMusic(music.id)} // chir truyền id
                >
                  <span className="index text-strong">{music.id}</span>
          
                  <img src={music.cover} alt="My Stress" className="thumbnail" />

                  {
                  selectedId === music.id
                    ? <i className="fa-solid fa-volume-high play-icon"></i>
                    : <i className="fa-solid fa-play play-icon"></i>
                  }
          
                  <span className="music-name text-strong">{music.name}</span>
                </div>
          
                <span className="play-author">{music.artist}</span>
          
                <span className="timer">3:22</span>
          
                <i onClick={() => onLikeMusic(music.isLiked)} className={`fa-solid fa-heart ${music.isLiked ? 'liked' : ''}`}></i>
              </div>
              )
            })
            : <span>Không có bài nhạc</span>
          }
        </div>
      </div>
    </div>
  );
}

export default List;