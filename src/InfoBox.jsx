/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {

    const INIT_URL ="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1611856862210-2482401565a3?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1519439248688-5ad37f017df5?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    < CardMedia
                        sx={{ height: 140 }}
                        image= {
                            info.humidity > 80 ? RAIN_URL 
                            : info.temp > 15 ? HOT_URL 
                            : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent style={{paddingBottom : "0px"}}>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city } {
                            info.humidity > 80 ? <ThunderstormIcon/> 
                            : info.temp > 15 ? <WbSunnyIcon/>  
                            : <AcUnitIcon/> 
                        }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Tempreture = {info.temp}&deg;C</p>
                            <p>Himudity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels Like = {info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}