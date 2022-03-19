import './styles/Home.css'
import { Button, Grid, Item} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {national_blood_crisis_text} from './text/HomePageText';
import ReactFullpage from "@fullpage/react-fullpage";

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Home = props => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
    <>
    <body className='home-body'>
      <ReactFullpage
      scrollingSpeed = {1000} 
      sectionsColor={["orange"]}
      paddingBottom = "10px"

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="slide">
                    <h3>Image</h3>
                  </div>
                  <div className="slide">
                    <h3>Image</h3>
                  </div>
                  <div className="slide">
                    <h3>Image</h3>
                  </div>
            </div>
            <div className="section">
            <Grid container spacing={2} sx = {{mb: 9}}>
              <Grid item xs={12}>
                <h1>National Blood Crisis</h1>
                <h3>{national_blood_crisis_text}</h3>
              </Grid>
              <Grid item xs={4}>
                <h1>Picture</h1>
                <Button>Read More</Button>
              </Grid>
              <Grid item xs={4}>
                <h1>Picture</h1>
                <Button>Read More</Button>
              </Grid>
              <Grid item xs={4}>
                <h1>Picture</h1>
                <Button>Read More</Button>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx = {{mb: 9}}>
              <Grid item xs={12}>
                <h1>How Blood Donations Help</h1>
              </Grid>
              <Grid item xs={8}>
                <Item>{national_blood_crisis_text}</Item>
              </Grid>
              <Grid item xs={4}>
                <h1>Video</h1>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx = {{mb: 9}}>
              <Grid item xs={12}>
                <h1>Why Host a Blood Drive</h1>
              </Grid>
              <Grid item xs={12}>
                <Item>{national_blood_crisis_text}</Item>
                <Button>Find Out How to Host a Blood Drive</Button>
              </Grid>
            </Grid>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />

      </body>
    </>
  )
}


// make this component available to be imported into any other file
export default Home