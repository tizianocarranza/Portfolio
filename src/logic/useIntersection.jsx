import { useState, useEffect, useRef } from 'react'

function useIntersection(options = {}) {
    
    const [elementIsIntersecting, setElementIsIntersecting] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        /* Obtiene el elemento del DOM a aprtir de su Ref */
        const element = elementRef.current;

        /* Definicion del objeto observer, recibe, un cb (define el comportamiento) y las options*/
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                    setElementIsIntersecting(entry.isIntersecting);
            });
        },
            options
        );

        /* Si el elemento existe, le indicamos que lo observe */
        if (element) {
            observer.observe(element);
        }

        /* Si el elemento existe, le indicamos que lo deje de observar cuando no se este intersectando */
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        }
    }, []);


    /* Retornamos la referencia del elemento y si se esta intersectando o no, esto lo desestructaremos y pondremos los nombres del objeto a observar cuando vayamos a usar el hook*/
    /* EJ:
        const [ introImageRef, introImageIsIntersecting ] = useIntersection({treshold: 0.5})
    */
    return [ elementRef, elementIsIntersecting ];
}

export default useIntersection;