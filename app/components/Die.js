import React from 'react'

const Die = ({ value }) => {
    const dots = {
        1: '',
        2: 'top-right bottom-left',
        3: 'top-right bottom-left center',
        4: 'top-left top-right bottom-left bottom-right',
        5: 'top-left top-right bottom-left bottom-right center',
        6: 'top-left top-right middle-left middle-right bottom-left bottom-right',
    }

    return (
        <div className="die">
            <span
                className={`dot ${
                    dots[value]?.includes('top-left') ? 'show' : ''
                }`}
            />
            <span
                className={`dot ${
                    dots[value]?.includes('top-right') ? 'show' : ''
                }`}
            />
            <span
                className={`dot ${
                    dots[value]?.includes('middle-left') ? 'show' : ''
                }`}
            />
            <span
                className={`dot ${
                    dots[value]?.includes('middle-right') ? 'show' : ''
                }`}
            />
            <span
                className={`dot ${
                    dots[value]?.includes('bottom-left') ? 'show' : ''
                }`}
            />
            <span
                className={`dot ${
                    dots[value]?.includes('bottom-right') ? 'show' : ''
                }`}
            />
        </div>
    )
}

export default Die
