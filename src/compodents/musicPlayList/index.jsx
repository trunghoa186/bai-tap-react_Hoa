import React, { useState } from 'react';
import Play from './play';
import List from './list';

const listMusic = [
  {
    id: 1,
    name: 'ChimSau',
    cover: require('assets/image/images-1.jpg'),
    src: require('assets/music/1111TiktokVersion-MiiNaDREAMeRRIN9DREAMeRVietNam-8698041.mp3'),
    artist: 'NF Real music',
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
    cover: require('assets//image/images-3.jpg'),
    src: require('assets/music/KhoVeNuCuoi-DatGDuUyen-6114344.mp3'),
    artist: 'NF Real 3',
    isLiked: false,
  },
  {
    id: 4,
    name: 'KiaBongDangAi',
    cover: require('assets//image/images-4.jpg'),
    src: require('assets/music/KiepMaHong-TLongLacKhoi-7205562.mp3'),
    artist: 'NF Real 4',
    isLiked: false,
  },
  {
    id: 5,
    name: 'LuonYeuDoi',
    cover: require('assets//image/images-5.jpg'),
    src: require('assets/music/YeuNguoiCoUocMo-buitruonglinh-8396692.mp3'),
    artist: 'NF Real 5',
    isLiked: false,
  },

]

function PlayList(props) {
  const [selectedMusic, setSelectedMusic] = useState(listMusic[0]);
  const [selectedLikeMusic, setSelectedLikeMusic] = useState(listMusic[0].isLiked);
  
  const onSelectMusic = (selectedId) => { // nhận selectedId
    const selected = listMusic.find((item) => item.id === selectedId)
    setSelectedMusic(selected);
  }

  const onLikeMusic = () => {
    
  }
  

  const onNextMusic = () => {
    const currentIndexMusic = listMusic.findIndex((item) => item.id === selectedMusic.id);
    if (currentIndexMusic === listMusic.length - 1) {
      setSelectedMusic(listMusic[0])
    } else {
      setSelectedMusic(listMusic[currentIndexMusic + 1])
    }
  }

  const onPrevMusic = () => {
    const currentIndexMusic = listMusic.findIndex((item) => item.id === selectedMusic.id);
    if (currentIndexMusic === 0) {
      setSelectedMusic(listMusic[listMusic.length - 1])
    } else {
      setSelectedMusic(listMusic[currentIndexMusic - 1])
    }
  }

  return (
    <div className="d-flex">
      <List 
        listMusic={listMusic} 
        onSelectMusic={onSelectMusic} 
        selectedId={selectedMusic.id} 
        onLikeMusic={onLikeMusic}
        />

      {/* <Play music={selectedMusic} /> */}
      <Play
        name={selectedMusic.name}
        artist={selectedMusic.artist}
        cover={selectedMusic.cover}
        id={selectedMusic.id}
        src={selectedMusic.src}
        onNextMusic={onNextMusic}
        onPrevMusic={onPrevMusic}
      />

    </div>
  );
}

export default PlayList;