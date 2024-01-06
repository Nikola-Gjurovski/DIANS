import axios from 'axios'
export const login=async(email,password)=>{
    try{
        const res=await axios({
    method:'POST',
    url:'http://127.0.0.1:6100/api/v1/users/login',
    data:{
        email,
        password
    }

    });
    if(res.data.status==='success'){
        
        window.setTimeout(()=>{
            location.assign('/')
        },1500)
    }
}
    
    catch(err){
        res.status(500).json({ error: 'Failed to fetch ' });
    }

}
export const logout=async()=>{
    try{
    const res=await axios({
        method:'GET',
        url:'http://127.0.0.1:6100/api/v1/users/logout'
      })
      if(res.data.status==='success'){
        location.reload(true)
      }
    }
    catch(err){
        res.status(500).json({ error: 'Failed to fetch '});
    }
}
export const signUp=async(name,email,password,passwordConfirm)=>{
    try{
        const res=await axios({
    method:'POST',
    url:'http://127.0.0.1:6100/api/v1/users/signup',
    data:{
        name,
        email,
        password
        
    }

    });
    if(res.data.status==='success'){

        window.setTimeout(()=>{
            location.assign('/')
        },1500)
    }
}
    
    catch(err){
        res.status(500).json({ error: 'Failed to fetch wineries' });
    }

}