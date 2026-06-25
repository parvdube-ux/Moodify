import { saveMood, moodHist } from "../services/moods.api";
import { moodContext } from "../context/moods.context";
import { useContext, useEffect } from "react";

export const useMood = () => {
    const {sethistory} = useContext(moodContext)

    const fetchHistory = async () => {
        try {

            const data =
                await moodHist();

            sethistory(data.mood);

        } catch (error) {

            console.error(error);

        }

    };

    return fetchHistory;

}
