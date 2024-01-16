import React ,{useState} from "react";


export default function Menu() {
  const [data, setData] = useState([]);
  
  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:8080/menu/getAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Resolved Response from Spring Boot:", responseData);
        setData(responseData);
      } else {
        console.error("Failed to fetch data from Spring Boot");
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  };


  return (

    
      <main className="product-space">
        <div className="container">
        <button type="button" className="btn btn-primary" onClick={sendRequest} style={{"marginTop" : "15px"}}>Refresh items</button>
          <div className="row" style={{"marginTop":"15px"}}>
            {data.map((item) => {
              const { id , name , desc , image , price} = item;
              return (
                <div className="col-lg-6 col-md-6 col-sm-12 mb-3" key={id}>
                  <article className="shadow rounded h-100">
                    <div className="card h-100">
                      <img
                        src={image}
                        className="card-img-top img-ratio"
                        style={{ aspectRatio: "16/10", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{desc}</p>
                        <button className="btn bg-primary text-light">
                          ₹ {price}
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </main>
  );
}

