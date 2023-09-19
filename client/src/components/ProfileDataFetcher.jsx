import { useState, useEffect } from 'react';

const ProfileDataFetcher = ({ token, setUser, setPosts, setReplies }) => {
    useEffect(() => {
      const token = localStorage.getItem("token")
      const userId = localStorage.getItem("id")
      console.log(token)
      console.log(userId)
        const fetchData = async () => {
            try {
                const userResponse = await fetch(`/api/user/${userId}`, {
                    headers: {
                        "Authorization" : `Bearer ${token}`
                    }
                });
                const userData = await userResponse.json();
                setUser(userData);

           

                // const repliesResponse = await fetch("/api/replies", {
                //   headers: {
                //     "Authorization": `Bearer ${token}`
                //   }
                // });
                // const repliesData = await repliesResponse.json();
                // setReplies(repliesData);

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchData();
    }, [setUser]);

    return null; 
};

export default ProfileDataFetcher;