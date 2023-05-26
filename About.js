import React from 'react'
  import { useState } from 'react'
    import { useCollapse } from 'react-collapsed'

export const About = () => {

  
    
   
      const [isExpanded, setExpanded] = useState(false)
      const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    
      return (
        <div>
        <div>
          <button
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          <section {...getCollapseProps()}>Collapsed content 🙈</section>
        </div>
                <div>
                <button
                  {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                  })}
                >
                  {isExpanded ? 'Collapse' : 'Expand'}
                </button>
                <section {...getCollapseProps()}>Collapsed content 🙈</section>
              </div>
              </div>
      )
    }
