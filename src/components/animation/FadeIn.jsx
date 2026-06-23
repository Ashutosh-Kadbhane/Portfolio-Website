import React, { useEffect, useRef, useState } from 'react'

const FadeIn = ({children, delay=0, duration=500, threshold =0.1}) => {

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Trigger animation when element enters viewport
          if (entry.isIntersecting)  {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: threshold,
         rootMargin: '0px 0px -50px 0px' //Trigger slightly before element is fully visible
        }
      );
      
      if(elementRef.current){
        observer.observe(elementRef.current);
      }

      return() =>  observer.disconnect();{
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [threshold]);

  return (
    <div ref={elementRef} 
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
      willChange: 'opacity, transform' 
    }}
    >
      {children}
    </div>
  )
};


export default FadeIn;
