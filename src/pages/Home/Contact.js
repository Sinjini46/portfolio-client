import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contacts } = portfolioData;

  //link mailID and phone number
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = (link) => {
    window.location.href = link;
  };

  return (
    <div id="contact">
      <SectionTitle title="Contact" />
      <div className="max-w-screen-lg mx-auto px-4 py-3">
        {contacts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start gap-10"
          >
            <div className="text-white text-lg space-y-2">
              <p>&lt;</p>
              <div className="mx-5 space-y-2">
                <p>
                  <span className="text-secondary text-4xl font-semibold">
                    {item.name}
                  </span>
                </p>
                <p>
                  <span className="text-tertiary font-semibold">Email: </span>{" "}
                  <a
                    href={`mailto:${item.email}`}
                    className="text-white hover:underline"
                    onClick={() => handleEmailClick(item.email)}
                  >
                    {item.email}
                  </a>
                </p>
                <p>
                  <span className="text-tertiary font-semibold">LinkedIn:</span>{" "}
                  <a
                    href={item.link}
                    className="text-white hover:underline"
                    onClick={() => handleLinkedInClick(item.link)}
                  >
                    {item.link}
                  </a>
                </p>
                <p>
                  <span className="text-tertiary font-semibold">Address:</span>{" "}
                  {item.address}
                </p>
              </div>
              <p>&lt;/&gt;</p>
            </div>
            <div className="flex justify-center items-center mt-4 ml-12 sm:mt-0 sm:ml-auto sm:mr-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
