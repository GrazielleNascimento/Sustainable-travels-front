import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 12px;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 20px;
  width: 90%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: #4CAF50;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #4CAF50;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 200, 100, 0.3);
  }
`;

const ErrorText = styled.p`
  color: #d9534f;
  font-size: 0.9rem;
  margin-top: -10px;
  margin-bottom: 20px;
`;

const ItineraryForm = ({ onChange }) => {
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleChange = (setter) => (e) => {
    const newValue = e.target.value;
    setter(newValue);
    onChange({
      id: setter === setId ? newValue : id,
      name: setter === setName ? newValue : name,
      description: setter === setDescription ? newValue : description,
      location: setter === setLocation ? newValue : location,
    });
  };

  return (
    <FormContainer>
      <FormField>
        <Label htmlFor="id">ID:</Label>
        <Input
          id="id"
          type="number"
          value={id}
          onChange={handleChange(setId)}
          placeholder="ID for this Itinerary"
        />
      </FormField>
      <FormField>
        <Label htmlFor="name">Name:</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={handleChange(setName)}
          placeholder="Give your itinerary a name"
        />
      </FormField>
      <FormField>
        <Label htmlFor="description">Description:</Label>
        <Input
          id="description"
          type="text"
          value={description}
          onChange={handleChange(setDescription)}
          placeholder="Describe your travel itinerary"
        />
      </FormField>
      <FormField>
        <Label htmlFor="location">Location:</Label>
        <Input
          id="location"
          type="text"
          value={location}
          onChange={handleChange(setLocation)}
          placeholder="Where will the trip be?"
        />
      </FormField>
    </FormContainer>
  );
};

export default ItineraryForm;
