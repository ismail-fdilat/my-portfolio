import { Typography } from '@material-ui/core'
import React from 'react'
import Botton from "../Button/Button.js"
import a from "../../assets/images/me.jpg"
import "./Profile.css"
import {TimelineContent ,TimelineItem} from '@material-ui/lab';
import CustomTimeLine ,{Tmseperator} from "../TimeLine/TimeLine"
import resumedata from "../../utils/ResumeData"
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import GetAppIcon from '@material-ui/icons/GetApp';
const Constumelineitem =({title,text,link })=>{
    return(
<TimelineItem>
<Tmseperator/>
<TimelineContent className="timelineItem_content" >

    {link ? (<Typography className="timelineItem_text" >
         <span>{title}  :  </span><a href={link} taget="_blank">{text}</a>
        </Typography>):
        (<Typography className="timelineItem_text"> 
            <span>{title}  :  </span>{text}
            </Typography>
        )}
</TimelineContent>
</TimelineItem>
    )
}
const Profile = () => {
    return (
        <div className="profile container-shadow">
            <div className="profile-name">
      <Typography className="name"> {resumedata.Name}</Typography>
      <Typography className="title"> {resumedata.Profession}</Typography>
                       </div>
                       <figure className="profile-image">
                   <img  className="image" alt="tsswirti" src={a} />
                       </figure>
                       <div className="profile-informations">
                        
                       <CustomTimeLine icon={<PersonOutlineOutlinedIcon/>}>
                           <Constumelineitem title="Name" text={resumedata.Name}/>
                           <Constumelineitem title="Title" text={resumedata.Title}/>
                           <Constumelineitem title="Email" text={resumedata.Email}/>
                           <Constumelineitem title="Address" text={resumedata.Address}/>
                           {Object.keys(resumedata.socials).map(key=>(
                            <Constumelineitem title={key} text={resumedata.socials[key].text} link={resumedata.socials[key].link}/>
                              
                           ))
                           }
                       </CustomTimeLine>

                       <br/>
                       </div>
                       <Botton text={"Download cv"} icon={<GetAppIcon/>}/>
           
        </div>
    )
}

export default Profile
