import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/auth";

// const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/games`;
const baseUrl = 'http://localhost:3030/games';


export async function showGames() {
    const response = await fetch("http://localhost:3030/games");
    if (!response.ok) {
        throw new Error(`Failed to fetch games: ${response.status}`);
    }
    const result = await response.json();
    return Array.isArray(result) ? result : Object.values(result);
}



export const useGame = (gameId) => {
    const [game, setGame] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${gameId}`)
            .then(setGame);
    }, [gameId])

    return {
        game,
    };
};

export const showLatestGames = () => {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
            select: '_id,imageUrl,title',
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLatestGames)
    }, []);

    return { latestGames };
};


export const actionCreateGame = () => {
    const create = (gameData) =>
        request.post(baseUrl, gameData);
    return { create };
};

export const EditGame = () => {
    const { request } = useAuth();

    const edit = (gameId, gameData) =>
        request.put(`${baseUrl}/${gameId}`, { ...gameData, _id: gameId });

    return {
        edit,
    }
};

export const DeleteGame = () => {
    const { request } = useAuth();

    const deleteGame = (gameId) =>
        request.delete(`${baseUrl}/${gameId}`);

    return {
        deleteGame,
    }
};