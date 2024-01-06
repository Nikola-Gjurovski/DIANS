import axios from 'axios'
export const getWineries=async()=>{
    try{
    const res=await axios({
        method:'GET',
        url:'http://127.0.0.1:6100/api/v1/wineries'
      })
      if(res.data.status==='success'){
        location.reload(true)
      }
    }
    catch(err){
        res.status(500).json({ error: 'Failed to fetch '});
    }
}
export const getWinery=async(id)=>{
    try{
    const res=await axios({
        method:'GET',
        url:`http://127.0.0.1:6100/api/v1/wineries/${id}`
      })
      if(res.data.status==='success'){
        location.reload(true)
      }
    }
    catch(err){
        res.status(500).json({ error: 'Failed to fetch '});
    }
}
