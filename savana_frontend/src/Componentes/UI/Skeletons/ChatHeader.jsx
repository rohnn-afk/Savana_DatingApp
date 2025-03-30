import { X } from "lucide-react";
import { MatchStore } from "../../../Store/MatchStore";
import { UIStore } from "../../../Store/UIStore";



const ChatHeader = () => {
  const { selecteduser, setSelecteduser, unMatch } = MatchStore();
     const {setShowMatchDetailsCard} = UIStore()
  


  return (
    <div className=" border-b-4 border-base-300 bg-base-100">
      <div className="flex items-center justify-between">
        <button onClick={setShowMatchDetailsCard} className="flex items-center gap-3 ">
          {/* Avatar */}
          {/* <div className="avatar mx-2">
            <div className="size-10 rounded-full relative">
              <img src={selecteduser?.userimage || "/avatar.png"} alt={selecteduser?.name} />
            </div>
          </div> */}

          {/* User info */}
          <div className=" mx-4 mb-3 flex gap-2 text-2xl">
            <h3 className="text-3xl font-bold capitalize text-[#0b4f34] hover:text-[#16887f] leading-none ">{selecteduser?.name}{' '}</h3> :
          </div>
        </button>

<div className="flex flex-row items-center gap-x-8 mx-11">


        <button className="hover:text-red-600" onClick={() => unMatch(selecteduser._id)}>
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