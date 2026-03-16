import { useState } from "react";

export default function Home() {

const [file,setFile]=useState(null)
const [result,setResult]=useState("")

const upload=async()=>{

const formData=new FormData()
formData.append("file",file)

const res=await fetch("https://ai-health-diagnostics-agent-2.onrender.com/analyze",{

method:"POST",
body:formData

})

const data=await res.json()

setResult(data.report)

}

return(

<div style={{padding:40}}>

<h1>AI Health Diagnostics Agent</h1>

<input type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button onClick={upload}>
Analyze
</button>

<h3>Result:</h3>

<pre>{result}</pre>

</div>

)

}
