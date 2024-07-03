import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography} from '@mui/material'
import React from 'react'

const Book = () => {
  return (
    <div><Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="review">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="House Rules"
      subheader="March 02, 2010"
    />
    <CardMedia
      component="img"
      height="194"
      image="https://th.bing.com/th/id/OIP.Nibag_657_pZd7bWBV-9VQHaJJ?w=192&h=237&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      alt="I am Malala"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      House Rules (2010) is the eighteenth novel by the American author Jodi Picoult.
      The novel follows the struggle between Jacob and his family (consisting of his 
      mother, Emma, and his younger brother, Theo), the law, and his disability.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Review:</Typography>
        <Typography paragraph>
        Eighteen-year-old Jacob Hunt lives with his mother Emma and his younger brother,
        Theo. Jacob has Asperger's syndrome, then considered a form of high-functioning autism.
        Jacob lives by a highly structured schedule and feels comfortable when all of his daily 
        activities are pre-planned. Jacob thrives when he is able to engage in structured, 
        focused activities, and he particularly enjoys things that are incredibly intellectual 
        and academic. Emma is able to ensure that Jacob's anxiety and outbursts are infrequent 
        by creating her and Theo's schedules around Jacob's needs. However, this often displeases Theo.
        </Typography>
        <Typography paragraph>
        Jacob is deeply interested with forensic analysis to the point of obsession.The novel 
        begins with Jacob setting up a crime scene (in which he plays the victim) for his mother 
        to solve. Jacob is later accused of murdering his tutor, Jess Ogilvy. It is eventually 
        revealed that Theo snuck into a house that Jess was house sitting at and startled her, 
        causing her to accidentally hit her head on the sink and subsequently die.
        </Typography>
      </CardContent>
    </Collapse>
  </Card></div>
  )
}

export default Book