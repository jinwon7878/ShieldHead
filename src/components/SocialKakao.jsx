import React from 'react'
import kakaoLoginImg from '../assets/images/kakao_login_medium_wide.png';
import styled from 'styled-components';

const KakaoButton = styled.button`
    display: flex;
    padding: 0;
    border: none;
    box-shadow: none;
`

function SocialKakao() {
    const Rest_api_key='86a5dfea14077486dbf21e12fa2d79cd' //REST API KEY
    const redirect_uri = 'http://localhost:3000/auth' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <KakaoButton onClick={handleLogin}>
        <img src={kakaoLoginImg} alt='kakao login' />
    </KakaoButton>
    </>
    )
}

export default SocialKakao