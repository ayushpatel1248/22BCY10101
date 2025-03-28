// const { client } = require('../db/db');

const usersServices = {};

const baseApi = "http://20.244.56.144/test";
const Bearertoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTQzNjY2LCJpYXQiOjE3NDMxNDMzNjYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg1ZTdiYmFlLTZiYTAtNDcyNS04ZWJhLWI2MDY1Y2JiNmJhZiIsInN1YiI6ImF5dXNocGF0ZWwyMDIyQHZpdGJob3BhbC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiODVlN2JiYWUtNmJhMC00NzI1LThlYmEtYjYwNjVjYmI2YmFmIiwiY2xpZW50U2VjcmV0IjoidW9WQmx6aUROd2xDb1ZGcCIsIm93bmVyTmFtZSI6IlJhaHVsIiwib3duZXJFbWFpbCI6ImF5dXNocGF0ZWwyMDIyQHZpdGJob3BhbC5hYy5pbiIsInJvbGxObyI6IjIyQkNZMTAxMDEifQ.JH3DSixMgf3CrbH9aQyyc1RVn6br9cOHL5t6m4BEDbA";

const tokengenerator = async () => {
  try {
    const res = await fetch(baseApi + "/auth", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        companyName: "goMart",
        clientID: "85e7bbae-6ba0-4725-8eba-b6065cbb6baf",
        clientSecret: "uoVBlziDNwlCoVFp",
        ownerName: "Rahul",
        ownerEmail: "ayushpatel2022@vitbhopal.ac.in",
        rollNo: "22BCY10101",
      }),
    });
    if (!res.ok) throw new Error(`Auth API Error: ${res.status}`);
    const data = await res.json();
    return data.accessToken;
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};

usersServices.popular = async () => {
  console.log("in popular service");
  try {
    const token = await tokengenerator();
    const res = await fetch(baseApi + "/users", {
      headers: { Authorization: `Bearer ${Bearertoken}` },
    });
    if (!res.ok) throw new Error(`Users API Error: ${res.status}`);
    const data = await res.json();

    console.log("popular service result : ", data);
    return {
      status: "OK",
      message: "Popular service result sent successfully",
      data,
    };
  } catch (err) {
    console.log(err);
    return {
      status: "err",
      message: "Error occurred in popular service",
      data: err.message,
    };
  }
};

usersServices.latest = async () => {
  console.log("in latest service");
  try {
    const token = await tokengenerator();
    const res = await fetch(baseApi + "/users", {
      headers: { Authorization: `Bearer ${Bearertoken}` },
    });
    if (!res.ok) throw new Error(`Users API Error: ${res.status}`);
    const data = await res.json();

    console.log("latest service result : ", data.users);
    return {
      status: "OK",
      message: "Latest service result sent successfully",
      data: data.users,
    };
  } catch (err) {
    console.log(err);
    return {
      status: "err",
      message: "Error occurred in latest service",
      data: err.message,
    };
  }
};

usersServices.users = async () => {
  console.log("in users service");
  try {
    // const token = await tokengenerator();
    // console.log("token generation:", Bearertoken);

    const res = await fetch(`${baseApi}/users`, {
      headers: { Authorization: `Bearer ${Bearertoken}` },
    });

    // if (!res.ok) throw new Error(`users API Error: ${res.status}`);

    const data = await res.json();
    // console.log("users service result:", data.users);

    // let userPostCounts = [];

    // for (let user in data.users) {
    //   const postRes = await fetch(`${baseApi}/users/${user.id}/post`, {
    //     headers: { Authorization: `Bearer ${Bearertoken}` },
    //   });

    //   if (!postRes.ok) throw new Error(`Posts API Error: ${postRes.status}`);

    //   const postData = await postRes.json();
    //   userPostCounts.push({ userId: user.id, postCount: postData.posts.length });
    // }

    // const topUsers = userPostCounts
    //   .sort((a, b) => b.postCount - a.postCount)
    //   .slice(0, 5);

    // console.log("Top users:", topUsers);
    
    return {
      status: "OK",
      message: "Top 5 users with highest number of posts fetched successfully",
      data: data.users,
    };
  } catch (err) {
    console.error("Error in users service:", err);
    return {
      status: "error",
      message: "Error occurred in users service",
      data: err.message,
    };
  }
};


module.exports = usersServices;
