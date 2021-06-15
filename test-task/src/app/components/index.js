import { Card, makeStyles } from "@material-ui/core";
import React from "react";
import { data } from "./data";
import Header from "./home/header/header";
import Content from "./home/content/content";
import Page_content from "./home/page_content/page_content";
import "./style.less";

const useStyles = makeStyles({
  header: {
    backgroundColor: "lightgrey",
  },
});

const Index = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.header}>
      <Card>
        <Header data={data} />
      </Card>
      <Card>
        <Content data={data} />
      </Card>
      <Card>
        <Page_content data={data} />
      </Card>
    </Card>
  );
};

export default Index;
