import { Container } from '@mui/material';


export default function Hero () {
const herostyles = {
  border: "1px solid black",
  height: "400px",
  width: "100%",

}
  return(
    <Container sx={herostyles}>
      <div>
        <span>test</span>
      </div>
    </Container>
  )
}