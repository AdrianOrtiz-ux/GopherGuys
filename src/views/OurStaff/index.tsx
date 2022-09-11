import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ImageIcon from '@mui/icons-material/Image';
import * as React from "react";
import Box from "@mui/system/Box";
import ImagePlaceholder from "../../img/imagePlaceholder.png"

export default function OurStaff() {
  
    return (
      // <div>
      //   <h3>Our Staff</h3>
      // </div>
      <>
      <Grid container spacing={2} marginLeft={1} marginRight={1}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Meet our Team
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image= {ImagePlaceholder}
                alt="green iguana"
                style={{height: "auto", width: "200px", margin:"auto"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Position
                </Typography>
              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image= {ImagePlaceholder}
                alt="green iguana"
                style={{height: "auto", width: "200px", margin:"auto"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Position
                </Typography>
              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image= {ImagePlaceholder}
                alt="green iguana"
                style={{height: "auto", width: "200px", margin:"auto"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Position
                </Typography>
              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image= {ImagePlaceholder}
                alt="green iguana"
                style={{height: "auto", width: "200px", margin:"auto"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Position
                </Typography>
              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image= {ImagePlaceholder}
                alt="green iguana"
                style={{height: "auto", width: "200px", margin:"auto"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Position
                </Typography>
              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image= {ImagePlaceholder}
                alt="green iguana"
                style={{height: "auto", width: "200px", margin:"auto"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Position
                </Typography>
              </CardContent>
          </Card>
        </Grid>


        
      </Grid>
</>

    );
  }
