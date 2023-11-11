import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../cookie/cookie";
import axios from 'axios';

function HomeScreen() {
  const navigate = useNavigate();
  let isUser = getCookie('isUser');
  const accessToken = getCookie('accessToken');
  const [isUserFetching, setisUserFetching] = useState(false);

  async function getIsUser() {
    if (isUserFetching) return; // return if it early fetching

    console.log('getIsUser 호출');

    try {
      setisUserFetching(true); // Set fetching to true

      const response = await axios.get(
        "https://localhost:8080/login",
        {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        }
      )
      isUser = await response.data.flag;
      console.log("isUser: ", isUser);

      setisUserFetching(false); // Reset fetching to false
    }
    catch(error) {
      console.log('Error: ', error);
      setisUserFetching(false); // Reset fetching even in case of error
    }
  }

  useEffect(() => {
    if (!isUser) {
        console.log('isUser: ', isUser);
        getIsUser();
        setCookie('isUser', `${isUser}`);
        navigate("/signup");
    }
  }, [isUser]);
  
  return (
    <div>HomeScreen</div>
  )
}

export default HomeScreen