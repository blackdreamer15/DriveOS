"use client";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
  ComboboxList,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
const PlacesAutocomplete = ({ selected, setSelected, close }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({
      address,
      location: { lat, lng } ,
    });
      setTimeout(() => {
          close()
      },3500)
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Pick your business location"
        className=" w-96 mt-2 shadow rounded-md outline-1 outline-blue-400 p-3 bg-white"
      />
      <ComboboxPopover style={{ zIndex: 3000 }}>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default PlacesAutocomplete;
