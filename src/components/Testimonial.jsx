import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Aniket Chavan "}
          feedback={
            "                      It's fine to celebrate success but it is more important to need the lessons of by  failure. "
          }
        />

        <TestimonialCard
          name={"Darshan Katale"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on youtube!"
          }
        />
        <TestimonialCard
          name={"Rushikesh Damugade."}
          feedback={"Amazing seems like you should the Greate Developer "}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
