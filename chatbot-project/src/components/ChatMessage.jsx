//import UserProfileImage from '../assets/user.png';
import dayjs from 'dayjs';
import UserProfileImage from '../assets/profile-1.jpg';
import RobotProfileImage from '../assets/robot.png';
import './ChatMessage.css'

export function ChatMessage({ message, sender, time}) {
    //const message = props.message;
    //const sender = props.sender;
    //shortcut for above 2 lines
    //const {message, sender} = props;
    //another shortcut : directly pass into the function definition brackets

    /*
    if(sender === 'robot'){
     return  (
     <div>
       <img src="robot.png" width="50"/> 
        {message}
      </div>
    );
    }*/
    //shortcut for above if block : {sender==='robot' && <img src="robot.png" width="50"/>}
    return (
        <div className={
            sender === 'user'
                ? 'chat-message-user'
                : 'chat-message-robot'
        }>
            {sender === 'robot' && (
                <img src={RobotProfileImage} className="chat-message-profile" />
            )}

            <div className="chat-message-text">
                {message}
                {time && (
                    <div className='chat-message-time'>
                        {dayjs(time).format('h:mma')}
                    </div>
                )}
            </div>
            {sender === 'user' && (
                <img src={UserProfileImage} className="chat-message-profile" />
            )}
        </div>
    );
}
