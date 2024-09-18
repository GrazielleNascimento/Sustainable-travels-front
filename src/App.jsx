import './App.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

// api
import apiService from './service/api-sustainabletravel';

// components
import Header from './components/header';
import Section from './components/section';
import CardPlaces from './components/cards/card-place';
import CardAccommodation from './components/cards/card-accomodation';
import CardTransportation from './components/cards/card-transportation';
import CardEvent from './components/cards/card-event';
import CardGuide from './components/cards/card-guide';
import CardMeal from './components/cards/card-meal';
import CardPackage from './components/cards/card-package';
import ItineraryButton from './components/btn-itenerary';
import ItineraryForm from './components/itinerary-form';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {

  const [places, setPlaces] = useState([]);
  const [accomodations, setAccomodations] = useState([]);
  const [transportations, setTransportations] = useState([]);
  const [events, setEvents] = useState([]);
  const [guides, setGuides] = useState([]);
  const [packages, setPackages] = useState([]);
  const [meals, setMeals] = useState([]);

  const [selectedPlaces, setSelectedPlaces] = useState(null);
  const [selectedAccomodations, setSelectedAccomodations] = useState(null);
  const [selectedTransportations, setSelectedTransportations] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState(null);
  const [selectedGuides, setSelectedGuides] = useState(null);
  const [selectedPackages, setSelectedPackages] = useState(null);
  const [selectedMeals, setSelectedMeals] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: '',
    description: '',
    location: '',
  });


  useEffect(() => {
    fetchPlaces();
    fetchAccomodations();
    fetchTransportations();
    fetchMeals();
    fetchPackages();
    fetchGuides();
    fetchEvents();
  }, []);

  // consultando places
  const fetchPlaces = async () => {
    try {
      const places = await apiService.getPlaces();
      console.log(places);
      setPlaces(places);
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  //consultando accomodations
  const fetchAccomodations = async () => {
    try {
      const accomodations = await apiService.getAccomodations();
      console.log(accomodations);
      setAccomodations(accomodations);
    } catch (error) {
      console.error('Error fetching accomodation:', error);
    }
  }

  // consultando transportations
  const fetchTransportations = async () => {
    try {
      const transportations = await apiService.getTransportations();
      console.log(transportations);
      setTransportations(transportations);
    } catch (error) {
      console.error('Error fetching transportations:', error);
    }
  }

  // consultando meals
  const fetchMeals = async () => {
    try {
      const meals = await apiService.getMeals();
      console.log(meals);
      setMeals(meals);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  }

  // consultando packages
  const fetchPackages = async () => {
    try {
      const packages = await apiService.getPackages();
      console.log(packages);
      setPackages(packages);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  }

  // consultando guides
  const fetchGuides = async () => {
    try {
      const guides = await apiService.getGuides();
      console.log(guides);
      setGuides(guides);
    } catch (error) {
      console.error('Error fetching guides:', error);
    }
  }

  // consultando events
  const fetchEvents = async () => {
    try {
      const events = await apiService.getEvents();
      console.log(events);
      setEvents(events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }

  // gerando o itinerario depois se tudo estiver preenchido
  const handleGenerateItinerary = async () => {
    if (!formData.id || !formData.name || !formData.description || !formData.location ||
      !selectedPlaces || !selectedAccomodations || !selectedTransportations ||
      !selectedMeals || !selectedEvents || !selectedGuides || !selectedPackages) {
      alert('Please complete all sections and fields.');
      return;
    }

    const itinerary = {
      ...formData,
      placeID: selectedPlaces.id,
      accomodationID: selectedAccomodations.id,
      transportationID: selectedTransportations.id,
      mealID: selectedMeals.id,
      eventID: selectedEvents.id,
      guideID: selectedGuides.id,
      packageID: selectedPackages.id,
    };

    // criando o itinerario
    apiService.createItinerary(itinerary);

    //consultando o itinerario
    const response = apiService.getItinerary(itinerary.id);
    console.log('Itinerary created:', response);
  };

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const handleSelectItem = (item, section) => {
    switch(section) {
      case 'places':
        setSelectedPlaces(item);
        console.log('Selected place:', item);
        break;
      case 'accomodations':
        setSelectedAccomodations(item);
        console.log('Selected accomodation:', item);
        break;
      case 'transportations':
        setSelectedTransportations(item);
        console.log('Selected transportation:', item);
        break;
      case 'events':
        setSelectedEvents(item);
        console.log('Selected event:', item);
        break;
      case 'guides':
        setSelectedGuides(item);
        console.log('Selected guide:', item);
        break;
      case 'packages':
        setSelectedPackages(item);
        console.log('Selected package:', item);
        break;
      case 'meals':
        setSelectedMeals(item);
        console.log('Selected meal:', item);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header />

      <br/>
      <br/>
      <br/>
      <br/>

      <Section title="Create Your Sustainable Itinerary for Your Next Travel" description="Tell us the name, description and location of your next destination. This form will help you customize your itinerary with transport options, accommodation and sustainable attractions" />
      <ItineraryForm onChange={handleFormChange} />

      <br/>
      <br/>
      <br/>

      <Section title="Places" description="Explore travel destinations that promote environmental preservation and harmony with nature. Find the ideal places for a sustainable and memorable experience" />
      <CardsContainer>
          {places.map((place) => (
            <CardPlaces 
              key={place.id} 
              place={place} 
              isSelected={selectedPlaces && selectedPlaces.id === place.id}
              onClick={() => handleSelectItem(place, 'places')}
            />
          ))}
      </CardsContainer>

      <br/>
      <br/>
      <br/>

      <Section title="Accomodations" description="Discover accommodations that combine comfort with environmental responsibility. Stay in places that adopt ecological practices and offer an unforgettable stay" />
      <CardsContainer>
        {accomodations.map((accomodation) => (
          <CardAccommodation 
            key={accomodation.id} 
            accomodation={accomodation} 
            isSelected={selectedAccomodations && selectedAccomodations.id === accomodation.id}
            onClick={() => handleSelectItem(accomodation, 'accomodations')}
          />
        ))}
      </CardsContainer>

      <br/>
      <br/>
      <br/>

      <Section title="Transportations" description="Choose means of transportation that help reduce your carbon footprint and promote sustainable mobility. Find options that align with your commitment to the environment" />
      <CardsContainer>
        {transportations.map((transportation) => (
          <CardTransportation 
            key={transportation.id} 
            transportation={transportation} 
            isSelected={selectedTransportations && selectedTransportations.id === transportation.id}
            onClick={() => handleSelectItem(transportation, 'transportations')}
          />
        ))}
      </CardsContainer>

      <br/>
      <br/>
      <br/>

      <Section title="Events" description="Take part in events that celebrate sustainability and environmental awareness. Get involved in activities that not only entertain, but also contribute to a greener future" />
      <CardsContainer>
        {events.map((event) => (
          <CardEvent 
            key={event.id} 
            event={event}
            isSelected={selectedEvents && selectedEvents.id === event.id}
            onClick={() => handleSelectItem(event, 'events')}
          />
        ))}
      </CardsContainer>

        
      <br/>
      <br/>
      <br/>

      <Section title="Guides" description="Take advantage of specialized guides that offer insights into sustainable practices and tips for eco-friendly travel. Browse recommendations that go beyond the ordinary" />
      <CardsContainer>
        {guides.map((guide) => (
          <CardGuide 
            key={guide.id} 
            guide={guide} 
            isSelected={selectedGuides && selectedGuides.id === guide.id}
            onClick={() => handleSelectItem(guide, 'guides')}
          />
        ))}
      </CardsContainer>

      <br/>
      <br/>
      <br/>

      <Section title="Meals" description="Savor meals prepared with local ingredients and sustainable practices. Discover food options that respect the environment and delight your palate" />
      <CardsContainer>
        {meals.map((meal) => (
          <CardMeal 
            key={meal.id} 
            meal={meal} 
            isSelected={selectedMeals && selectedMeals.id === meal.id}
            onClick={() => handleSelectItem(meal, 'meals')}
          />
        ))}
      </CardsContainer>

      <br/>
      <br/>
      <br/>

      <Section title="Packages" description="Plan your trip with packages that include sustainable experiences and accommodation. Find the perfect package that combines adventure and environmental responsibility" />
      <CardsContainer>
        {packages.map((pkg) => (
          <CardPackage 
          key={pkg.id} 
          pkg={pkg} 
          isSelected={selectedPackages && selectedPackages.id === pkg.id}
          onClick={() => handleSelectItem(pkg, 'packages')}
          />
        ))}
      </CardsContainer>

      <br/>
      <br/>
      <br/>

      <CenteredContainer>
        <ItineraryButton onClick={handleGenerateItinerary} />
      </CenteredContainer>

      <br/>
      <br/>
      <br/>

    </>

  )
}

export default App
