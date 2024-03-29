import React from "react";
import bg from "../logo/bg.jpg";

// just shows the about page
const About = () => {

  return (
    <>
      <div className="item-center flex justify-center mt-4">
        <div className="w-[500px] h-[500px] items-center flex">
          <div>
            <h1 className="font-bold text-[20px] ">Grub</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.     priyalnmcnndvnnmnmnmcmz
            </p>
          </div>
        </div>
        <div>
          <img src={bg} className=" w-[500px] "></img>
        </div>
      </div>
    </>
  );
};

export default About;
