import { useState } from "react";
// const [isvisible,setisvisible]=useState(false);

const Accordian = ({ name, pehra,isvisible,setisvisible}) => {
  return (
    <div className="border-[1px] border-black">
      <h1 className="text-[20px] font-bold">pehra1</h1>
      {isvisible && <p>{pehra}</p>}
      {isvisible?<button onClick={()=>{
        setisvisible(false);
      }}> HIDE</button>:
      <button onClick={()=>{
        setisvisible(true);
      }}> SHOW</button>}
      
    </div>
  );
};

const Instmart = () => {
    const [showconfig,setshowconfig]=useState("");
  return (
    <div className=""> 
      <h1>Instmart</h1>
      <Accordian
        name={"hello1"}
        pehra={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isvisible={showconfig=="hello1"?true:false}
        setisvisible={(bool)=>{
            if(bool){
                setshowconfig("hello1")
            }
            else{
                setshowconfig("");
            }
        }}
      />
      <Accordian
        name={"hello2"}
        pehra={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isvisible={showconfig=="hello2"?true:false}
        setisvisible={(bool)=>{
            if(bool){
                setshowconfig("hello2")
            }
            else{
                setshowconfig("");
            }
        }}
      />
      <Accordian
        name={"hello3"}
        pehra={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isvisible={showconfig=="hello3"?true:false}
        setisvisible={(bool)=>{
            if(bool){
                setshowconfig("hello3")
            }
            else{
                setshowconfig("");
            }
        }}
      />
    </div>
  );
};

export default Instmart;
