// import './App.css'
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// // import Alert from '@mui/material/Alert';
// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";



// function App() {
//   let handleClick = () => {
//     console.log("button was clicked !")
//   }
//   return (
//     <>
//       <h1>Material UI Demo</h1>
//       <Button variant="contained" onClick={handleClick}>Click me !</Button>
//       <Button variant="Disabled" onClick={handleClick}>Click me 2 !</Button>
//       <Button variant="contained" color='error' size='large' onClick={handleClick}>Click me 3 !</Button>
//       <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
//       <Alert severity="error">Delete option is given !</Alert>
//     </>
//   )
// }



// function App() {
//   return (
//     <>
//       <SearchBox/>
//       <InfoBox/>
//     </>
//   )
// }

function App() {
  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App;