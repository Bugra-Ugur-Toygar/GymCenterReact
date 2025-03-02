import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactSection>
      <h2>CONTACT US</h2>
      <p>
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical at Hampden-Sydney College.
      </p>
      <ContactContainer>
        <FormContainer>
          <form>
            <InputRow>
              <input type="text" placeholder="Mobile Number" />
              <input type="email" placeholder="Email Address" />
            </InputRow>
            <textarea placeholder="Make An Appointment" rows="5"></textarea>
            <button>Submit</button>
          </form>
        </FormContainer>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24429.20945058065!2d32.802260690267824!3d39.92078860391974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fdbf230ebb1%3A0x6ecb28f70d85d4d9!2zQW5rYXJhLCBUw7xya2l5ZQ!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </MapContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;

// Styled Components
const ContactSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #f8f8f8;
  h2 {
    color: #0033cc;
  }
  p {
    margin-bottom: 30px;
    color: #555;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    button {
      background: #0033cc;
      color: white;
      padding: 10px;
      border: none;
    }
  }
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
  }
`;

const MapContainer = styled.div`
  flex: 1;
`;
