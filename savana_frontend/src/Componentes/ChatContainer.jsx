import { useEffect, useRef } from 'react';
import { MatchStore } from '../Store/MatchStore';
import ChatHeader from './UI/Skeletons/ChatHeader';
import MessageSkeleton from './UI/Skeletons/MessageSkeleton';
import MessageInput from './UI/Skeletons/MessageInput';
import { ProfileStore } from '../Store/ProfileStore';
import { formatMessageTime } from '../lib/utils';

const ChatContainer = () => {
  const { fetchMessages, selecteduser, messages, isMessageLoading, subscribeToMessages, unsubscribeToMessages } = MatchStore();
  const { userData } = ProfileStore();

  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current && messages.length > 0) {
      setTimeout(() => {
        messageEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100); // Ensures DOM updates first
    }
  }, [messages]);

  useEffect(() => {  
    if (selecteduser?.userID) {
      fetchMessages(selecteduser.userID);
      subscribeToMessages();
    }
    
    return () => unsubscribeToMessages();
  }, [selecteduser?.userID]);

  if (isMessageLoading) return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <ChatHeader />
      <MessageSkeleton />
      <MessageInput />
    </div>
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <ChatHeader />
      
      {/* Scrollable Chat Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain touch-pan-y scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}>
        {messages?.map((message) => (
          <div key={message?._id} 
            className={`chat px-4 ${message?.senderID === userData?.userID ? "chat-end" : "chat-start"}`} 
            ref={messageEndRef}
          >
            {/* User Avatar */}
            <div className="chat-image avatar">
              <div className="size-10 rounded-full border-none">
                <img
                  src={message?.senderID === userData?.userID
                    ? userData?.userimage || "/avatar.png"
                    : selecteduser?.userimage || "/avatar.png"}
                  alt="profile pic"
                />
              </div>
            </div>

            {/* Message Bubble */}
            {message?.senderID === userData?.userID ? 
            ( <div className="chat-bubble-primary chat-bubble flex px-2 flex-col">
              {message?.image && (
                <img
                  src={message?.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message?.message && <p className='px-2'>{message?.message}</p>}
            </div> )
             : 
             ( <div className=" chat-bubble flex px-2 flex-col">
              {message?.image && (
                <img
                  src={message?.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message?.message && <p className='px-2'>{message?.message}</p>}
            </div> ) }
            
            <time className="text-xs opacity-50 ml-1">
              {formatMessageTime(message?.createdAt)}
            </time>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
}

export default ChatContainer;
