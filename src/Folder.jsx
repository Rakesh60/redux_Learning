import React, { useState } from 'react'
import './folder.css'


function Folder({ files }) {
  const [expand,setExpand]=useState(false)
  console.log(files)
  return (
    <div className='folder'>
      <div onClick={()=>{setExpand(!expand)}}>
        {files.isFolder?(<button  className={expand?'expand':''}>
          {">"}
        </button>):null}
        {files.name}</div>
        {
          files.isFolder && expand && files.children.map((exp,index)=> <div key={index}>
          <Folder files={exp}/>
        </div>)
        }
    </div>
  )
}

export default Folder
