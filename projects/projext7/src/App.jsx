import React from "react";
import ContactCard from "./ContactCard";

const contacts = [
  { 
    id: "sofia",
    name: "Sofia Ranta", 
    title: "UI Designer", 
    email: "info@example.com", 
    phone: "+350400505050",
    image: 'https://randomuser.me/api/portraits/women/44.jpg'  // Woman portrait
  },
  { 
    id: "bob",
    name: "Bob Johnson", 
    title: "Dev Ops Engineer", 
    email: "info@example.com", 
    phone: "+447787202020" ,
    image: 'https://randomuser.me/api/portraits/men/46.jpg'     // Professional man
  },
  {
    id: "charlie", 
    name: "Charlie Brown", 
    title:"Junior Developer", 
    email: "info@example.com", 
    phone: "+353871818181",
    image: '/Charlie_Brown.png' // Cartoon
  },
];

function App() {
  return (
      <div className="p-1 min-h-screen flex flex-wrap gap-6 justify-center items-center" style={{ backgroundColor: '#57eb16' }}>
      {contacts.map((person, idx) => (
        <ContactCard key={idx} {...person} />
      ))}
    </div>
  );
}

export default App;
// bg-[#2f8109] this is backgroundColor used in other Projects
