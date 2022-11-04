import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import getPostData from "../../api/PostList_Api";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostData().then((data) => {
        setPosts(data);
    });
  }, []);

  return (
    <Grid container spacing={0.5} sx={{ m: 5 }}>
      {posts.map((post, index) => {
        return (
          <Grid item xs={4} key={index}>
            <Card sx={{ maxWidth: 350, boxShadow: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={post.image}
                  alt="no image attached"
                />
                <hr />
                <Typography gutterBottom variant="h5" component="div">
                  Title: {post.title}
                </Typography>
                <Typography variant="body4" color="text.secondary">
                  <Container
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></Container>
                </Typography>
                <Link to={"/PostShow/" + post.id}>Show</Link>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
