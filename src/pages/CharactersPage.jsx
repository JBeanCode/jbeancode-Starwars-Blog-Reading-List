import React from "react";
import useActions from "../hooks/useActions";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState, useEffect } from "react";

export const CharactersPage = ({} => {
    const {store, dispatch} = useGlobalReducer();
    const { getCharacter } = useActions();

    const {id} = useParams()


})
