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

const categories = [
  {
    icons: <HomeOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <HomeIcon style={{ fontSize: 27 }} />,
    name: "Home",
  },
  {
    icons: <ExploreOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <ExploreIcon style={{ fontSize: 27 }} />,
    name: "Explore",
  },
  {
    icons: <SubscriptionsOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <SubscriptionsIcon style={{ fontSize: 27 }} />,
    name: "Subscriptions",
  },
  {
    icons: <VideoLibraryOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <VideoLibraryIcon style={{ fontSize: 27 }} />,
    name: "Library",
  },
  {
    icons: <HistoryOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <HistoryOutlinedIcon style={{ fontSize: 27 }} />,
    name: "History",
  },
  {
    icons: <SlideshowOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <SlideshowOutlinedIcon style={{ fontSize: 27 }} />,
    name: "Your Videos",
  },
  {
    icons: <WatchLaterOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <WatchLaterIcon style={{ fontSize: 27 }} />,
    name: "Watch Later",
  },
  {
    icons: <ThumbUpOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <ThumbUpIcon style={{ fontSize: 27 }} />,
    name: "Liked Videos",
  },
];

export default categories;
