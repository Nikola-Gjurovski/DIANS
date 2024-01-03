export const walk=(distance)=>{
    const averageCarSpeedKmph = 5;
    const timeByCar = distance / averageCarSpeedKmph;
    const hours = Math.floor(timeByCar);


    const minutes = Math.round((timeByCar - hours) * 60);

      

// Calculate time for travel on foot
    if(hours!==0)
      document.getElementById("walk").innerHTML = `🚶‍♂️ ${hours} часа ${minutes} минути `
    else
    document.getElementById("walk").innerHTML = `🚶‍♂️ ${minutes} минути `
}