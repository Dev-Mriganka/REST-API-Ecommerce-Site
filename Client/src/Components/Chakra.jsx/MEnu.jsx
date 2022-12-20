import React, { useReducer } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
    Grid,
  Flex,
    SimpleGrid,
    Image,
  
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';
import { useEffect } from 'react';
import { Countries } from '../../Api/countries';
import { Country, Loading } from '../AppContext/action';
import { useState } from 'react';
const MEnu = () => {
    const { state, dispatch } = useContext(AppContext);
const [name,setNAme]=useState("")
  useEffect(() => {
      dispatch(Loading(true))
        Countries().then((res) => {
          // console.log(res.data.data);
            dispatch(Loading(false));
          dispatch(Country(res.data.data));
        });
    }, [])
    // console.log(state.country)
    // console.log(state.loading)

// console.log(name)
  return (
    <>
      <Menu>
        <MenuButton
          bg={"transparent"}
          fontWeight={"bolder"}
          fontSize={"14px"}
          _hover={{textDecorationLine: "none"}}
          textDecorationLine={"underline"}
          as={Button}
          isLoading={state.loading}
          loadingText="Countries"
          spinnerPlacement="end"
          rightIcon={<ChevronDownIcon pos={"relative"} top={"1"} />}
        >
          {!name
            ? "Countries"
            : [
                <Flex gap={2}>
                  <Image w={4} src={name[0]} />
                  {name[1]}
                </Flex>,
              ]}
        </MenuButton>
        <MenuList zIndex={'overlay'} border={"2px solid red"} w={"full"}>
          <SimpleGrid columns={5} pl={2} pb={2} rowGap={1} columnGap={3}>
            {state.country.slice(88, 148).map((el, i) => {
              return (
                <MenuItem
                  zIndex={"20"}
                  key={i}
                  onClick={() => setNAme([el.flag, el.name])}
                >
                  <Image w={5} mr={1} src={el.flag} />
                  {el.name}
                </MenuItem>
              );
            })}
          </SimpleGrid>
        </MenuList>
      </Menu>
    </>
  );
}

export default MEnu

