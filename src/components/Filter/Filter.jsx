import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { Input, Text } from "./Filter.styled";

export const Filter = () => {
    const dispatch = useDispatch();
    const handleFilterChange = text => dispatch(setFilter(text));

    return (
        <>
            <Text>Find contacts by name</Text>
            <Input type="text" onChange={evt=> handleFilterChange(evt.target.value)} />
        </>
    )
}