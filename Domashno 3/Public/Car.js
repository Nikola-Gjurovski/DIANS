export const car=(distance)=>{
    const averageCarSpeedKmph = 30;
    const timeByCar = distance / averageCarSpeedKmph;
    const hours = Math.floor(timeByCar);


    const minutes = Math.round((timeByCar - hours) * 60);

      

// Calculate time for travel on foot
    if(hours!=0)
      document.getElementById("car").innerHTML = `🚗 ${hours} часа ${minutes} минути `
    else
    document.getElementById("car").innerHTML = `🚗  ${minutes} минути `
}