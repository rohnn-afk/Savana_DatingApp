import { useEffect, useRef, useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image for modal

  useEffect(() => {
    if (messageEndRef.current && messages.length > 0) {
      setTimeout(() => {
        messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages]);

  useEffect(() => {
    if (selecteduser?.userID) {
      fetchMessages(selecteduser.userID);
      subscribeToMessages();
    }
    return () => unsubscribeToMessages();
  }, [selecteduser?.userID]);

  if (isMessageLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-hidden">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto space-y-4 p-4 scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}>
        {messages?.map((message) => (
          <div key={message?._id} 
            className={`flex chat  ${message?.senderID === userData?.userID ? 'justify-end ' : 'justify-start'}`}
          >
            <div className="flex items-end gap-2">
              {message?.senderID !== userData?.userID && (
                <time className="text-xs opacity-90 text-left">
                  {formatMessageTime(message?.createdAt)}
                </time>
              )}
              <div className={`relative max-w-xs md:max-w-md lg:max-w-lg p-4 rounded-lg shadow-[0_8px_12px_rgba(0,0,0,0.9)] ${message?.senderID === userData?.userID ? 'chat-bubble-primary chat-bubble' : 'chat-bubble'}`}>
                {message?.image && (
                  <img
                    src={message?.image}
                    alt="Attachment"
                    className="max-w-[250px] rounded-md mb-2 cursor-pointer"
                    onClick={() => setSelectedImage(message?.image)} // Open modal on click
                  />
                )}
                {message?.message && <p className='break-words px-2'>{message?.message}</p>}
              </div>
              {message?.senderID === userData?.userID && (
                <time className="text-xs opacity-90 text-right">
                  {formatMessageTime(message?.createdAt)}
                </time>
              )}
            </div>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
      
      <MessageInput />

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Preview" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
