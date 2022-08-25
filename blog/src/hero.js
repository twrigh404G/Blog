import { Container } from '@mui/material';


export default function Hero () {
const herostyles = {
  border: "1px solid black",
  height: "400px",
  padding: "0px",


}
  return(
    <Container sx={herostyles}>
      <div>
        <span>test</span>
      </div>
    </Container>
  )
}