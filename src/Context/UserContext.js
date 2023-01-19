import { useEffect, useState } from "react";
 
export const AllUserData = () => {
  const [allUserData, setAllUserData] = useState();
  useEffect(() => {
    fetch("/user.json")
      .then((response) => response.json())
      .then((json) => setAllUserData(json));
  }, []);

  // console.log(allUserData);
  return allUserData;
};


export const UnderReview = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/user.json")
      .then((response) => response.json())
      .then((json) => {
        const inti = json.filter(
          (person) => person.status === "review"
        );
        // console.log(inti)
        setData(inti); 
      });
  }, []); 
  // console.log(data)
  return data; 
};
export const Approved = () => {
  const [data, setData] = useState(); 
  useEffect(() => {
    fetch("/user.json")
      .then((response) => response.json())
      .then((json) => {
        const inti = json.filter(
          (person) => person.status === "approved"
        );
        setData(inti);
      });
  }, []);
  return data;
};
export const Banned = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/user.json")
      .then((response) => response.json())
      .then((json) => {
        const inti = json.filter(
          (person) => person.status === "banned"
        );
        setData(inti);
      });
  }, []);
  return data;
};
export const Rejected = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/user.json")
      .then((response) => response.json())
      .then((json) => {
        const inti = json.filter(
          (person) => person.status === "rejected"
        );
        setData(inti);
      });
  }, []);
  return data;
};
export const Verified = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/user.json")
      .then((response) => response.json())
      .then((json) => {
        const inti = json.filter(
          (person) => person.status === "verified"
        );
        setData(inti);
      });
  }, []);
  return data;
};

