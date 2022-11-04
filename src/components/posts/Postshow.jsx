import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import getPostData from "../../api/PostShow_Api";

const PostShow = () => {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getPostData(id).then((data) => {
      setPosts(data);
    });
  }, [id]);

  return (
    <Grid container spacing={0.5} sx={{ m: 15 }}>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 650 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              image={posts.image}
              alt="no image attached"
            />
            <hr />
            <Typography gutterBottom variant="h5" component="div">
              Title: {posts.title}
            </Typography>
            <Typography variant="body4" color="text.secondary">
              Description:
              <Container
                dangerouslySetInnerHTML={{ __html: posts.content }}
              ></Container>
            </Typography>
          </CardActionArea>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PostShow;
