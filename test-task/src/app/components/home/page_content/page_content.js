import React from "react";
import { Box, Card, Typography } from "@material-ui/core";

const Page_content = (props) => {
  const { data } = props;
  const { home } = data;
  const { content } = home;

  return (
    <div>
      <Card>
        {content.map((el, index) => {
          const { title, block, subtitle, launches } = el;
          return (
            <>
              <Card>
                <Typography>{title}</Typography>
                <Box key={index} style={{ display: "flex" }}>
                  {block.map((el, index) => (
                    <Box>
                      <img
                        style={{ width: "25rem", height: "17rem" }}
                        src={el.src}
                        alt="spacex"
                        key={index}
                      />
                      <Typography>{el.date}</Typography>
                      <Typography>{el.info}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
              <Card>
                <Typography>{subtitle}</Typography>
                <Box>
                  {launches.map((el, index) => (
                    <Box key={index}>
                      <img
                        style={{ width: "30rem", height: "20rem" }}
                        src={el.img}
                        alt="spacex"
                      />
                      <Typography>{el.date}</Typography>
                      <Typography>{el.info}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </>
          );
        })}
      </Card>
    </div>
  );
};

export default Page_content;

// <Box key={index}>
//   {img.map((el, index) => {
//     const { img1, img2, img3 } = el;
//     console.log(img);
//     return (
//       <Box key={index} style={{ display: "flex" }}>
//         <img style={{ width: "25rem" }} src={img1} alt="" />
//         <img style={{ width: "25rem" }} src={img2} alt="" />
//         <img style={{ width: "25rem" }} src={img3} alt="" />
//       </Box>
//     );
//   })}
// </Box>
