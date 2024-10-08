import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { NewsContext } from "../context/NewsContext.tsx";
const NewsComponent = () => {
  const { state } = useContext(NewsContext);
  const { generalNews } = state;
  const NewsCard = (props: { newsObj: any }) => {
    const { newsObj } = props;
    const { image, publishedDate, url, title, symbol, site } = newsObj;
    const date = new Date(publishedDate);
    return (
      <Card
        sx={{
          width: "100%",
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CardContent>
          <Typography color={"gray"} fontWeight={700} sx={{ margin: "8px" }}>
            {symbol} - <i>{site}</i>
          </Typography>
          <img
            src={image}
            width={150}
            height={100}
            style={{ borderRadius: "8px" }}
          />
          <a href={url} style={{ color: "gray" }}>
            <Typography color="white">{title}</Typography>
          </a>
          <i>{date.toDateString()}</i>
        </CardContent>
      </Card>
    );
  };
  return (
    <div style={{ backgroundColor: "background.default" }}>
      <Typography fontSize={24} fontWeight={700} sx={{ margin: "16px" }}>
        <i>What's new</i>
      </Typography>
      {generalNews.length > 0 && (
        <Grid container spacing={2}>
          {generalNews.slice(0, 10).map((newsObj: any) => {
            return (
              <Grid item xs={4} sx={{ overflow: "auto" }}>
                <NewsCard newsObj={newsObj} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default NewsComponent;
