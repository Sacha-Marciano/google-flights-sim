import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAirportInfos } from "../api/rapidapi";

export default function CustomAutocomplete({ onChange, custom }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  // Fetch Airports Function
  const fetchAirportsByQuery = async (searchQuery) => {
    if (!searchQuery) return;

    setLoading(true);
    try {
      const response = await getAirportInfos(searchQuery);
      const results = response.data.data.map((item) => ({
        title: item.presentation.suggestionTitle,
        skyId: item.skyId,
        entityId: item.entityId,
      }));
      setOptions(results);
    } catch (error) {
      console.error("Error fetching airports:", error);
      setOptions([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!query) {
      setOptions([]);
      return;
    }
    // Fetch airport after timer is done (prevent multi API calls)
    const timer = setTimeout(() => {
      fetchAirportsByQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <Autocomplete
      className="bg-white dark:text-gray-600 rounded-md m-2 max-w-[220px]"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onChange={(_, newValue) => {
        onChange(custom.name, newValue);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={[...options]}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={custom.label}
          onChange={(evt) => setQuery(evt.target.value)}
          required
        />
      )}
    />
  );
}
