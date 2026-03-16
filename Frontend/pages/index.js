import { useState } from "react";

export default function Home(){

const [file,setFile]=useState(null)
const [result,setResult]=useState("")
const [loading,setLoading]=useState(false)

const upload=async()=>{

if(!file){
alert("Please upload a file")
return
}

setLoading(true)

const formData=new FormData()
formData.append("file",file)

try{

const res=await fetch("https://ai-health-diagnostics-agent-2.onrender.com/analyze",{
method:"POST",
body:formData
})

const data=await res.json()

setResult(data.report)

}catch(err){

setResult("Error connecting to server")

}

setLoading(false)

}

return(

<div style={{padding:40,fontFamily:"Arial"}}>

<h1>AI Health Diagnostics Agent</h1>

<input 
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<br/><br/>

<button onClick={upload}>
Analyze
</button>

<br/><br/>

{loading && <p>Analyzing report...</p>}

{result && (
<div style={{
background:"#f5f5f5",
padding:"15px",
borderRadius:"10px",
width:"400px"
}}>
<h3>Result</h3>
<pre>{result}</pre>
</div>
)}

</div>

)

}
