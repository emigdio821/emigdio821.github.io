import { useEffect, useState } from "react";
import { getNowPlaying } from "lib/spotify";

interface NowPlayingState {
  error?: string;
  isPlaying: boolean;
  song?: {
    album: {
      images: {
        url: string;
      }[];
    };
    name: string;
    artists: {
      name: string;
    }[];
  };
}

const initialState: NowPlayingState = {
  isPlaying: false,
};

export default function useNowPlaying() {
  const [playing, setPlaying] = useState<NowPlayingState>(initialState);

  useEffect(() => {
    const nowPlaying = async () => {
      const response = await getNowPlaying();
      if (response.status === 204 || response.status > 400) {
        setPlaying(initialState);
      } else {
        const res = await response.json();

        if (res.error) {
          setPlaying({ isPlaying: false, error: res.error.message });
        } else if (res.item !== null) {
          setPlaying({ isPlaying: true, song: res.item });
        } else {
          setPlaying(initialState);
        }
      }
    };
    nowPlaying();
  }, []);

  return playing;
}
