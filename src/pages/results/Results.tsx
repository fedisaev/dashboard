import React, {FC} from 'react';
import TestPages from "../testPages/TestPages";
import {titleResults} from "../../constants/routesConstants";

const Results: FC = () => {
    return (
        <TestPages title={titleResults}/>
    )
}

export default Results;
