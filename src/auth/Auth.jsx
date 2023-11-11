import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, setCookie } from "../cookie/cookie";
 
function Auth() {
    const navigate = useNavigate();
    const PARAMS = new URL(document.location).searchParams;
    const KAKAO_CODE = PARAMS.get("code");
    const [accessTokenFetching, setAccessTokenFetching] = useState(false);
    let accessToken = getCookie('accessToken');
 
    console.log("KAKAO_CODE:", KAKAO_CODE);
 
    // Access Token 받아오기
    const getAccessToken = async () => {
        if (accessTokenFetching) return; // Return early if fetching
 
        console.log("getAccessToken 호출");
 
        try {
            setAccessTokenFetching(true); // Set fetching to true
 
            const response = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                {
                    grant_type: 'authorization_code',
                    client_id: '86a5dfea14077486dbf21e12fa2d79cd',
                    redirect_uri: 'http://localhost:3000/auth',
                    code: KAKAO_CODE,
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    },
                }
            );
            accessToken = await response.data.access_token;
            console.log("accessToken:", accessToken);
 
            setAccessTokenFetching(false); // Reset fetching to false
        } catch (error) {
            console.error("Error:", error);
            setAccessTokenFetching(false); // Reset fetching even in case of error
        }
    };
 
 
    useEffect(() => {
        if (KAKAO_CODE && !accessToken) {
            console.log('cookie accessToken: ',accessToken);
            getAccessToken();
            setCookie('accessToken', `${accessToken}`);
            navigate("/");
        }
    }, [KAKAO_CODE]);
 
 
    return (
        <div>
           Loading...
        </div>
    );
}
 
export default Auth;