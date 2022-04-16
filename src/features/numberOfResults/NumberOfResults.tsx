import * as React from 'react';
import { Flex, Stack, RadioGroup, Radio, Text} from '@chakra-ui/react';
import {NumberOfResultsType, setNumberOfResults} from "./numberOfResultsSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks"
export const NumberOfResults = () => {
    const dispatch = useAppDispatch();
    const numberOfResults = useAppSelector(state => state.numberOfResults);
    const onChange = (val: NumberOfResultsType) => {
        dispatch(setNumberOfResults(val));
    }
    return (
        <Flex my={4} justifyContent="center">
            <Text mr={3}>Number of results:</Text>
            <RadioGroup defaultValue={10} onChange={onChange} value={numberOfResults}>
                <Stack spacing={4} direction="row">
                    <Radio value="10">10 tweets</Radio>
                    <Radio value="15">15 tweets</Radio>
                    <Radio value="20">20 tweets</Radio>
                </Stack>
            </RadioGroup>
        </Flex>
    )
}