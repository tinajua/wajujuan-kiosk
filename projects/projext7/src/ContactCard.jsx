import { useState } from 'react';

export default function ContactCard({ id, name, title, email, phone, image }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const isBoardMember = id === "sofia" || id === "bob";

  return (
      <div
      className="w-80 h-96 perspective cursor-pointer border-8 border-[#a5c891] rounded-xl shadow-md"
      onClick={handleFlip}
      >

      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
      {/* Front Side */}
      <div className="absolute w-full h-full backface-hidden bg-white shadow-xl rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center">
        <img
          src={image}
          alt={`${name}'s portrait`}
          className={`mx-auto object-top mb-4 shadow-md ${
            id === "charlie"
             ? "w-28 h-28 rounded-md border-4 border-[#a5c891]"
             : "w-24 h-24 rounded-full"
          }`}
        />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{title}</p>
        {isBoardMember && (
          <span className="text-xs mt-1 text-indigo-400 font-medium italic">
            Company Board Member
          </span>
         )}
        </div>

        {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-50 shadow-xl rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-blue-700">{name}</h2>
          <p className="text-sm text-gray-700 mt-2">{email}</p>
          <button
           onClick={handleFlip}
           className="mt-4 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
         >
           Flip Back
         </button>
        </div>
      </div>
    </div>
  );
}
