import { Link } from "react-router-dom";
import classes from "./LeftContent.module.scss";
import profilePic from "../../../assets/images/profileImg1.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LayersIcon from "@mui/icons-material/Layers";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import HighlightIcon from "@mui/icons-material/Highlight";
import SeeMoreSeeLess from "./seeMore/SeeMoreSeeLess";

const LeftContent = () => {
  return (
    <div className={classes.leftContent}>
      <Link to="/">
        <div className={classes.leftContentTitle}>Social Media App</div>
      </Link>
      <Link to="/profile">
        <div className={classes.leftContentHeader}>
          <img src={profilePic} className={classes.profilePicture} alt=""></img>
          <strong> Damir Denisia</strong>
        </div>
      </Link>

      <List className={classes.list}>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>
        <Link to="/chat">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TelegramIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteBorderIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GroupsIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StoreIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <OndemandVideoIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="Watch" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HistoryIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="Memories" />
          </ListItemButton>
        </ListItem>
      </List>

      <SeeMoreSeeLess>
        <hr className={classes.leftContentHr}></hr>
        <List className={classes.list}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LayersIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Favourites" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SportsEsportsIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Play Games" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BloodtypeIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Blood Donations" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VolunteerActivismIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Emotional Healt" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HighlightIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Recent ad activity" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PhotoSizeSelectActualIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Ads Manager" />
            </ListItemButton>
          </ListItem>
        </List>
      </SeeMoreSeeLess>
    </div>
  );
};

export default LeftContent;
