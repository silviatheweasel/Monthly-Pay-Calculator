import React from 'react';
import './TimeSheetRow.css';
import { WorkHourCount } from '../WorkHourCount/WorkHourCount';
import { WorkMinCount } from '../WorkMinCount/WorkMinCount';

export class TimeSheetRow extends React.Component {
    render() {
        return (
            <li className="row">
                <span>
                   <WorkHourCount 
                    /> hour
                </span>
                <span>
                    <WorkMinCount /> minute
                </span>
            </li>
        )
    }
}