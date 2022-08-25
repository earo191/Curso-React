import React from 'react'
import { UseCounter } from '../../hooks/UseCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHook = () => {

    const { counter , increment } = UseCounter(1);
    // console.log(counter);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { author , quote } = !!data && data[0];
    // console.log(data);

    return (
        <div>
            <h1>BreakindBad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading....
                        </div>
                    )
                :
                    (
                        <div>
                            <blockquote className="blockquote text-right">
                                <p className="">{ quote }</p>
                                <footer className="blockquote-footer">{ author }</footer>
                            </blockquote>

                            <button 
                                onClick={ increment }
                                className="btn btn-primary"
                            >
                                next quote 
                            </button>
                        </div>
                        
                    )

            }

            
        </div>
    )
}
