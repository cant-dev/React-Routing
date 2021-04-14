import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const location = useLocation();
  const { search } = location;
  const query = new URLSearchParams(search);
  console.log(search);

  return (
    <div>
      <h1>UrlParameter-Pageです</h1>
      <p>パラメーターは{id}です</p>
      <p>Query Parameterは{query.get("name")}です</p>
    </div>
  );
};
