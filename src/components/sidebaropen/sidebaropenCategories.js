import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";

import YouTube from "../../assests/svg-youtube.svg";
import YouTubeStudio from "../../assests/svg-youtube-studio.svg";
import YouTubeMusic from "../../assests/svg-youtube-music.svg";
import YouTubeKids from "../../assests/svg-youtube-kids.svg";
import YouTubeTV from "../../assests/svg-youtube-tv.svg";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

const categories = [
  {
    icons: <HomeOutlinedIcon />,
    activeIcons: <HomeIcon />,
    name: "Home",
  },
  {
    icons: <ExploreOutlinedIcon />,
    activeIcons: <ExploreIcon />,
    name: "Explore",
  },
  {
    icons: <SubscriptionsOutlinedIcon />,
    activeIcons: <SubscriptionsIcon />,
    name: "Subscriptions",
  },
  {
    icons: <VideoLibraryOutlinedIcon />,
    activeIcons: <VideoLibraryIcon />,
    name: "Library",
  },
  {
    icons: <HistoryOutlinedIcon />,
    activeIcons: <HistoryOutlinedIcon />,
    name: "History",
  },
  {
    icons: <SlideshowOutlinedIcon />,
    activeIcons: <SlideshowOutlinedIcon />,
    name: "Your Videos",
  },
  {
    icons: <WatchLaterOutlinedIcon />,
    activeIcons: <WatchLaterIcon />,
    name: "Watch Later",
  },
  {
    icons: <ThumbUpOutlinedIcon />,
    activeIcons: <ThumbUpIcon />,
    name: "Liked Videos",
  },
  {
    icons: <WhatshotOutlinedIcon />,
    name: "Trending",
  },
  {
    icons: <MusicNoteOutlinedIcon />,
    name: "Music",
  },
  {
    icons: <MovieOutlinedIcon />,
    name: "Films",
  },
  {
    icons: <SensorsOutlinedIcon />,
    name: "Live",
  },
  {
    icons: <SportsEsportsOutlinedIcon />,
    name: "Gaming",
  },
  {
    icons: <NewspaperOutlinedIcon />,
    name: "News",
  },
  {
    icons: <EmojiEventsOutlinedIcon />,
    name: "Sport",
  },
  {
    icons: <LightbulbOutlinedIcon />,
    name: "Learning",
  },
  {
    icons: <CheckroomOutlinedIcon />,
    name: "Fashion & Beauty",
  },
  {
    icons: YouTube,
    name: "YouTube Premium",
  },
  {
    icons: YouTubeStudio,
    name: "Creator Studio",
  },
  {
    icons: YouTubeMusic,
    name: "YouTube Music",
  },
  {
    icons: YouTubeKids,
    name: "YouTube Kids",
  },
  {
    icons: YouTubeTV,
    name: "YouTube TV",
  },
  {
    icons: <SettingsOutlinedIcon />,
    name: "Settings",
  },
  {
    icons: <FlagOutlinedIcon />,
    name: "Report History",
  },
  {
    icons: <HelpOutlineOutlinedIcon />,
    name: "Help",
  },
  {
    icons: <FeedbackOutlinedIcon />,
    name: "Send feedback",
  },
];

export default categories;
