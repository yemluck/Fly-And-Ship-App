import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './ItineraryForm.css';


function ItineraryForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    // this is the logged in user
    const user=useSelector(store => store.user)

    const [location, setLocation] = useState('');
    const [departingCity, setDepartingCity] = useState('');
    const [destinationCountry, setDestinationCountry] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [weightLimit, setWeightLimit] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [note, setNote] = useState('');

    const createItinerary = (event) => {
        event.preventDefault();
        

        dispatch({
            type: 'CREATE_ITINERARY',
            payload: {
                location: location,
                departingCity: departingCity,
                destinationCountry: destinationCountry,
                destinationCity: destinationCity,
                weightLimit: weightLimit,
                departureDate: departureDate,
                arrivalDate: arrivalDate,
                note: note,
                userId: user.id
            }
        });

        swal({
            title: "Itinerary created",
            text: "New itinerary created, wait for shippers to contact you",
            icon: "success",
            button: "✅"
        })
        .then((value) => {
            dispatch({
                type: 'FETCH_ITINERARY'
            }) // end dispatch
            history.push('/userF')
        })
       
    }

    return(
        <form className="formPanelItinerary" onSubmit={createItinerary}>
        <div>
        <label htmlFor='location'>
            Location:
        <input
            type="text"
            name="location"
            value={location}
            required
            placeholder="Enter location"
            onChange={(event) => setLocation(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='departingCity'>
            Departing City:
        <input
            type="text"
            name="departingCity"
            value={departingCity}
            required
            placeholder="Enter departing City"
            onChange={(event) => setDepartingCity(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='destination'>
            Destination country:
        <input
            type="text"
            name="destination"
            value={destinationCountry}
            required
            size="22"
            placeholder="Enter destination country"
            onChange={(event) => setDestinationCountry(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='destinationCity'>
            Destination city:
        <input
            type="text"
            name="destinationCity"
            value={destinationCity}
            required
            placeholder="Enter destination city"
            onChange={(event) => setDestinationCity(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='weightLimit'>
            Weight limit:
        <input
            type="number"
            name="weightLimit"
            value={weightLimit}
            required
            placeholder="Enter weight limit"
            onChange={(event) => setWeightLimit(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='departureDate'>
            Departure date:
        <input
            type="date"
            name="departureDate"
            value={departureDate}
            required
            onChange={(event) => setDepartureDate(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='arrivalDate'>
            Arrival date:
        <input
            type="date"
            name="arrivalDate"
            value={arrivalDate}
            required
            onChange={(event) => setArrivalDate(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='note'>
            Note:
        <input
            type="text"
            name="note"
            value={note}
           
            placeholder="Enter any comment"
            onChange={(event) => setNote(event.target.value)}
        />
        </label>
        </div>
        <div>
            <input className="btn createItineraryBtn" type="submit" name="create" value="create" />
        </div>
        
        
        </form>
    )
}

export default ItineraryForm