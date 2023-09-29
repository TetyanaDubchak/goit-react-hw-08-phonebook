import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/filtersSlice";
import { Input, Text, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const Filter = () => {
    const dispatch = useDispatch();
    const handleFilterChange = text => dispatch(setFilter(text));

    return (
        <Box mt='40px' mb='40px'>
            <Text fontFamily='heading' color='primary.100' fontSize='20px'  mb='20px'><SearchIcon mr='10px'/>Find contacts by name</Text>
            <Input type="text" onChange={evt=> handleFilterChange(evt.target.value)}/>
        </Box>
    )
}