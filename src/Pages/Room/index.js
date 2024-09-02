import React from 'react'
import {useParams} from "react-router-dom"
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"


export default function RoomPage() {

    const {roomid}=useParams()
    const MyMeeting=async(element)=>{
        const appID=1966725908;
        const serverSecret="221a66f201585350c3bdb5fc2cb10e15"
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomid,Date.now().toString(),"Debojyoti")
        const zc=ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:"Copy Link",
                    url:`http://localhost:3000/room/${roomid}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton:true
        })
    }
  return (
    <div>
        <div ref={MyMeeting} />
    </div>
  )
}
