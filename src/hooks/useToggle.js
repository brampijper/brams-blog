import { useState } from 'react';

export default function useToggle() {
    const [on, setOn] = useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return [ on, toggle ]
}