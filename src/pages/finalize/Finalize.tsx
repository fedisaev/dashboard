import React, {FC} from 'react';
import TestPages from "../testPages/TestPages";
import {titleFinalize} from "../../constants/routesConstants";

const Results: FC = () => {
    return (
        <TestPages title={titleFinalize}/>
    )
}

export default Results;
