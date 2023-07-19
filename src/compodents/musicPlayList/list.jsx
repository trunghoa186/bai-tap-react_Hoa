import React, { memo, useCallback, useEffect, useState } from 'react';

import './musicPL.css'
import Play from './play';

const allList = [
  {
    id: 1,
    name: 'ChimSau',
    cover: require('assets/image/images-1.jpg'),
    src: require('assets/music/1111TiktokVersion-MiiNaDREAMeRRIN9DREAMeRVietNam-8698041.mp3'),
    artist: 'NF Real 1',
    isLiked: false,
  },
  {
    id: 2,
    name: 'coaycuaanhay',
    cover: require('assets/image/images-2.jpg'),
    src: require('assets/music/AnhSaoVaBauTroi-TRI-7085073.mp3'),
    artist: 'NF Real 2',
    isLiked: false,
  },
  {
    id: 3,
    name: 'DontCoi',
    cover: require('assets/image/images-3.jpg'),
    src: require('assets/music/KhoVeNuCuoi-DatGDuUyen-6114344.mp3'),
    artist: 'NF Real 3',
    isLiked: false,
  },
  {
    id: 4,
    name: 'KiaBongDangAi',
    cover: require('assets/image/images-4.jpg'),
    src: require('assets/music/KiepMaHong-TLongLacKhoi-7205562.mp3'),
    artist: 'NF Real 4',
    isLiked: false,
  },
  {
    id: 5,
    name: 'LuonYeuDoi',
    cover: require('assets/image/images-5.jpg'),
    src: require('assets/music/YeuNguoiCoUocMo-buitruonglinh-8396692.mp3'),
    artist: 'NF Real 5',
    isLiked: false,
  },
]

function List(props) {
  const [selectedMusic, setSelectedMusic] = useState(allList[0]);
  const [allList, setPlayList] = useState();
  const [duration, setDuration] = useState(0);
  const[isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    setPlayList(allList.filter((m) => m.id !== selectedMusic.id));
  }, [selectedMusic.id]);

  
  const onHandleSelectedMusic = useCallback((id) => () => {
    const selected = allList.find((m) => m.id === selectedMusic.id);

    setSelectedMusic(selected);
  }, [allList]);



  // const getDurationList = (duration) => {
  //   const minutes = Math.floor(duration / 60); // Số phút
  //   const seconds = Math.floor(duration % 60); // Số giây
  
  //   const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
  //   return formattedDuration;
  // }


  return (
    <div className="music-space">
      <div className="music-list">
        <div className="list-title text-strong">Most Popular</div>
        <div className="list-sub">92 songs</div>
        {            
          allList ?.length > 0 ? allList.map((m) => (
            <ListMusic
              key={m.id} 
              name={m.name}
              cover={m.cover}
              artist={m.artist}
              src= {m.src}
            />
          )) : <p>Không có bài hát trong danh sách</p>}
    </div>
    <div className="music-playing">
        <Play
          name={selectedMusic.name}
          artist={selectedMusic.artist}
          cover={selectedMusic.cover}
          id={selectedMusic.id}
          src={selectedMusic.src}
        />
    </div>
    </div>
  );
}

export default List;
const ListMusic = ({ id, name ,cover,artist,isLike}) => {
  const [selectedMusic, setSelectedMusic] = useState(allList[0]);
  const onHandleSelectedMusic = useCallback((id) => () => {
    const selected = allList.find((m) => m.id === selectedMusic.id);

    setSelectedMusic(selected);
  }, [allList]);

  return ( 

      <div className="play-list">
            <div className="play-item" key={id}>
            <div className="play-block" onClick={onHandleSelectedMusic(id)} >
              <span className="index text-strong">{id}</span>

              <img
                src={cover}
                alt="My Stress"
                className="thumbnail"
              />

              {
                selectedMusic?.id === id
                  ? <i className="fa-solid fa-volume-high play-icon"></i>
                  : <i className="fa-solid fa-play play-icon"></i>
              } 

              <span className="music-name text-strong" >{name}</span>
            </div>

            <span className="play-author">{artist}</span>

            <span className="timer">{}</span>
            {/* getDurationList(duration) */}

            <i className={`fa-solid fa-heart ${isLike ? 'icon-like' : ''}`}></i>
          </div>
      </div>


  )
}