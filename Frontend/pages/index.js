import { useState } from "react";

export default function Home() {

const [file, setFile] = useState(null);
const [result, setResult] = useState("");
const [loading, setLoading] = useState(false);

const upload = async () => {

```
if (!file) {
  alert("Please upload a file first");
  return;
}

setLoading(true);
setResult("");

const formData = new FormData();
formData.append("file", file);

try {

  const response = await fetch(
    "https://ai-health-diagnostics-agent-2.onrender.com/analyze",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Server error");
  }

  const data = await response.json();
  setResult(data.report);

} catch (error) {

  console.error(error);

  setResult(
    "Server may be waking up (Render free tier). Please wait 20 seconds and click Analyze again."
  );

}

setLoading(false);
```

};

return (

```
<div style={{ padding: 40, fontFamily: "Arial" }}>

  <h1>AI Health Diagnostics Agent</h1>

  <input
    type="file"
    onChange={(e) => setFile(e.target.files[0])}
  />

  <br /><br />

  <button onClick={upload}>
    Analyze
  </button>

  <br /><br />

  {loading && <p>Analyzing report...</p>}

  {result && (
    <div
      style={{
        background: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
        width: "400px"
      }}
    >
      <h3>Result</h3>
      <pre>{result}</pre>
    </div>
  )}

</div>
```

);
}
