export const validateUser=(email,password)=>{
    const emailvalidate=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordvalidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailvalidate) return "email is invalid";
    if(!passwordvalidate) return "password is invalid";
    else return null;
  
  }