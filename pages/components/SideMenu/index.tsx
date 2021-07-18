import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Add from "@material-ui/icons/Add";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    paper: {
      height: "100%",
    },
  })
);

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Проекты" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <div className="cell_difference">
                  <div className="cell_difference__status_marker_wrapper">
                    <div className="cell_difference__status_marker cell_difference__status_marker__red"></div>
                  </div>
                </div>
              </ListItemIcon>

              <ListItemText primary="Streampunk" secondary="defense 21" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <div className="cell_difference">
                  <div className="cell_difference__status_marker_wrapper">
                    <div className="cell_difference__status_marker cell_difference__status_marker__yellow"></div>
                  </div>
                </div>
              </ListItemIcon>

              <ListItemText primary="WorldWar" secondary="clicker 12" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <div className="cell_difference">
                  <div className="cell_difference__status_marker_wrapper">
                    <div className="cell_difference__status_marker cell_difference__status_marker__green"></div>
                  </div>
                </div>
              </ListItemIcon>

              <ListItemText primary="Other" secondary="clicker 12" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Add new" />
        </ListItem>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </Paper>
  );
}
