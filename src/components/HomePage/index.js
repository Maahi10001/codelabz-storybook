import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardComponent from "../util/CodelabCard/index";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Chip } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { Checkbox } from "@material-ui/core";
// import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { userList } from "./userList";
import useStyles from "./styles";

function HomePage({ background = "white", textColor = "black" }) {
  const classes = useStyles();
  const [value, setValue] = useState(2);
  // const trendingTags = ["javascript", "react", "html", "css"];
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
  return (
    <Card
      className={classes.wrapper}
      style={{ background: background }}
      data-testId="homepage"
    >
      <div className={classes.sideBody}>
      <Grid
          container
          className={classes.sideCard}
          alignContent="center"
          direction="column"
          style={{
            width: "100%",
            overflow: "auto",
            maxHeight: "25rem",
            borderRadius: "10px",
          }}
          data-testId="homepagePopularEventSidebar"
        >
<Grid item>
            <Typography
              variant="h6"
              gutterBottom
              style={{ marginBottom: "1rem", color: textColor }}
            >
              Main Menu
            </Typography>
          </Grid>
          <Grid container alignItems="left">
            <List
              component="nav"
              aria-label="mailbox folders"
              style={{ width: "100%" }}
            >
              <ListItem button onClick={"#"}>
                <ListItemText primary="Home" />
              </ListItem>
              <Divider />
              <ListItem button  divider  onClick={"#"}>
                <ListItemText primary="Menu" />
              </ListItem>
              <ListItem button onClick={"#"}>
                <ListItemText style={{ fontWeight: 600 }} primary="#html" />
              </ListItem>
              <Divider light />
              <ListItem button onClick={"#"}>
                <ListItemText primary="Terms of Use" />
              </ListItem>
              <Divider />
              <ListItem button onClick={"#"}>
                <ListItemText primary="Contact us" />
              </ListItem>
              <Divider />
              <ListItem button onClick={"#"}>
                <ListItemText primary="Help?" />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.sideCard}
          alignContent="center"
          direction="column"
          style={{
            width: "100%",
            overflow: "auto",
            maxHeight: "25rem",
            borderRadius: "10px",
          }}
          data-testId="homepagePopularEventSidebar"
        >
<Grid item>
            <Typography
              variant="h6"
              gutterBottom
              style={{ marginBottom: "1rem", color: textColor }}
            >
              Popular Tags
            </Typography>
          </Grid>
          <Grid container alignItems="left">
            <List
              component="nav"
              aria-label="mailbox folders"
              style={{ width: "100%" }}
            >
              <ListItem button onClick={"#"}>
                <ListItemText primary="#javascript" />
              </ListItem>
              <Divider />
              <ListItem button  divider  onClick={"#"}>
                <ListItemText primary="#react" />
              </ListItem>
              <ListItem button onClick={"#"}>
                <ListItemText style={{ fontWeight: 600 }} primary="#html" />
              </ListItem>
              <Divider light />
              <ListItem button onClick={"#"}>
                <ListItemText primary="#css" />
              </ListItem>
              <Divider />
              <ListItem button onClick={"#"}>
                <ListItemText primary="#webdev" />
              </ListItem>
              <Divider />
              <ListItem button onClick={"#"}>
                <ListItemText primary="#beginners" />
              </ListItem>
              <Chip
                label={"See All"}
                style={{
                  width: "90%",
                  backgroundColor: "#00000",
                  marginLeft: "5%",
                }}
              ></Chip>
            </List>
          </Grid>
        </Grid>
      </div>
      <div className={classes.mainBody} data-testId="homepageMainBody">
        <Grid container className={classes.sort}>
          <BottomNavigation
            showLabels
            className={classes.sortedList}
            value={value}
            // onChange={handleChange}
            data-testId="sortByTime"
          >
            <BottomNavigationAction label="Week" />
            <BottomNavigationAction
              label="Month"
              style={{ fontSize: "2rem" }}
            />
            <BottomNavigationAction label="Year" />
            <BottomNavigationAction label="Latest" />
          </BottomNavigation>
        </Grid>

        {userList.persons.map((person) => (
          <CardComponent
            title={person.title}
            tags={person.tags}
            profilePic={person.profilePic}
            org={person.org}
          />
        ))}
      </div>
      <div className={classes.sideBody}>
        <Grid
          container
          className={classes.sideCard}
          alignContent="center"
          direction="column"
          style={{ padding: "1rem", borderRadius: "10px" }}
          data-testId="homepageUpcomingEventSidebar"
        >
          <Grid item>
            <Typography
              variant="h6"
              gutterBottom
              style={{ marginBottom: "1rem", color: textColor }}
            >
              Upcoming Events
            </Typography>
          </Grid>
          <Grid container alignItems="left">
            <List
              component="nav"
              aria-label="mailbox folders"
              style={{
                width: "100%",
                overflow: "auto",
                maxHeight: "25rem",
              }}
            >
              <ListItem button>
                <ListItemText primary="Game Dev Digest — Issue #83 - How and Why" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="What's new and special in Create Go App CLI v1.7.0?" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Google’s Termination of Dr. Mitchell, Clubhouse Security, Low-Code Tools, & more on DevNews!" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="How to start a programming blog?" />
              </ListItem>
              <Chip
                label={"See All"}
                style={{
                  width: "90%",
                  backgroundColor: "#00000",
                  marginLeft: "5%",
                }}
              ></Chip>
            </List>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.sideCard}
          alignContent="center"
          direction="column"
          style={{ padding: "1rem", borderRadius: "10px" }}
          data-testId="homepageDiscussionSidebar"
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginBottom: "1rem", color: textColor }}
          >
            News feed
          </Typography>
          <Grid container alignItems="left">
            <List
              component="nav"
              aria-label="mailbox folders"
              style={{
                width: "100%",
                overflow: "auto",
                maxHeight: "25rem",
                color: textColor,
              }}
            >
              <ListItem button>
                <ListItemText primary="Go/JS/PHP Software engineer looking for new opportunities" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="FREE COURSE, this weekend only: Ship better code faster" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Live-Coding on YouTube continues tomorrow" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="MEAN / MERN Stack 100+ Learning Resources {FREE}" />
              </ListItem>
              <Chip
                label={"See All"}
                style={{
                  width: "90%",
                  backgroundColor: "#00000",
                  marginLeft: "5%",
                }}
              ></Chip>
            </List>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}

export default HomePage;
