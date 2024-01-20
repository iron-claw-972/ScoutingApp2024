import {Autocomplete, FormControl, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function CustomAutocomplete(props) {
    const small = props.small;
    const label = props.label;
    const options = props.options;
    const value = props.value;
    const onChange = props.onChange;
    const shouldNotShow = props.shouldNotShow;

    return (
        <Grid2 xs={(small ? 6 : 12)} sm={6}>
            <FormControl fullWidth>
                <Autocomplete
                    id={label}
                    options={options}
                    value={value}
                    filterOptions={(options, {inputValue}) => {
                        if (inputValue.trim() === "" && shouldNotShow) {
                            return [];
                        }
                        return options.filter((option) =>
                            option.toLowerCase().includes(inputValue.toLowerCase())
                        );
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label={label} variant={"filled"} required/>
                    )}
                    onChange={(event, newValue) => {
                        onChange(newValue);
                    }}
                    isOptionEqualToValue={(option, value) =>
                        option.toUpperCase() === value.toUpperCase() || value === ""
                    }
                />
            </FormControl>
        </Grid2>
    );
}
