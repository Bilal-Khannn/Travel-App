import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiTwotoneStar } from "react-icons/ai";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  // for stars
  const ar = [1, 2, 3, 4, 5];

  return (
    <Card
      sx={{
        height: "210px",
        width: "240px",
        borderRadius: "10%",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 20 }}
          color="text.secondary"
          gutterBottom
          className="flex"
        >
          {ar.map((item) => {
            return <AiTwotoneStar />;
          })}
        </Typography>

        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          eligendi pariatur ea, nihil inventore repudiandae?
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Typography sx={{ marginTop: "1rem" }}>John Doe</Typography>
      </CardContent>
    </Card>
  );
}
