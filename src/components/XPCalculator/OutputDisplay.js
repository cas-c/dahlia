import React from 'react';

const OutputDisplay = ({ nextLevel, remainingXP, xpNeeded, sharedXP }) => {
    if (!nextLevel) return <div />;
    return (
        <div>
            <h4>Your new level.</h4>
            <br />
            Level { nextLevel } ({ remainingXP ? remainingXP : 0 }/{ xpNeeded }xp)
            {
                sharedXP > 0 &&
                <div>
                    The rest of your party earns {sharedXP} xp.
                </div>
            }
        </div>
    );
}

OutputDisplay.defaultValues = {
    remainingXP: 0,
    sharedXP: 0
}

export default OutputDisplay;
