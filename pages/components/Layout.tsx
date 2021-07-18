/**
 * @description Основная масстер страница
 */
import React, { ReactNode } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useScrollTrigger } from "@material-ui/core";
import AppBar from "./AppBar";
import SideMenu from "./SideMenu";

type Props = {
  window?: () => Window;
  children?: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

function ScrollTop(props: Props) {
  const { children, window } = props;

  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const Layout = (props: Props) => {
  return (
    <div>
      <div id="back-to-top-anchor" />
      <AppBar />
      <div className="basicLayout">
        <div className="aside">
          <SideMenu></SideMenu>
        </div>
        <div className="article">{props.children}</div>
      </div>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

/* Layout.propTypes = {
  t: PropTypes.func.isRequired,
} */

export default Layout;
