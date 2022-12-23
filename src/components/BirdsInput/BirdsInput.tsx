import React, { useState, CSSProperties } from 'react';
import Select from 'react-select';
import { birds } from '../../utils/birds';
import './BirdsInput.css'

interface BirdsInputProps {
    guess: string,
    setGuess: React.Dispatch<React.SetStateAction<string>>
}

function BirdsInput ({guess, setGuess}: BirdsInputProps) {
    
    type OptionType = {
        label: string;
        value: string;
    }
    const birdNames: OptionType[] = birds.map(function(value) {
        return {value: value.name, label: value.name};
    });

    const [state, setstate] = useState<{query: string, list: string[]}>({
        query: '',
        list: []
    })

    return (
        <div>
            <form>
                <div className="input-ctn">
                    <Select
                        className="basic-single input"
                        classNamePrefix="select"
                        name="color"
                        options={birdNames}
                    />                    
                    <button type="submit">Guess</button>
                </div>
            </form>
            <ul>
                {(state.query === '' ? "" : state.list.map(post => {
                    return <li key={post}>{post}</li>
                }))}
            </ul>
        </div>
    )
}

export default BirdsInput;