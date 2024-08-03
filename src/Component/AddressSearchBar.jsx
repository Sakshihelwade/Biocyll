// import React, { useEffect, useState } from 'react';
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// const AddressSearchBar = ({ onPlaceSelected, isSearched, setIsSearched }) => {
//     const [address, setAddress] = useState('');

//     // This is used to clear the search box of location after clicking on Search button
//     useEffect(() => {
//         if (isSearched) {
//             setAddress('')
//             setIsSearched(false)
//         }
//     }, [isSearched])

//     // This is used to set entered location in address state
//     const handleChange = (newAddress) => {
//         setAddress(newAddress);
//     };


//     // When we type some location in search box, related location's list appends to search box. 
//     // And below function is used get the whole information of selected location and 
//     // sending the location object in onPlaceSelected function
//     const handleSelect = async (selectedAddress) => {
//         try {
//             const results = await geocodeByAddress(selectedAddress);
//             const latLng = await getLatLng(results[0]);
//             let pincodeValue = '';
//             for (const component of results[0].address_components) {
//                 if (component.types.includes('postal_code') || component.types.includes('postal_code_prefix')) {
//                     pincodeValue = component.short_name;
//                     break; // Exit the loop once postal code is found
//                 }
//             }
//             const locationObject = {
//                 location: {
//                     description: results[0].formatted_address,
//                     matched_substrings: [
//                         {
//                             length: selectedAddress.length,
//                             offset: 0,
//                         },
//                     ],
//                     place_id: results[0].place_id,
//                     reference: results[0].place_id, // You may adjust this based on your needs
//                     structured_formatting: {
//                         main_text: results[0].formatted_address,
//                         main_text_matched_substrings: [
//                             {
//                                 length: selectedAddress.length,
//                                 offset: 0,
//                             },
//                         ],
//                         secondary_text: '', // You may customize this based on your needs
//                     },
//                     terms: results[0].address_components.map((component) => ({
//                         offset: component.types.includes('postal_code') ? 0 : component.offset,
//                         value: component.long_name,
//                     })),
//                     types: results[0].types,
//                 },
//                 pincode: pincodeValue,
//             };

//             onPlaceSelected(locationObject);
//             setAddress(selectedAddress)
//             // setAddress('')
//         } catch (error) {
//             console.error('Error fetching location:', error);
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto mt-8">
//             <PlacesAutocomplete
//                 value={address}
//                 onChange={handleChange}
//                 onSelect={handleSelect}
//             >
//                 {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                     <div>
//                         <input
//                             {...getInputProps({
//                                 placeholder: 'Enter an address',
//                                 // className: ' px-4 py-2 w-full  border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-100 w-100 p-2',
//                                 className: 'p-3 cursor-pointer hover:bg-blue-100 w-100 h-100',
//                             })}
//                         />
//                         <div className="mt-2 bg-white text-left shadow-md position-absolute location">
//                             {loading && <div className="p-2">Loading...</div>}
//                             {suggestions.map((suggestion) => (
//                                 <div
//                                     key={suggestion.placeId}
//                                     {...getSuggestionItemProps(suggestion, {
//                                         className: 'p-2 cursor-pointer hover:bg-blue-100',
//                                     })}
//                                 >
//                                     {suggestion.description}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </PlacesAutocomplete>
//         </div>
//     );
// };

// export default AddressSearchBar;
