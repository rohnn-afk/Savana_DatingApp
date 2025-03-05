import { X } from "lucide-react";
import { MatchStore } from "../../../Store/MatchStore";



const ChatHeader = () => {
  const { selecteduser, setSelecteduser } = MatchStore();

  return (
    <div className="p-2.5 border-b border-base-300 bg-base-100">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-3 hover:text-rose-500">
          {/* Avatar */}
          <div className="avatar mx-2">
            <div className="size-10 rounded-full relative">
              <img src={selecteduser?.userimage || "/avatar.png"} alt={selecteduser?.name} />
            </div>
          </div>

          {/* User info */}
          <div className="">
            <h3 className="text-3xl font-semibold leckerli-one-regular leading-none ">{selecteduser?.name}</h3>
          </div>
        </button>

<div className="flex flex-row items-center gap-x-8 mx-6">


        <button className="hover:text-red-600" onClick={() => setSelecteduser(null)}>
          unmatch
        </button>

        {/* Close button */}
        <button className="hover:text-green-400" onClick={() => setSelecteduser(null)}>
          <X />
        </button>
</div>
      </div>
    </div>
  );
};
export default ChatHeader;