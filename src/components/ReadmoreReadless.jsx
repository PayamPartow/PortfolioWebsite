import React ,{ useState }from 'react'
import "../index.css";

const ReadmoreReadless = ({shortContent, longContent, longContent2, longContent3, longContent4}) => {
    const [collapse, setCollapse] = useState(false);
  return (
    <div class = "mt-2 mb-5 ">
    {shortContent}
    
        <span className={`long-text ${collapse ? "expanded" : ""}`} >
            <ul class="marker:text-white ">
                <li>{longContent}</li>
                <li>{longContent2}</li>
                <li>{longContent3}</li>
                <li>{longContent4}</li>
                
            </ul>
            
        </span>
        <button
                    type="button"
                    class="inline-block rounded bg-primary px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
                    hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:outline-none focus:ring-0 active:bg-primary-700 
                    active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={()=> setCollapse((prev)=>!prev)}>
                    {collapse ? "Read Less" : "Read More"}
        </button>
    </div>

  )
}

export default ReadmoreReadless






