import { useEffect, useState } from "react";

const Main = () => {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState([]);
  const [stlink, setStlink] = useState(null);
const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!url) return;

    const fecthApi = async () => {
      const token = "52638adfba00a20697c2c8edfeda5fd852ef0dc7";
      const longUrl = url;
setIsLoading(true)
      try {
        const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ long_url: longUrl, domain: "bit.ly" }),
        });

        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        } else {
            
          const data = await response.json();
          setShortened((prev) => [
            ...prev,
            { original: longUrl, shortenedUrl: data.link },
          ]);
          setUrl("")
          
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    };

    fecthApi();
  }, [stlink]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() !== "") {
      setStlink(url);
    }

    
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => alert('Copied to clipboard!'))
        .catch((err) => console.error('Error copying text: ', err));
};
  return (
    <main>
      <div className="bg-[#3b3054] mx-32 py-4 relative bottom-10 ">
        <form className="flex justify-center gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="w-[80%] py-3 px-5 rounded-lg outline-none"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#2acfcf] 
          w-28 rounded-lg hover:text-white"
          >
            Shorten It!
          </button>
        </form>
      </div>

      {shortened.map((link, index) => (
        <div
          className="bg-white mx-32 flex gap-4 justify-between px-5 rounded- my-4 py-3 w-[80vw]"
          key={index}
        > {
            isLoading ? (<h2>Loading....</h2>) :  (<><p className="max-w-[30%] break-words">{link.original}</p>
            <p>{link.shortenedUrl}</p>
            <button className="cursor-pointer bg-[#2acfcf] px-3 py-1" onClick={()=>copyToClipboard(link.shortenedUrl)}>copy</button>
            </>)
        }
         
        </div>
      ))}
    </main>
  );
};

export default Main;
