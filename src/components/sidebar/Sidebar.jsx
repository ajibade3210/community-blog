import "./sidebar.css";
import {
  HelpOutline,
  RssFeed,
  Event,
  School,
  WorkOutline,
  Bookmark,
  Message,
  GroupTwoTone,
  Videocam,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <div className="sidebarListItemText">Feed</div>
          </li>
          <li className="sidebarListItem">
            <Message className="sidebarIcon" />
            <div className="sidebarListItemText">Chats</div>
          </li>
          <li className="sidebarListItem">
            <Videocam className="sidebarIcon" />
            <div className="sidebarListItemText">Video</div>
          </li>
          <li className="sidebarListItem">
            <GroupTwoTone className="sidebarIcon" />
            <div className="sidebarListItemText">Group</div>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <div className="sidebarListItemText">Bookmark</div>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <div className="sidebarListItemText">Questions</div>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <div className="sidebarListItemText">Jobs</div>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <div className="sidebarListItemText">Events</div>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <div className="sidebarListItemText">Courses</div>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
