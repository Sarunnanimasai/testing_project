import React from "react";
import Card from "./card";
import { useEffect, useState, useContext } from "react";
import Navbar from "./navbar";
import SearchContext from "../searchContext";

function HomePage() {
  const { search } = useContext(SearchContext);
  console.log(search);
  const [arr, setArr] = useState([]);
  const [wholearr, setWholeArr] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  // const [newarr, setNewArr] = useState([]);
  // const [pageArr, setPageArr] = useState([]);
  const pageArr = [];
  let i = 1;
  while (i <= wholearr.length / 10) {
    pageArr.push(i);
    i++;
  }


  //   console.log(pageArr);
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const idvar = setInterval(() => {
  //     console.log("Hi");
  //     setCount((prev) => prev + 1);
  //   }, 2000);
  //   if (count === 5) {
  //     clearInterval(idvar);
  //   }
  //   return () => clearInterval(idvar);
  // }, [count]);
  // const [page, setPage] = useState(1);

  // const handleChange = (e) => {
  //   setSearchStr(e.target.value);
  // };
  // console.log(searchStr);

  const getData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setWholeArr(data);
        const end = page * 20;
        const start = page - 1;
        const newData = data.slice(start * 20, end);
        setArr(newData);
      });
  };

  const handlePage = (el) => {
    setPage(el);
  };

  //   console.log(page);

  // const handlePost = async () => {
  //   const obj = {
  //     profile:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalTnxL604AYAhRBLY8ALueAe3Z5yiauJxHA&usqp=CAU",
  //     name: "ANSHU",
  //     email: "anshu123@gmail.com",
  //     address: "Silicon",
  //   };
  //   await fetch("http://localhost:8080/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(obj),
  //   }).then((res) => {
  //     if (res.ok) {
  //       alert("Posted!");
  //     }
  //   });
  // };

  // const handlePut = async (id) => {
  //   await fetch(`http://localhost:8080/users/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       profile:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalTnxL604AYAhRBLY8ALueAe3Z5yiauJxHA&usqp=CAU",
  //       name: "SAMA",
  //       email: "sarun123@gmail.com",
  //       address: "Mera College",
  //     }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       alert("Updated!");
  //       getData();
  //     }
  //   });
  // };

  // const handlePatch = async (id) => {
  //   const updatedName = prompt("");
  //   await fetch(`http://localhost:8080/users/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: updatedName,
  //     }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       alert("Updated Name!");
  //       getData();
  //     }
  //   });
  // };

  // const handleDelete = async (id) => {
  //   await fetch(`http://localhost:8080/users/${id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.ok) {
  //       alert("Deleted");
  //       getData();
  //     }
  //   });
  // };

  // const handleSearch = async () => {
  //   await fetch(`${process.env.REACT_APP_BASE_URL}/`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArr(data.Search);
  //     });
  // };

  // const getSearchedData = () => {
  //   const newData = arr.filter((item) => item.name.includes(searchStr));
  //   console.log(newData);
  //   setNewArr(newData);
  // };

  useEffect(() => {
    getData();
  }, [page]);

  // console.log(wholearr.length);
  // useEffect(() => {
  //   getSearchedData();
  // }, [searchStr]);

  // console.log(arr);

  return (
    <div>
      <Navbar>
        
      </Navbar>
      {/* <button onClick={handlePost}>Post</button> */}
      {/* <input
        type="text"
        placeholder="Search"
        value={searchStr}
        onChange={(e) => handleChange(e)}
      /> */}
      {/* <button onClick={getSearchedData}>Search</button> */}
      {arr.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            marginTop: "5%",
          }}
        >
          {arr.map((el) => {
            return <Card userid={el.userId} title={el.title} body={el.body} />;
          })}
        </div>
      ) : (
        <h1>No Data Found</h1>
      )}
      {pageArr.map((el) => {
        return <button onClick={() => handlePage(el)}>{el}</button>;
      })}
    </div>
  );
}

export default HomePage;
