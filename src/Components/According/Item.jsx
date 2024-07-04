import According from "./According";

const Item = () => {
  const items = [
    {
      title: " What are your office hours?",
      content:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "How can I schedule an appointment?",
      content:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "Do you accept insurance?",
      content:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "What should I bring to my appointment?",
      content:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "Do you offer telemedicine appointments?",
      content:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="pt-12 ml-14">
      <p className="rounded-3xl border-2 border-black p-2 w-1/12 text-center mb-3">
        FAQ
      </p>
      <h2 className="text-4xl font-bold">Frequntly Asked Question</h2>
      </div>
      <div className="flex items-center justify-center">
        <According items={items} />
      </div>
    </div>
  );
};

export default Item;
